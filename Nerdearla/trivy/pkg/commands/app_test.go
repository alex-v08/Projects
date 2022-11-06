package commands

import (
	"bytes"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func Test_showVersion(t *testing.T) {
	type args struct {
		cacheDir     string
		outputFormat string
		version      string
	}
	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "happy path, table output",
			args: args{
				outputFormat: "table",
				version:      "v1.2.3",
				cacheDir:     "testdata",
			},
			want: `Version: v1.2.3
Vulnerability DB:
  Version: 2
  UpdatedAt: 2022-03-02 06:07:07.99504083 +0000 UTC
  NextUpdate: 2022-03-02 12:07:07.99504023 +0000 UTC
  DownloadedAt: 2022-03-02 10:03:38.383312 +0000 UTC
`,
		},
		{
			name: "sad path, bogus cache dir",
			args: args{
				outputFormat: "json",
				version:      "1.2.3",
				cacheDir:     "/foo/bar/bogus",
			},
			want: `{"Version":"1.2.3"}
`,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := new(bytes.Buffer)
			showVersion(tt.args.cacheDir, tt.args.outputFormat, tt.args.version, got)
			assert.Equal(t, tt.want, got.String(), tt.name)
		})
	}
}

// Check flag and command for print version
func TestPrintVersion(t *testing.T) {
	tableOutput := `Version: test
Vulnerability DB:
  Version: 2
  UpdatedAt: 2022-03-02 06:07:07.99504083 +0000 UTC
  NextUpdate: 2022-03-02 12:07:07.99504023 +0000 UTC
  DownloadedAt: 2022-03-02 10:03:38.383312 +0000 UTC
`
	jsonOutput := `{"Version":"test","VulnerabilityDB":{"Version":2,"NextUpdate":"2022-03-02T12:07:07.99504023Z","UpdatedAt":"2022-03-02T06:07:07.99504083Z","DownloadedAt":"2022-03-02T10:03:38.383312Z"}}
`

	tests := []struct {
		name      string
		arguments []string // 1st argument is path to trivy binaries
		want      string
	}{
		{
			name:      "happy path. '-v' flag is used",
			arguments: []string{"-v", "--cache-dir", "testdata"},
			want:      tableOutput,
		},
		{
			name:      "happy path. '-version' flag is used",
			arguments: []string{"--version", "--cache-dir", "testdata"},
			want:      tableOutput,
		},
		{
			name:      "happy path. 'version' command is used",
			arguments: []string{"--cache-dir", "testdata", "version"},
			want:      tableOutput,
		},
		{
			name:      "happy path. 'version', '--format json' flags are used",
			arguments: []string{"--cache-dir", "testdata", "version", "--format", "json"},
			want:      jsonOutput,
		},
		{
			name:      "happy path. '-v', '--format json' flags are used",
			arguments: []string{"--cache-dir", "testdata", "-v", "--format", "json"},
			want:      jsonOutput,
		},
		{
			name:      "happy path. '--version', '--format json' flags are used",
			arguments: []string{"--cache-dir", "testdata", "--version", "--format", "json"},
			want:      jsonOutput,
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			got := new(bytes.Buffer)
			app := NewApp("test")
			SetOut(got)
			app.SetArgs(test.arguments)

			err := app.Execute()
			require.NoError(t, err)
			assert.Equal(t, test.want, got.String())
		})
	}
}
