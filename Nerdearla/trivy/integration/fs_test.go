//go:build integration
// +build integration

package integration

import (
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestFilesystem(t *testing.T) {
	type args struct {
		securityChecks string
		severity       []string
		ignoreIDs      []string
		policyPaths    []string
		namespaces     []string
		listAllPkgs    bool
		input          string
		secretConfig   string
		filePatterns   []string
		helmSet        []string
		helmValuesFile []string
		skipFiles      []string
		skipDirs       []string
	}
	tests := []struct {
		name   string
		args   args
		golden string
	}{
		{
			name: "gomod",
			args: args{
				securityChecks: "vuln",
				input:          "testdata/fixtures/fs/gomod",
			},
			golden: "testdata/gomod.json.golden",
		},
		{
			name: "gomod with skip files",
			args: args{
				securityChecks: "vuln",
				input:          "testdata/fixtures/fs/gomod",
				skipFiles:      []string{"/testdata/fixtures/fs/gomod/submod2/go.mod"},
			},
			golden: "testdata/gomod-skip.json.golden",
		},
		{
			name: "gomod with skip dirs",
			args: args{
				securityChecks: "vuln",
				input:          "testdata/fixtures/fs/gomod",
				skipDirs:       []string{"/testdata/fixtures/fs/gomod/submod2"},
			},
			golden: "testdata/gomod-skip.json.golden",
		},
		{
			name: "nodejs",
			args: args{
				securityChecks: "vuln",
				input:          "testdata/fixtures/fs/nodejs",
				listAllPkgs:    true,
			},
			golden: "testdata/nodejs.json.golden",
		},
		{
			name: "pnpm",
			args: args{
				securityChecks: "vuln",
				input:          "testdata/fixtures/fs/pnpm",
			},
			golden: "testdata/pnpm.json.golden",
		},
		{
			name: "pip",
			args: args{
				securityChecks: "vuln",
				listAllPkgs:    true,
				input:          "testdata/fixtures/fs/pip",
			},
			golden: "testdata/pip.json.golden",
		},
		{
			name: "pom",
			args: args{
				securityChecks: "vuln",
				input:          "testdata/fixtures/fs/pom",
			},
			golden: "testdata/pom.json.golden",
		},
		{
			name: "gradle",
			args: args{
				securityChecks: "vuln",
				input:          "testdata/fixtures/fs/gradle",
			},
			golden: "testdata/gradle.json.golden",
		},
		{
			name: "conan",
			args: args{
				securityChecks: "vuln",
				listAllPkgs:    true,
				input:          "testdata/fixtures/fs/conan",
			},
			golden: "testdata/conan.json.golden",
		},
		{
			name: "dockerfile",
			args: args{
				securityChecks: "config",
				input:          "testdata/fixtures/fs/dockerfile",
				namespaces:     []string{"testing"},
			},
			golden: "testdata/dockerfile.json.golden",
		},
		{
			name: "dockerfile with custom file pattern",
			args: args{
				securityChecks: "config",
				input:          "testdata/fixtures/fs/dockerfile_file_pattern",
				namespaces:     []string{"testing"},
				filePatterns:   []string{"dockerfile:Customfile"},
			},
			golden: "testdata/dockerfile_file_pattern.json.golden",
		},
		{
			name: "dockerfile with rule exception",
			args: args{
				securityChecks: "config",
				policyPaths:    []string{"testdata/fixtures/fs/rule-exception/policy"},
				input:          "testdata/fixtures/fs/rule-exception",
			},
			golden: "testdata/dockerfile-rule-exception.json.golden",
		},
		{
			name: "dockerfile with namespace exception",
			args: args{
				securityChecks: "config",
				policyPaths:    []string{"testdata/fixtures/fs/namespace-exception/policy"},
				input:          "testdata/fixtures/fs/namespace-exception",
			},
			golden: "testdata/dockerfile-namespace-exception.json.golden",
		},
		{
			name: "dockerfile with custom policies",
			args: args{
				securityChecks: "config",
				policyPaths:    []string{"testdata/fixtures/fs/custom-policy/policy"},
				namespaces:     []string{"user"},
				input:          "testdata/fixtures/fs/custom-policy",
			},
			golden: "testdata/dockerfile-custom-policies.json.golden",
		},
		{
			name: "tarball helm chart scanning with builtin policies",
			args: args{
				securityChecks: "config",
				input:          "testdata/fixtures/fs/helm",
			},
			golden: "testdata/helm.json.golden",
		},
		{
			name: "helm chart directory scanning with builtin policies",
			args: args{
				securityChecks: "config",
				input:          "testdata/fixtures/fs/helm_testchart",
			},
			golden: "testdata/helm_testchart.json.golden",
		},
		{
			name: "helm chart directory scanning with value overrides using set",
			args: args{
				securityChecks: "config",
				input:          "testdata/fixtures/fs/helm_testchart",
				helmSet:        []string{"securityContext.runAsUser=0"},
			},
			golden: "testdata/helm_testchart.overridden.json.golden",
		},
		{
			name: "helm chart directory scanning with value overrides using value file",
			args: args{
				securityChecks: "config",
				input:          "testdata/fixtures/fs/helm_testchart",
				helmValuesFile: []string{"testdata/fixtures/fs/helm_values/values.yaml"},
			},
			golden: "testdata/helm_testchart.overridden.json.golden",
		},
		{
			name: "helm chart directory scanning with builtin policies and non string Chart name",
			args: args{
				securityChecks: "config",
				input:          "testdata/fixtures/fs/helm_badname",
			},
			golden: "testdata/helm_badname.json.golden",
		},
		{
			name: "secrets",
			args: args{
				securityChecks: "vuln,secret",
				input:          "testdata/fixtures/fs/secrets",
				secretConfig:   "testdata/fixtures/fs/secrets/trivy-secret.yaml",
			},
			golden: "testdata/secrets.json.golden",
		},
	}

	// Set up testing DB
	cacheDir := initDB(t)

	// Set a temp dir so that modules will not be loaded
	t.Setenv("XDG_DATA_HOME", cacheDir)

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			osArgs := []string{
				"-q", "--cache-dir", cacheDir, "fs", "--skip-db-update", "--skip-policy-update",
				"--format", "json", "--offline-scan", "--security-checks", tt.args.securityChecks,
			}

			if len(tt.args.policyPaths) != 0 {
				for _, policyPath := range tt.args.policyPaths {
					osArgs = append(osArgs, "--config-policy", policyPath)
				}
			}

			if len(tt.args.namespaces) != 0 {
				for _, namespace := range tt.args.namespaces {
					osArgs = append(osArgs, "--policy-namespaces", namespace)
				}
			}

			if len(tt.args.severity) != 0 {
				osArgs = append(osArgs, "--severity", strings.Join(tt.args.severity, ","))
			}

			if len(tt.args.ignoreIDs) != 0 {
				trivyIgnore := ".trivyignore"
				err := os.WriteFile(trivyIgnore, []byte(strings.Join(tt.args.ignoreIDs, "\n")), 0444)
				assert.NoError(t, err, "failed to write .trivyignore")
				defer os.Remove(trivyIgnore)
			}

			if len(tt.args.filePatterns) != 0 {
				for _, filePattern := range tt.args.filePatterns {
					osArgs = append(osArgs, "--file-patterns", filePattern)
				}
			}

			if len(tt.args.helmSet) != 0 {
				for _, helmSet := range tt.args.helmSet {
					osArgs = append(osArgs, "--helm-set", helmSet)
				}
			}

			if len(tt.args.helmValuesFile) != 0 {
				for _, helmValuesFile := range tt.args.helmValuesFile {
					osArgs = append(osArgs, "--helm-values", helmValuesFile)
				}
			}

			if len(tt.args.skipFiles) != 0 {
				for _, skipFile := range tt.args.skipFiles {
					osArgs = append(osArgs, "--skip-files", skipFile)
				}
			}

			if len(tt.args.skipDirs) != 0 {
				for _, skipDir := range tt.args.skipDirs {
					osArgs = append(osArgs, "--skip-dirs", skipDir)
				}
			}

			// Setup the output file
			outputFile := filepath.Join(t.TempDir(), "output.json")
			if *update {
				outputFile = tt.golden
			}

			if tt.args.listAllPkgs {
				osArgs = append(osArgs, "--list-all-pkgs")
			}

			if tt.args.secretConfig != "" {
				osArgs = append(osArgs, "--secret-config", tt.args.secretConfig)
			}

			osArgs = append(osArgs, "--output", outputFile)
			osArgs = append(osArgs, tt.args.input)

			// Run "trivy fs"
			err := execute(osArgs)
			require.NoError(t, err)

			// Compare want and got
			compareReports(t, tt.golden, outputFile)
		})
	}
}
