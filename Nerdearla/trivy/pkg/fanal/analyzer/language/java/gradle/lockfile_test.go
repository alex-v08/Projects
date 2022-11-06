package gradle

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/aquasecurity/trivy/pkg/fanal/analyzer"
	"github.com/aquasecurity/trivy/pkg/fanal/types"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func Test_gradleLockAnalyzer_Analyze(t *testing.T) {
	tests := []struct {
		name      string
		inputFile string
		want      *analyzer.AnalysisResult
	}{
		{
			name:      "happy path",
			inputFile: "testdata/happy.lockfile",
			want: &analyzer.AnalysisResult{
				Applications: []types.Application{
					{
						Type:     types.Gradle,
						FilePath: "testdata/happy.lockfile",
						Libraries: []types.Package{
							{
								Name:    "com.example:example",
								Version: "0.0.1",
							},
						},
					},
				},
			},
		},
		{
			name:      "empty file",
			inputFile: "testdata/empty.lockfile",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			f, err := os.Open(tt.inputFile)
			require.NoError(t, err)
			defer func() {
				err = f.Close()
				assert.NoError(t, err)
			}()

			a := gradleLockAnalyzer{}
			got, err := a.Analyze(nil, analyzer.AnalysisInput{
				FilePath: tt.inputFile,
				Content:  f,
			})

			assert.NoError(t, err)
			assert.Equal(t, tt.want, got)
		})
	}
}

func Test_nugetLibraryAnalyzer_Required(t *testing.T) {
	tests := []struct {
		name     string
		filePath string
		want     bool
	}{
		{
			name:     "default name",
			filePath: "test/gradle.lockfile",
			want:     true,
		},
		{
			name:     "name with prefix",
			filePath: "test/settings-gradle.lockfile",
			want:     true,
		},
		{
			name:     "txt",
			filePath: "test/test.txt",
			want:     false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := os.MkdirAll(filepath.Dir(tt.filePath), 0700)
			assert.NoError(t, err)
			_, err = os.Create(tt.filePath)
			assert.NoError(t, err)
			defer func() {
				err = os.RemoveAll(filepath.Dir(tt.filePath))
				assert.NoError(t, err)
			}()

			fileInfo, err := os.Stat(tt.filePath)
			assert.NoError(t, err)

			a := gradleLockAnalyzer{}
			got := a.Required("", fileInfo)
			assert.Equal(t, tt.want, got)
		})
	}
}
