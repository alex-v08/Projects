package spdx_test

import (
	"fmt"
	"hash/fnv"
	"testing"
	"time"

	v1 "github.com/google/go-containerregistry/pkg/v1"
	"github.com/google/uuid"
	"github.com/mitchellh/hashstructure/v2"
	"github.com/spdx/tools-golang/spdx"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	fake "k8s.io/utils/clock/testing"

	fos "github.com/aquasecurity/trivy/pkg/fanal/analyzer/os"
	ftypes "github.com/aquasecurity/trivy/pkg/fanal/types"
	"github.com/aquasecurity/trivy/pkg/report"
	tspdx "github.com/aquasecurity/trivy/pkg/sbom/spdx"
	"github.com/aquasecurity/trivy/pkg/types"
)

func TestMarshaler_Marshal(t *testing.T) {
	testCases := []struct {
		name        string
		inputReport types.Report
		wantSBOM    *spdx.Document2_2
	}{
		{
			name: "happy path for container scan",
			inputReport: types.Report{
				SchemaVersion: report.SchemaVersion,
				ArtifactName:  "rails:latest",
				ArtifactType:  ftypes.ArtifactContainerImage,
				Metadata: types.Metadata{
					Size: 1024,
					OS: &ftypes.OS{
						Family: fos.CentOS,
						Name:   "8.3.2011",
						Eosl:   true,
					},
					ImageID:     "sha256:5d0da3dc976460b72c77d94c8a1ad043720b0416bfc16c52c45d4847e53fadb6",
					RepoTags:    []string{"rails:latest"},
					DiffIDs:     []string{"sha256:d871dadfb37b53ef1ca45be04fc527562b91989991a8f545345ae3be0b93f92a"},
					RepoDigests: []string{"rails@sha256:a27fd8080b517143cbbbab9dfb7c8571c40d67d534bbdee55bd6c473f432b177"},
					ImageConfig: v1.ConfigFile{
						Architecture: "arm64",
					},
				},
				Results: types.Results{
					{
						Target: "rails:latest (centos 8.3.2011)",
						Class:  types.ClassOSPkg,
						Type:   fos.CentOS,
						Packages: []ftypes.Package{
							{
								Name:            "binutils",
								Version:         "2.30",
								Release:         "93.el8",
								Epoch:           0,
								Arch:            "aarch64",
								SrcName:         "binutils",
								SrcVersion:      "2.30",
								SrcRelease:      "93.el8",
								SrcEpoch:        0,
								Modularitylabel: "",
								Licenses:        []string{"GPLv3+"},
							},
						},
					},
					{
						Target: "app/subproject/Gemfile.lock",
						Class:  types.ClassLangPkg,
						Type:   ftypes.Bundler,
						Packages: []ftypes.Package{
							{
								Name:    "actionpack",
								Version: "7.0.1",
							},
							{
								Name:    "actioncontroller",
								Version: "7.0.1",
							},
						},
					},
					{
						Target: "app/Gemfile.lock",
						Class:  types.ClassLangPkg,
						Type:   ftypes.Bundler,
						Packages: []ftypes.Package{
							{
								Name:    "actionpack",
								Version: "7.0.1",
							},
						},
					},
				},
			},
			wantSBOM: &spdx.Document2_2{
				CreationInfo: &spdx.CreationInfo2_2{
					SPDXVersion:          "SPDX-2.2",
					DataLicense:          "CC0-1.0",
					SPDXIdentifier:       "DOCUMENT",
					DocumentName:         "rails:latest",
					DocumentNamespace:    "http://aquasecurity.github.io/trivy/container_image/rails:latest-3ff14136-e09f-4df9-80ea-000000000001",
					CreatorOrganizations: []string{"aquasecurity"},
					CreatorTools:         []string{"trivy"},
					Created:              "2021-08-25T12:20:30.000000005Z",
				},
				Packages: map[spdx.ElementID]*spdx.Package2_2{
					spdx.ElementID("ContainerImage-9396d894cd0cb6cb"): {
						PackageSPDXIdentifier: spdx.ElementID("ContainerImage-9396d894cd0cb6cb"),
						PackageName:           "rails:latest",
						PackageExternalReferences: []*spdx.PackageExternalReference2_2{
							{
								Category: tspdx.CategoryPackageManager,
								RefType:  tspdx.RefTypePurl,
								Locator:  "pkg:oci/rails@sha256:a27fd8080b517143cbbbab9dfb7c8571c40d67d534bbdee55bd6c473f432b177?repository_url=index.docker.io%2Flibrary%2Frails&arch=arm64",
							},
						},
						PackageAttributionTexts: []string{
							"SchemaVersion: 2",
							"ImageID: sha256:5d0da3dc976460b72c77d94c8a1ad043720b0416bfc16c52c45d4847e53fadb6",
							"Size: 1024",
							"RepoDigest: rails@sha256:a27fd8080b517143cbbbab9dfb7c8571c40d67d534bbdee55bd6c473f432b177",
							"DiffID: sha256:d871dadfb37b53ef1ca45be04fc527562b91989991a8f545345ae3be0b93f92a",
							"RepoTag: rails:latest",
						},
					},
					spdx.ElementID("Application-73c871d73f3c8248"): {
						PackageSPDXIdentifier: spdx.ElementID("Application-73c871d73f3c8248"),
						PackageName:           "bundler",
						PackageSourceInfo:     "app/subproject/Gemfile.lock",
					},
					spdx.ElementID("Application-c3fac92c1ac0a9fa"): {
						PackageSPDXIdentifier: spdx.ElementID("Application-c3fac92c1ac0a9fa"),
						PackageName:           "bundler",
						PackageSourceInfo:     "app/Gemfile.lock",
					},
					spdx.ElementID("OperatingSystem-197f9a00ebcb51f0"): {
						PackageSPDXIdentifier: spdx.ElementID("OperatingSystem-197f9a00ebcb51f0"),
						PackageName:           "centos",
						PackageVersion:        "8.3.2011",
					},

					spdx.ElementID("Package-eb0263038c3b445b"): {
						PackageSPDXIdentifier:   spdx.ElementID("Package-eb0263038c3b445b"),
						PackageName:             "actioncontroller",
						PackageVersion:          "7.0.1",
						PackageLicenseConcluded: "NONE",
						PackageLicenseDeclared:  "NONE",
						PackageExternalReferences: []*spdx.PackageExternalReference2_2{
							{
								Category: tspdx.CategoryPackageManager,
								RefType:  tspdx.RefTypePurl,
								Locator:  "pkg:gem/actioncontroller@7.0.1",
							},
						},
					},
					spdx.ElementID("Package-826226d056ff30c0"): {
						PackageSPDXIdentifier:   spdx.ElementID("Package-826226d056ff30c0"),
						PackageName:             "actionpack",
						PackageVersion:          "7.0.1",
						PackageLicenseConcluded: "NONE",
						PackageLicenseDeclared:  "NONE",
						PackageExternalReferences: []*spdx.PackageExternalReference2_2{
							{
								Category: tspdx.CategoryPackageManager,
								RefType:  tspdx.RefTypePurl,
								Locator:  "pkg:gem/actionpack@7.0.1",
							},
						},
					},
					spdx.ElementID("Package-fd0dc3cf913d5bc3"): {
						PackageSPDXIdentifier:   spdx.ElementID("Package-fd0dc3cf913d5bc3"),
						PackageName:             "binutils",
						PackageVersion:          "2.30",
						PackageLicenseConcluded: "GPLv3+",
						PackageLicenseDeclared:  "GPLv3+",
						PackageExternalReferences: []*spdx.PackageExternalReference2_2{
							{
								Category: tspdx.CategoryPackageManager,
								RefType:  tspdx.RefTypePurl,
								Locator:  "pkg:rpm/centos/binutils@2.30-93.el8?arch=aarch64&distro=centos-8.3.2011",
							},
						},
						PackageSourceInfo: "built package from: binutils 2.30-93.el8",
					},
				},
				Relationships: []*spdx.Relationship2_2{
					{
						RefA:         spdx.DocElementID{ElementRefID: "DOCUMENT"},
						RefB:         spdx.DocElementID{ElementRefID: "ContainerImage-9396d894cd0cb6cb"},
						Relationship: "DESCRIBE",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "ContainerImage-9396d894cd0cb6cb"},
						RefB:         spdx.DocElementID{ElementRefID: "OperatingSystem-197f9a00ebcb51f0"},
						Relationship: "CONTAINS",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "OperatingSystem-197f9a00ebcb51f0"},
						RefB:         spdx.DocElementID{ElementRefID: "Package-fd0dc3cf913d5bc3"},
						Relationship: "CONTAINS",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "ContainerImage-9396d894cd0cb6cb"},
						RefB:         spdx.DocElementID{ElementRefID: "Application-73c871d73f3c8248"},
						Relationship: "CONTAINS",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "Application-73c871d73f3c8248"},
						RefB:         spdx.DocElementID{ElementRefID: "Package-826226d056ff30c0"},
						Relationship: "CONTAINS",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "Application-73c871d73f3c8248"},
						RefB:         spdx.DocElementID{ElementRefID: "Package-eb0263038c3b445b"},
						Relationship: "CONTAINS",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "ContainerImage-9396d894cd0cb6cb"},
						RefB:         spdx.DocElementID{ElementRefID: "Application-c3fac92c1ac0a9fa"},
						Relationship: "CONTAINS",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "Application-c3fac92c1ac0a9fa"},
						RefB:         spdx.DocElementID{ElementRefID: "Package-826226d056ff30c0"},
						Relationship: "CONTAINS",
					},
				},
				UnpackagedFiles: nil,
				OtherLicenses:   nil,
				Annotations:     nil,
				Reviews:         nil,
			},
		},
		{
			name: "happy path for local container scan",
			inputReport: types.Report{
				SchemaVersion: report.SchemaVersion,
				ArtifactName:  "centos:latest",
				ArtifactType:  ftypes.ArtifactContainerImage,
				Metadata: types.Metadata{
					Size: 1024,
					OS: &ftypes.OS{
						Family: fos.CentOS,
						Name:   "8.3.2011",
						Eosl:   true,
					},
					ImageID:     "sha256:5d0da3dc976460b72c77d94c8a1ad043720b0416bfc16c52c45d4847e53fadb6",
					RepoTags:    []string{"centos:latest"},
					RepoDigests: []string{},
					ImageConfig: v1.ConfigFile{
						Architecture: "arm64",
					},
				},
				Results: types.Results{
					{
						Target: "centos:latest (centos 8.3.2011)",
						Class:  types.ClassOSPkg,
						Type:   fos.CentOS,
						Packages: []ftypes.Package{
							{
								Name:            "acl",
								Version:         "2.2.53",
								Release:         "1.el8",
								Epoch:           1,
								Arch:            "aarch64",
								SrcName:         "acl",
								SrcVersion:      "2.2.53",
								SrcRelease:      "1.el8",
								SrcEpoch:        1,
								Modularitylabel: "",
								Licenses:        []string{"GPLv2+"},
							},
						},
					},
					{
						Target: "Ruby",
						Class:  types.ClassLangPkg,
						Type:   ftypes.GemSpec,
						Packages: []ftypes.Package{
							{
								Name:    "actionpack",
								Version: "7.0.1",
								Layer: ftypes.Layer{
									DiffID: "sha256:ccb64cf0b7ba2e50741d0b64cae324eb5de3b1e2f580bbf177e721b67df38488",
								},
								FilePath: "tools/project-john/specifications/actionpack.gemspec",
							},
							{
								Name:    "actionpack",
								Version: "7.0.1",
								Layer: ftypes.Layer{
									DiffID: "sha256:ccb64cf0b7ba2e50741d0b64cae324eb5de3b1e2f580bbf177e721b67df38488",
								},
								FilePath: "tools/project-doe/specifications/actionpack.gemspec",
							},
						},
					},
				},
			},
			wantSBOM: &spdx.Document2_2{
				CreationInfo: &spdx.CreationInfo2_2{
					SPDXVersion:          "SPDX-2.2",
					DataLicense:          "CC0-1.0",
					SPDXIdentifier:       "DOCUMENT",
					DocumentName:         "centos:latest",
					DocumentNamespace:    "http://aquasecurity.github.io/trivy/container_image/centos:latest-3ff14136-e09f-4df9-80ea-000000000001",
					CreatorOrganizations: []string{"aquasecurity"},
					CreatorTools:         []string{"trivy"},
					Created:              "2021-08-25T12:20:30.000000005Z",
				},
				Packages: map[spdx.ElementID]*spdx.Package2_2{
					spdx.ElementID("ContainerImage-413bfede37ad01fc"): {
						PackageName:           "centos:latest",
						PackageSPDXIdentifier: "ContainerImage-413bfede37ad01fc",
						PackageAttributionTexts: []string{
							"SchemaVersion: 2",
							"ImageID: sha256:5d0da3dc976460b72c77d94c8a1ad043720b0416bfc16c52c45d4847e53fadb6",
							"Size: 1024",
							"RepoTag: centos:latest",
						},
					},
					spdx.ElementID("Application-441a648f2aeeee72"): {
						PackageSPDXIdentifier: spdx.ElementID("Application-441a648f2aeeee72"),
						PackageName:           "gemspec",
						PackageSourceInfo:     "Ruby",
					},
					spdx.ElementID("OperatingSystem-197f9a00ebcb51f0"): {
						PackageSPDXIdentifier: spdx.ElementID("OperatingSystem-197f9a00ebcb51f0"),
						PackageName:           "centos",
						PackageVersion:        "8.3.2011",
					},
					spdx.ElementID("Package-d8dccb186bafaf37"): {
						PackageSPDXIdentifier:   spdx.ElementID("Package-d8dccb186bafaf37"),
						PackageName:             "acl",
						PackageVersion:          "2.2.53",
						PackageLicenseConcluded: "GPLv2+",
						PackageLicenseDeclared:  "GPLv2+",
						PackageExternalReferences: []*spdx.PackageExternalReference2_2{
							{
								Category: tspdx.CategoryPackageManager,
								RefType:  tspdx.RefTypePurl,
								Locator:  "pkg:rpm/centos/acl@1:2.2.53-1.el8?arch=aarch64&distro=centos-8.3.2011",
							},
						},
						PackageSourceInfo: "built package from: acl 1:2.2.53-1.el8",
					},
					spdx.ElementID("Package-13fe667a0805e6b7"): {
						PackageSPDXIdentifier:   spdx.ElementID("Package-13fe667a0805e6b7"),
						PackageName:             "actionpack",
						PackageVersion:          "7.0.1",
						PackageLicenseConcluded: "NONE",
						PackageLicenseDeclared:  "NONE",
						PackageExternalReferences: []*spdx.PackageExternalReference2_2{
							{
								Category: tspdx.CategoryPackageManager,
								RefType:  tspdx.RefTypePurl,
								Locator:  "pkg:gem/actionpack@7.0.1",
							},
						},
						PackageAttributionTexts: []string{
							"LayerDiffID: sha256:ccb64cf0b7ba2e50741d0b64cae324eb5de3b1e2f580bbf177e721b67df38488",
						},
						Files: map[spdx.ElementID]*spdx.File2_2{
							"File-fa42187221d0d0a8": {
								FileSPDXIdentifier: "File-fa42187221d0d0a8",
								FileName:           "tools/project-doe/specifications/actionpack.gemspec",
							},
						},
					},
					spdx.ElementID("Package-d5443dbcbba0dbd4"): {
						PackageSPDXIdentifier:   spdx.ElementID("Package-d5443dbcbba0dbd4"),
						PackageName:             "actionpack",
						PackageVersion:          "7.0.1",
						PackageLicenseConcluded: "NONE",
						PackageLicenseDeclared:  "NONE",
						PackageExternalReferences: []*spdx.PackageExternalReference2_2{
							{
								Category: tspdx.CategoryPackageManager,
								RefType:  tspdx.RefTypePurl,
								Locator:  "pkg:gem/actionpack@7.0.1",
							},
						},
						PackageAttributionTexts: []string{
							"LayerDiffID: sha256:ccb64cf0b7ba2e50741d0b64cae324eb5de3b1e2f580bbf177e721b67df38488",
						},
						Files: map[spdx.ElementID]*spdx.File2_2{
							"File-6a540784b0dc6d55": {
								FileSPDXIdentifier: "File-6a540784b0dc6d55",
								FileName:           "tools/project-john/specifications/actionpack.gemspec",
							},
						},
					},
				},
				Relationships: []*spdx.Relationship2_2{
					{
						RefA:         spdx.DocElementID{ElementRefID: "DOCUMENT"},
						RefB:         spdx.DocElementID{ElementRefID: "ContainerImage-413bfede37ad01fc"},
						Relationship: "DESCRIBE",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "ContainerImage-413bfede37ad01fc"},
						RefB:         spdx.DocElementID{ElementRefID: "OperatingSystem-197f9a00ebcb51f0"},
						Relationship: "CONTAINS",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "OperatingSystem-197f9a00ebcb51f0"},
						RefB:         spdx.DocElementID{ElementRefID: "Package-d8dccb186bafaf37"},
						Relationship: "CONTAINS",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "ContainerImage-413bfede37ad01fc"},
						RefB:         spdx.DocElementID{ElementRefID: "Application-441a648f2aeeee72"},
						Relationship: "CONTAINS",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "Application-441a648f2aeeee72"},
						RefB:         spdx.DocElementID{ElementRefID: "Package-d5443dbcbba0dbd4"},
						Relationship: "CONTAINS",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "Application-441a648f2aeeee72"},
						RefB:         spdx.DocElementID{ElementRefID: "Package-13fe667a0805e6b7"},
						Relationship: "CONTAINS",
					},
				},

				UnpackagedFiles: nil,
				OtherLicenses:   nil,
				Annotations:     nil,
				Reviews:         nil,
			},
		},
		{
			name: "happy path for fs scan",
			inputReport: types.Report{
				SchemaVersion: report.SchemaVersion,
				ArtifactName:  "masahiro331/CVE-2021-41098",
				ArtifactType:  ftypes.ArtifactFilesystem,
				Results: types.Results{
					{
						Target: "Gemfile.lock",
						Class:  types.ClassLangPkg,
						Type:   ftypes.Bundler,
						Packages: []ftypes.Package{
							{
								Name:    "actioncable",
								Version: "6.1.4.1",
							},
						},
					},
				},
			},
			wantSBOM: &spdx.Document2_2{
				CreationInfo: &spdx.CreationInfo2_2{
					SPDXVersion:          "SPDX-2.2",
					DataLicense:          "CC0-1.0",
					SPDXIdentifier:       "DOCUMENT",
					DocumentName:         "masahiro331/CVE-2021-41098",
					DocumentNamespace:    "http://aquasecurity.github.io/trivy/filesystem/masahiro331/CVE-2021-41098-3ff14136-e09f-4df9-80ea-000000000001",
					CreatorOrganizations: []string{"aquasecurity"},
					CreatorTools:         []string{"trivy"},
					Created:              "2021-08-25T12:20:30.000000005Z",
				},
				Packages: map[spdx.ElementID]*spdx.Package2_2{
					spdx.ElementID("Filesystem-5af0f1f08c20909a"): {
						PackageSPDXIdentifier: spdx.ElementID("Filesystem-5af0f1f08c20909a"),
						PackageName:           "masahiro331/CVE-2021-41098",
						PackageAttributionTexts: []string{
							"SchemaVersion: 2",
						},
					},
					spdx.ElementID("Application-9dd4a4ba7077cc5a"): {
						PackageSPDXIdentifier: spdx.ElementID("Application-9dd4a4ba7077cc5a"),
						PackageName:           "bundler",
						PackageSourceInfo:     "Gemfile.lock",
					},
					spdx.ElementID("Package-3da61e86d0530402"): {
						PackageSPDXIdentifier:   spdx.ElementID("Package-3da61e86d0530402"),
						PackageName:             "actioncable",
						PackageVersion:          "6.1.4.1",
						PackageLicenseConcluded: "NONE",
						PackageLicenseDeclared:  "NONE",
						PackageExternalReferences: []*spdx.PackageExternalReference2_2{
							{
								Category: tspdx.CategoryPackageManager,
								RefType:  tspdx.RefTypePurl,
								Locator:  "pkg:gem/actioncable@6.1.4.1",
							},
						},
					},
				},
				Relationships: []*spdx.Relationship2_2{
					{
						RefA:         spdx.DocElementID{ElementRefID: "DOCUMENT"},
						RefB:         spdx.DocElementID{ElementRefID: "Filesystem-5af0f1f08c20909a"},
						Relationship: "DESCRIBE",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "Filesystem-5af0f1f08c20909a"},
						RefB:         spdx.DocElementID{ElementRefID: "Application-9dd4a4ba7077cc5a"},
						Relationship: "CONTAINS",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "Application-9dd4a4ba7077cc5a"},
						RefB:         spdx.DocElementID{ElementRefID: "Package-3da61e86d0530402"},
						Relationship: "CONTAINS",
					},
				},
			},
		},
		{
			name: "happy path aggregate results",
			inputReport: types.Report{
				SchemaVersion: report.SchemaVersion,
				ArtifactName:  "test-aggregate",
				ArtifactType:  ftypes.ArtifactRemoteRepository,
				Results: types.Results{
					{
						Target: "Node.js",
						Class:  types.ClassLangPkg,
						Type:   ftypes.NodePkg,
						Packages: []ftypes.Package{
							{
								Name:     "ruby-typeprof",
								Version:  "0.20.1",
								Licenses: []string{"MIT"},
								Layer: ftypes.Layer{
									DiffID: "sha256:661c3fd3cc16b34c070f3620ca6b03b6adac150f9a7e5d0e3c707a159990f88e",
								},
								FilePath: "usr/local/lib/ruby/gems/3.1.0/gems/typeprof-0.21.1/vscode/package.json",
							},
						},
					},
				},
			},
			wantSBOM: &spdx.Document2_2{
				CreationInfo: &spdx.CreationInfo2_2{
					SPDXVersion:          "SPDX-2.2",
					DataLicense:          "CC0-1.0",
					SPDXIdentifier:       "DOCUMENT",
					DocumentName:         "test-aggregate",
					DocumentNamespace:    "http://aquasecurity.github.io/trivy/repository/test-aggregate-3ff14136-e09f-4df9-80ea-000000000001",
					CreatorOrganizations: []string{"aquasecurity"},
					CreatorTools:         []string{"trivy"},
					Created:              "2021-08-25T12:20:30.000000005Z",
				},
				Packages: map[spdx.ElementID]*spdx.Package2_2{
					spdx.ElementID("Repository-7cb7a269a391a798"): {
						PackageName:           "test-aggregate",
						PackageSPDXIdentifier: "Repository-7cb7a269a391a798",
						PackageAttributionTexts: []string{
							"SchemaVersion: 2",
						},
					},
					spdx.ElementID("Application-24f8a80152e2c0fc"): {
						PackageSPDXIdentifier: "Application-24f8a80152e2c0fc",
						PackageName:           "node-pkg",
						PackageSourceInfo:     "Node.js",
					},
					spdx.ElementID("Package-daedb173cfd43058"): {
						PackageSPDXIdentifier:   spdx.ElementID("Package-daedb173cfd43058"),
						PackageName:             "ruby-typeprof",
						PackageVersion:          "0.20.1",
						PackageLicenseConcluded: "MIT",
						PackageLicenseDeclared:  "MIT",
						PackageExternalReferences: []*spdx.PackageExternalReference2_2{
							{
								Category: tspdx.CategoryPackageManager,
								RefType:  tspdx.RefTypePurl,
								Locator:  "pkg:npm/ruby-typeprof@0.20.1",
							},
						},
						PackageAttributionTexts: []string{
							"LayerDiffID: sha256:661c3fd3cc16b34c070f3620ca6b03b6adac150f9a7e5d0e3c707a159990f88e",
						},
						Files: map[spdx.ElementID]*spdx.File2_2{
							"File-a52825a3e5bc6dfe": {
								FileName:           "usr/local/lib/ruby/gems/3.1.0/gems/typeprof-0.21.1/vscode/package.json",
								FileSPDXIdentifier: "File-a52825a3e5bc6dfe",
							},
						},
					},
				},
				Relationships: []*spdx.Relationship2_2{
					{
						RefA:         spdx.DocElementID{ElementRefID: "DOCUMENT"},
						RefB:         spdx.DocElementID{ElementRefID: "Repository-7cb7a269a391a798"},
						Relationship: "DESCRIBE",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "Repository-7cb7a269a391a798"},
						RefB:         spdx.DocElementID{ElementRefID: "Application-24f8a80152e2c0fc"},
						Relationship: "CONTAINS",
					},
					{
						RefA:         spdx.DocElementID{ElementRefID: "Application-24f8a80152e2c0fc"},
						RefB:         spdx.DocElementID{ElementRefID: "Package-daedb173cfd43058"},
						Relationship: "CONTAINS",
					},
				},
			},
		},
		{
			name: "happy path empty",
			inputReport: types.Report{
				SchemaVersion: report.SchemaVersion,
				ArtifactName:  "empty/path",
				ArtifactType:  ftypes.ArtifactFilesystem,
				Results:       types.Results{},
			},
			wantSBOM: &spdx.Document2_2{
				CreationInfo: &spdx.CreationInfo2_2{
					SPDXVersion:          "SPDX-2.2",
					DataLicense:          "CC0-1.0",
					SPDXIdentifier:       "DOCUMENT",
					DocumentName:         "empty/path",
					DocumentNamespace:    "http://aquasecurity.github.io/trivy/filesystem/empty/path-3ff14136-e09f-4df9-80ea-000000000001",
					CreatorOrganizations: []string{"aquasecurity"},
					CreatorTools:         []string{"trivy"},
					Created:              "2021-08-25T12:20:30.000000005Z",
				},
				Packages: map[spdx.ElementID]*spdx.Package2_2{
					spdx.ElementID("Filesystem-70f34983067dba86"): {
						PackageName:           "empty/path",
						PackageSPDXIdentifier: "Filesystem-70f34983067dba86",
						PackageAttributionTexts: []string{
							"SchemaVersion: 2",
						},
					},
				},
				Relationships: []*spdx.Relationship2_2{
					{
						RefA:         spdx.DocElementID{ElementRefID: "DOCUMENT"},
						RefB:         spdx.DocElementID{ElementRefID: "Filesystem-70f34983067dba86"},
						Relationship: "DESCRIBE",
					},
				},
			},
		},
	}

	clock := fake.NewFakeClock(time.Date(2021, 8, 25, 12, 20, 30, 5, time.UTC))

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			var count int
			newUUID := func() uuid.UUID {
				count++
				return uuid.Must(uuid.Parse(fmt.Sprintf("3ff14136-e09f-4df9-80ea-%012d", count)))
			}

			// Fake function calculating the hash value
			h := fnv.New64()
			hasher := func(v interface{}, format hashstructure.Format, opts *hashstructure.HashOptions) (uint64, error) {
				h.Reset()

				var str string
				switch v.(type) {
				case ftypes.Package:
					str = v.(ftypes.Package).Name + v.(ftypes.Package).FilePath
				case string:
					str = v.(string)
				case *ftypes.OS:
					str = v.(*ftypes.OS).Name
				default:
					require.Failf(t, "unknown type", "%T", v)
				}

				if _, err := h.Write([]byte(str)); err != nil {
					return 0, err
				}

				return h.Sum64(), nil
			}

			marshaler := tspdx.NewMarshaler(tspdx.WithClock(clock), tspdx.WithNewUUID(newUUID), tspdx.WithHasher(hasher))
			spdxDoc, err := marshaler.Marshal(tc.inputReport)
			require.NoError(t, err)

			assert.Equal(t, tc.wantSBOM, spdxDoc)
		})
	}
}
