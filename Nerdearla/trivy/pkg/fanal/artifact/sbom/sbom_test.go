package sbom_test

import (
	"context"
	"errors"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/aquasecurity/trivy/pkg/fanal/artifact"
	"github.com/aquasecurity/trivy/pkg/fanal/artifact/sbom"
	"github.com/aquasecurity/trivy/pkg/fanal/cache"
	"github.com/aquasecurity/trivy/pkg/fanal/types"
)

func TestArtifact_Inspect(t *testing.T) {
	tests := []struct {
		name               string
		filePath           string
		putBlobExpectation cache.ArtifactCachePutBlobExpectation
		want               types.ArtifactReference
		wantErr            string
	}{
		{
			name:     "happy path",
			filePath: "testdata/bom.json",
			putBlobExpectation: cache.ArtifactCachePutBlobExpectation{
				Args: cache.ArtifactCachePutBlobArgs{
					BlobID: "sha256:21f10e5ab97c37f6c4d6a45815cd5db10e9539d5db8614d3b1d8890111d7a2b8",
					BlobInfo: types.BlobInfo{
						SchemaVersion: types.BlobJSONSchemaVersion,
						OS: &types.OS{
							Family: "alpine",
							Name:   "3.16.0",
						},
						PackageInfos: []types.PackageInfo{
							{
								Packages: []types.Package{
									{
										Name: "musl", Version: "1.2.3-r0", SrcName: "musl", SrcVersion: "1.2.3-r0", Licenses: []string{"MIT"},
										Ref: "pkg:apk/alpine/musl@1.2.3-r0?distro=3.16.0",
										Layer: types.Layer{
											DiffID: "sha256:dd565ff850e7003356e2b252758f9bdc1ff2803f61e995e24c7844f6297f8fc3",
										},
									},
								},
							},
						},
						Applications: []types.Application{
							{
								Type:     "composer",
								FilePath: "app/composer/composer.lock",
								Libraries: []types.Package{
									{
										Name:    "pear/log",
										Version: "1.13.1",
										Ref:     "pkg:composer/pear/log@1.13.1",
										Layer: types.Layer{
											DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
										},
									},
									{

										Name:    "pear/pear_exception",
										Version: "v1.0.0",
										Ref:     "pkg:composer/pear/pear_exception@v1.0.0",
										Layer: types.Layer{
											DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
										},
									},
								},
							},
							{
								Type:     "gobinary",
								FilePath: "app/gobinary/gobinary",
								Libraries: []types.Package{
									{
										Name:    "github.com/package-url/packageurl-go",
										Version: "v0.1.1-0.20220203205134-d70459300c8a",
										Ref:     "pkg:golang/github.com/package-url/packageurl-go@v0.1.1-0.20220203205134-d70459300c8a",
										Layer: types.Layer{
											DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
										},
									},
								},
							},
							{
								Type:     "jar",
								FilePath: "",
								Libraries: []types.Package{
									{
										Name:    "org.codehaus.mojo:child-project",
										Ref:     "pkg:maven/org.codehaus.mojo/child-project@1.0?file_path=app%2Fmaven%2Ftarget%2Fchild-project-1.0.jar",
										Version: "1.0",
										Layer: types.Layer{
											DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
										},
									},
								},
							},
							{
								Type:     "node-pkg",
								FilePath: "",
								Libraries: []types.Package{
									{
										Name:     "bootstrap",
										Version:  "5.0.2",
										Ref:      "pkg:npm/bootstrap@5.0.2?file_path=app%2Fapp%2Fpackage.json",
										Licenses: []string{"MIT"},
										Layer: types.Layer{
											DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
										},
									},
								},
							},
						},
					},
				},
				Returns: cache.ArtifactCachePutBlobReturns{},
			},
			want: types.ArtifactReference{
				Name: "testdata/bom.json",
				Type: types.ArtifactCycloneDX,
				ID:   "sha256:21f10e5ab97c37f6c4d6a45815cd5db10e9539d5db8614d3b1d8890111d7a2b8",
				BlobIDs: []string{
					"sha256:21f10e5ab97c37f6c4d6a45815cd5db10e9539d5db8614d3b1d8890111d7a2b8",
				},
			},
		},
		{
			name:     "happy path for sbom attestation",
			filePath: "testdata/sbom.cdx.intoto.jsonl",
			putBlobExpectation: cache.ArtifactCachePutBlobExpectation{
				Args: cache.ArtifactCachePutBlobArgs{
					BlobID: "sha256:21f10e5ab97c37f6c4d6a45815cd5db10e9539d5db8614d3b1d8890111d7a2b8",
					BlobInfo: types.BlobInfo{
						SchemaVersion: types.BlobJSONSchemaVersion,
						OS: &types.OS{
							Family: "alpine",
							Name:   "3.16.0",
						},
						PackageInfos: []types.PackageInfo{
							{
								Packages: []types.Package{
									{
										Name: "musl", Version: "1.2.3-r0", SrcName: "musl", SrcVersion: "1.2.3-r0", Licenses: []string{"MIT"},
										Ref: "pkg:apk/alpine/musl@1.2.3-r0?distro=3.16.0",
										Layer: types.Layer{
											DiffID: "sha256:dd565ff850e7003356e2b252758f9bdc1ff2803f61e995e24c7844f6297f8fc3",
										},
									},
								},
							},
						},
						Applications: []types.Application{
							{
								Type:     "composer",
								FilePath: "app/composer/composer.lock",
								Libraries: []types.Package{
									{
										Name:    "pear/log",
										Version: "1.13.1",
										Ref:     "pkg:composer/pear/log@1.13.1",
										Layer: types.Layer{
											DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
										},
									},
									{

										Name:    "pear/pear_exception",
										Version: "v1.0.0",
										Ref:     "pkg:composer/pear/pear_exception@v1.0.0",
										Layer: types.Layer{
											DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
										},
									},
								},
							},
							{
								Type:     "gobinary",
								FilePath: "app/gobinary/gobinary",
								Libraries: []types.Package{
									{
										Name:    "github.com/package-url/packageurl-go",
										Version: "v0.1.1-0.20220203205134-d70459300c8a",
										Ref:     "pkg:golang/github.com/package-url/packageurl-go@v0.1.1-0.20220203205134-d70459300c8a",
										Layer: types.Layer{
											DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
										},
									},
								},
							},
							{
								Type:     "jar",
								FilePath: "",
								Libraries: []types.Package{
									{
										Name:    "org.codehaus.mojo:child-project",
										Ref:     "pkg:maven/org.codehaus.mojo/child-project@1.0?file_path=app%2Fmaven%2Ftarget%2Fchild-project-1.0.jar",
										Version: "1.0",
										Layer: types.Layer{
											DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
										},
									},
								},
							},
							{
								Type:     "node-pkg",
								FilePath: "",
								Libraries: []types.Package{
									{
										Name:     "bootstrap",
										Version:  "5.0.2",
										Ref:      "pkg:npm/bootstrap@5.0.2?file_path=app%2Fapp%2Fpackage.json",
										Licenses: []string{"MIT"},
										Layer: types.Layer{
											DiffID: "sha256:3c79e832b1b4891a1cb4a326ef8524e0bd14a2537150ac0e203a5677176c1ca1",
										},
									},
								},
							},
						},
					},
				},
				Returns: cache.ArtifactCachePutBlobReturns{},
			},
			want: types.ArtifactReference{
				Name: "testdata/sbom.cdx.intoto.jsonl",
				Type: types.ArtifactCycloneDX,
				ID:   "sha256:21f10e5ab97c37f6c4d6a45815cd5db10e9539d5db8614d3b1d8890111d7a2b8",
				BlobIDs: []string{
					"sha256:21f10e5ab97c37f6c4d6a45815cd5db10e9539d5db8614d3b1d8890111d7a2b8",
				},
			},
		},
		{
			name:     "sad path with no such directory",
			filePath: "./testdata/unknown.json",
			wantErr:  "no such file or directory",
		},
		{
			name:     "sad path PutBlob returns an error",
			filePath: "testdata/os-only-bom.json",
			putBlobExpectation: cache.ArtifactCachePutBlobExpectation{
				Args: cache.ArtifactCachePutBlobArgs{
					BlobID: "sha256:05a4e94bb5503e437108210c90849a977ea0b9b83e4e8606aabc9647b2a5256c",
					BlobInfo: types.BlobInfo{
						SchemaVersion: types.BlobJSONSchemaVersion,
						OS: &types.OS{
							Family: "alpine",
							Name:   "3.16.0",
						},
						PackageInfos: []types.PackageInfo{
							{},
						},
					},
				},
				Returns: cache.ArtifactCachePutBlobReturns{
					Err: errors.New("error"),
				},
			},
			wantErr: "failed to store blob",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			c := new(cache.MockArtifactCache)
			c.ApplyPutBlobExpectation(tt.putBlobExpectation)

			a, err := sbom.NewArtifact(tt.filePath, c, artifact.Option{})
			require.NoError(t, err)

			got, err := a.Inspect(context.Background())
			if tt.wantErr != "" {
				require.NotNil(t, err)
				assert.Contains(t, err.Error(), tt.wantErr)
				return
			}

			// Not compare the original CycloneDX report
			got.CycloneDX = nil

			require.NoError(t, err)
			assert.Equal(t, tt.want, got)
		})
	}
}
