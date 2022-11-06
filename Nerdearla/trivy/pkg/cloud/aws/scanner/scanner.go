package scanner

import (
	"context"
	"fmt"
	"strings"

	"github.com/aquasecurity/defsec/pkg/state"

	"github.com/aquasecurity/defsec/pkg/framework"

	"github.com/aquasecurity/trivy/pkg/cloud/aws/cache"
	"github.com/aquasecurity/trivy/pkg/flag"
	"github.com/aquasecurity/trivy/pkg/log"

	"github.com/aquasecurity/defsec/pkg/scan"
	"github.com/aquasecurity/defsec/pkg/scanners/cloud/aws"
	"github.com/aquasecurity/defsec/pkg/scanners/options"
)

type AWSScanner struct {
}

func NewScanner() *AWSScanner {
	return &AWSScanner{}
}

func (s *AWSScanner) Scan(ctx context.Context, option flag.Options) (scan.Results, bool, error) {

	awsCache := cache.New(option.CacheDir, option.MaxCacheAge, option.Account, option.Region)
	included, missing := awsCache.ListServices(option.Services)

	var scannerOpts []options.ScannerOption
	if !option.NoProgress {
		tracker := newProgressTracker()
		defer tracker.Finish()
		scannerOpts = append(scannerOpts, aws.ScannerWithProgressTracker(tracker))
	}

	if len(missing) > 0 {
		scannerOpts = append(scannerOpts, aws.ScannerWithAWSServices(missing...))
	}

	if option.Debug {
		scannerOpts = append(scannerOpts, options.ScannerWithDebug(&defsecLogger{}))
	}

	if option.Trace {
		scannerOpts = append(scannerOpts, options.ScannerWithTrace(&defsecLogger{}))
	}

	if option.Region != "" {
		scannerOpts = append(
			scannerOpts,
			aws.ScannerWithAWSRegion(option.Region),
		)
	}

	if option.Endpoint != "" {
		scannerOpts = append(
			scannerOpts,
			aws.ScannerWithAWSEndpoint(option.Endpoint),
		)
	}

	if len(option.RegoOptions.PolicyPaths) > 0 {
		scannerOpts = append(
			scannerOpts,
			options.ScannerWithPolicyDirs(option.RegoOptions.PolicyPaths...),
		)
	}

	if len(option.RegoOptions.PolicyNamespaces) > 0 {
		scannerOpts = append(
			scannerOpts,
			options.ScannerWithPolicyNamespaces(option.RegoOptions.PolicyNamespaces...),
		)
	}

	scannerOpts = append(scannerOpts, options.ScannerWithFrameworks(
		framework.Default,
		framework.CIS_AWS_1_2,
	))

	scanner := aws.New(scannerOpts...)

	var freshState *state.State
	if len(missing) > 0 {
		var err error
		freshState, err = scanner.CreateState(ctx)
		if err != nil {
			return nil, false, err
		}
	}

	var fullState *state.State
	if previousState, err := awsCache.LoadState(); err == nil {
		if freshState != nil {
			fullState, err = previousState.Merge(freshState)
			if err != nil {
				return nil, false, err
			}
		} else {
			fullState = previousState
		}
	} else {
		fullState = freshState
	}

	if fullState == nil {
		return nil, false, fmt.Errorf("no resultant state found")
	}

	if err := awsCache.AddServices(fullState, missing); err != nil {
		return nil, false, err
	}

	defsecResults, err := scanner.Scan(ctx, fullState)
	if err != nil {
		return nil, false, err
	}

	return defsecResults, len(included) > 0, nil
}

type defsecLogger struct {
}

func (d *defsecLogger) Write(p []byte) (n int, err error) {
	log.Logger.Debug("[defsec] " + strings.TrimSpace(string(p)))
	return len(p), nil
}
