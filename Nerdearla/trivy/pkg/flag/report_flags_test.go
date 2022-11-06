package flag_test

import (
	"os"
	"testing"

	"github.com/spf13/viper"
	"github.com/stretchr/testify/assert"
	"go.uber.org/zap"
	"go.uber.org/zap/zaptest/observer"

	dbTypes "github.com/aquasecurity/trivy-db/pkg/types"
	"github.com/aquasecurity/trivy/pkg/flag"
	"github.com/aquasecurity/trivy/pkg/log"
	"github.com/aquasecurity/trivy/pkg/report"
)

func TestReportFlagGroup_ToOptions(t *testing.T) {
	type fields struct {
		format         string
		template       string
		dependencyTree bool
		listAllPkgs    bool
		ignoreUnfixed  bool
		ignoreFile     string
		exitCode       int
		ignorePolicy   string
		output         string
		severities     string

		debug bool
	}
	tests := []struct {
		name     string
		fields   fields
		want     flag.ReportOptions
		wantLogs []string
	}{
		{
			name:   "happy default (without flags)",
			fields: fields{},
			want: flag.ReportOptions{
				Output: os.Stdout,
			},
		},
		{
			name: "happy path with a low case severity",
			fields: fields{
				severities: "critical",
			},
			want: flag.ReportOptions{
				Output: os.Stdout,
				Severities: []dbTypes.Severity{
					dbTypes.SeverityCritical,
				},
			},
		},
		{
			name: "happy path with an unknown severity",
			fields: fields{
				severities: "CRITICAL,INVALID",
			},
			want: flag.ReportOptions{
				Output: os.Stdout,
				Severities: []dbTypes.Severity{
					dbTypes.SeverityCritical,
				},
			},
			wantLogs: []string{
				"unknown severity option: unknown severity: INVALID",
			},
		},
		{
			name: "happy path with an cyclonedx",
			fields: fields{
				severities:  "CRITICAL",
				format:      "cyclonedx",
				listAllPkgs: true,
			},
			want: flag.ReportOptions{
				Output:      os.Stdout,
				Severities:  []dbTypes.Severity{dbTypes.SeverityCritical},
				Format:      report.FormatCycloneDX,
				ListAllPkgs: true,
			},
		},
		{
			name: "happy path with an cyclonedx option list-all-pkgs is false",
			fields: fields{
				severities:  "CRITICAL",
				format:      "cyclonedx",
				listAllPkgs: false,

				debug: true,
			},
			wantLogs: []string{
				`["cyclonedx" "spdx" "spdx-json" "github"] automatically enables '--list-all-pkgs'.`,
				`Severities: ["CRITICAL"]`,
			},
			want: flag.ReportOptions{
				Output: os.Stdout,
				Severities: []dbTypes.Severity{
					dbTypes.SeverityCritical,
				},
				Format:      report.FormatCycloneDX,
				ListAllPkgs: true,
			},
		},
		{
			name: "invalid option combination: --template enabled without --format",
			fields: fields{
				template:   "@contrib/gitlab.tpl",
				severities: "LOW",
			},
			wantLogs: []string{
				"'--template' is ignored because '--format template' is not specified. Use '--template' option with '--format template' option.",
			},
			want: flag.ReportOptions{
				Output:     os.Stdout,
				Severities: []dbTypes.Severity{dbTypes.SeverityLow},
				Template:   "@contrib/gitlab.tpl",
			},
		},
		{
			name: "invalid option combination: --template and --format json",
			fields: fields{
				format:     "json",
				template:   "@contrib/gitlab.tpl",
				severities: "LOW",
			},
			wantLogs: []string{
				"'--template' is ignored because '--format json' is specified. Use '--template' option with '--format template' option.",
			},
			want: flag.ReportOptions{
				Output:     os.Stdout,
				Format:     "json",
				Severities: []dbTypes.Severity{dbTypes.SeverityLow},
				Template:   "@contrib/gitlab.tpl",
			},
		},
		{
			name: "invalid option combination: --format template without --template",
			fields: fields{
				format:     "template",
				severities: "LOW",
			},
			wantLogs: []string{
				"'--format template' is ignored because '--template' is not specified. Specify '--template' option when you use '--format template'.",
			},
			want: flag.ReportOptions{
				Output:     os.Stdout,
				Format:     "template",
				Severities: []dbTypes.Severity{dbTypes.SeverityLow},
			},
		},
		{
			name: "invalid option combination: --list-all-pkgs with --format table",
			fields: fields{
				format:      "table",
				severities:  "LOW",
				listAllPkgs: true,
			},
			wantLogs: []string{
				`"--list-all-pkgs" cannot be used with "--format table". Try "--format json" or other formats.`,
			},
			want: flag.ReportOptions{
				Format:      "table",
				Output:      os.Stdout,
				Severities:  []dbTypes.Severity{dbTypes.SeverityLow},
				ListAllPkgs: true,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			level := zap.WarnLevel
			if tt.fields.debug {
				level = zap.DebugLevel
			}
			core, obs := observer.New(level)
			log.Logger = zap.New(core).Sugar()

			viper.Set(flag.FormatFlag.ConfigName, tt.fields.format)
			viper.Set(flag.TemplateFlag.ConfigName, tt.fields.template)
			viper.Set(flag.DependencyTreeFlag.ConfigName, tt.fields.dependencyTree)
			viper.Set(flag.ListAllPkgsFlag.ConfigName, tt.fields.listAllPkgs)
			viper.Set(flag.IgnoreFileFlag.ConfigName, tt.fields.ignoreFile)
			viper.Set(flag.IgnoreUnfixedFlag.ConfigName, tt.fields.ignoreUnfixed)
			viper.Set(flag.IgnorePolicyFlag.ConfigName, tt.fields.ignorePolicy)
			viper.Set(flag.ExitCodeFlag.ConfigName, tt.fields.exitCode)
			viper.Set(flag.OutputFlag.ConfigName, tt.fields.output)
			viper.Set(flag.SeverityFlag.ConfigName, tt.fields.severities)

			// Assert options
			f := &flag.ReportFlagGroup{
				Format:         &flag.FormatFlag,
				Template:       &flag.TemplateFlag,
				DependencyTree: &flag.DependencyTreeFlag,
				ListAllPkgs:    &flag.ListAllPkgsFlag,
				IgnoreFile:     &flag.IgnoreFileFlag,
				IgnorePolicy:   &flag.IgnorePolicyFlag,
				ExitCode:       &flag.ExitCodeFlag,
				Output:         &flag.OutputFlag,
				Severity:       &flag.SeverityFlag,
			}

			got, err := f.ToOptions(os.Stdout)
			assert.NoError(t, err)
			assert.Equalf(t, tt.want, got, "ToOptions()")

			// Assert log messages
			var gotMessages []string
			for _, entry := range obs.AllUntimed() {
				gotMessages = append(gotMessages, entry.Message)
			}
			assert.Equal(t, tt.wantLogs, gotMessages, tt.name)
		})
	}
}
