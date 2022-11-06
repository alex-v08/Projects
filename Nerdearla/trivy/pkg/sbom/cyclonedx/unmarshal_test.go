package cyclonedx_test

import (
	"encoding/json"
	"os"
	"testing"

	"github.com/aquasecurity/trivy/pkg/sbom"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	ftypes "github.com/aquasecurity/trivy/pkg/fanal/types"
	"github.com/aquasecurity/trivy/pkg/sbom/cyclonedx"
)

func TestUnmarshaler_Unmarshal(t *testing.T) {
	tests := []struct {
		name      string
		inputFile string
		want      sbom.SBOM
		wantErr   string
	}{
		{
			name:      "happy path",
			inputFile: "testdata/happy/bom.json",
			want: sbom.SBOM{
				OS: &ftypes.OS{
					Family: "alpine",
					Name:   "3.16.0",
				},
				Packages: []ftypes.PackageInfo{
					{
						Packages: []ftypes.Package{
							{
								Name: "musl", Version: "1.2.3-r0", SrcName: "musl", SrcVersion: "1.2.3-r0", Licenses: []string{"MIT"},
								Ref: "pkg:apk/alpine/musl@1.2.3-r0?distro=3.16.0",
								Layer: ftypes.Layer{
									DiffID: "sha256:dd565ff850e7003356e2b252758f9bdc1ff2803f61e995e24c7844f6297f8fc3",
								},
							},
						},
					},
				},
				Applications: []ftypes.Application{
					{
						Type:     "composer",
						FilePath: "app/composer/composer.lock",
						Libraries: []ftypes.Package{
							{
								Name:    "pear/log",
								Version: "1.13.1",
								Ref:     "pkg:composer/pear/log@1.13.1",
								Layer: ftypes.Layer{
									DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
								},
							},
							{

								Name:    "pear/pear_exception",
								Version: "v1.0.0",
								Ref:     "pkg:composer/pear/pear_exception@v1.0.0",
								Layer: ftypes.Layer{
									DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
								},
							},
						},
					},
					{
						Type:     "gobinary",
						FilePath: "app/gobinary/gobinary",
						Libraries: []ftypes.Package{
							{
								Name:    "github.com/package-url/packageurl-go",
								Version: "v0.1.1-0.20220203205134-d70459300c8a",
								Ref:     "pkg:golang/github.com/package-url/packageurl-go@v0.1.1-0.20220203205134-d70459300c8a",
								Layer: ftypes.Layer{
									DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
								},
							},
						},
					},
					{
						Type: "gradle",
						Libraries: []ftypes.Package{
							{
								Name:    "com.example:example",
								Ref:     "pkg:gradle/com.example/example@0.0.1",
								Version: "0.0.1",
								Layer: ftypes.Layer{
									DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
								},
							},
						},
					},
					{
						Type: "jar",
						Libraries: []ftypes.Package{
							{
								Name:    "org.codehaus.mojo:child-project",
								Ref:     "pkg:maven/org.codehaus.mojo/child-project@1.0?file_path=app%2Fmaven%2Ftarget%2Fchild-project-1.0.jar",
								Version: "1.0",
								Layer: ftypes.Layer{
									DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
								},
							},
						},
					},
					{
						Type:     "node-pkg",
						FilePath: "",
						Libraries: []ftypes.Package{
							{
								Name:     "bootstrap",
								Version:  "5.0.2",
								Ref:      "pkg:npm/bootstrap@5.0.2?file_path=app%2Fapp%2Fpackage.json",
								Licenses: []string{"MIT"},
								Layer: ftypes.Layer{
									DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
								},
							},
						},
					},
				},
			},
		},
		{
			name:      "happy path for unrelated bom",
			inputFile: "testdata/happy/unrelated-bom.json",
			want: sbom.SBOM{
				Applications: []ftypes.Application{
					{
						Type:     "composer",
						FilePath: "",
						Libraries: []ftypes.Package{
							{
								Name:    "pear/log",
								Version: "1.13.1",
								Ref:     "pkg:composer/pear/log@1.13.1",
							},
							{

								Name:    "pear/pear_exception",
								Version: "v1.0.0",
								Ref:     "pkg:composer/pear/pear_exception@v1.0.0",
							},
						},
					},
				},
			},
		},
		{
			name:      "happy path for independent library bom",
			inputFile: "testdata/happy/independent-library-bom.json",
			want: sbom.SBOM{
				Applications: []ftypes.Application{
					{
						Type:     "composer",
						FilePath: "",
						Libraries: []ftypes.Package{
							{
								Name:    "pear/core",
								Version: "1.13.1",
								Ref:     "pkg:composer/pear/core@1.13.1",
							},
							{
								Name:    "pear/log",
								Version: "1.13.1",
								Ref:     "pkg:composer/pear/log@1.13.1",
							},
							{

								Name:    "pear/pear_exception",
								Version: "v1.0.0",
								Ref:     "pkg:composer/pear/pear_exception@v1.0.0",
							},
						},
					},
				},
			},
		},
		{
			name:      "happy path only os component",
			inputFile: "testdata/happy/os-only-bom.json",
			want: sbom.SBOM{
				OS: &ftypes.OS{
					Family: "alpine",
					Name:   "3.16.0",
				},
				Packages: []ftypes.PackageInfo{
					{},
				},
			},
		},
		{
			name:      "happy path empty component",
			inputFile: "testdata/happy/empty-bom.json",
			want:      sbom.SBOM{},
		},
		{
			name:      "happy path empty metadata component",
			inputFile: "testdata/happy/empty-metadata-component-bom.json",
			want:      sbom.SBOM{},
		},
		{
			name:      "sad path invalid purl",
			inputFile: "testdata/sad/invalid-purl.json",
			wantErr:   "failed to parse purl",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			f, err := os.Open(tt.inputFile)
			require.NoError(t, err)
			defer f.Close()

			var cdx cyclonedx.CycloneDX
			err = json.NewDecoder(f).Decode(&cdx)
			if tt.wantErr != "" {
				require.Error(t, err)
				assert.Contains(t, err.Error(), tt.wantErr)
				return
			}

			// Not compare the CycloneDX field
			got := *cdx.SBOM
			got.CycloneDX = nil

			require.NoError(t, err)
			assert.Equal(t, tt.want, got)
		})
	}
}
