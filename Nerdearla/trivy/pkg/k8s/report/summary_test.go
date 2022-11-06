package report

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"

	"github.com/aquasecurity/trivy/pkg/flag"
	"github.com/aquasecurity/trivy/pkg/types"
)

func TestReport_ColumnHeading(t *testing.T) {
	tests := []struct {
		name             string
		opts             flag.ScanOptions
		availableColumns []string
		want             []string
	}{
		{
			name: "all workload columns",
			opts: flag.ScanOptions{SecurityChecks: []string{types.SecurityCheckVulnerability,
				types.SecurityCheckConfig, types.SecurityCheckSecret, types.SecurityCheckRbac}},
			availableColumns: WorkloadColumns(),
			want:             []string{NamespaceColumn, ResourceColumn, VulnerabilitiesColumn, MisconfigurationsColumn, SecretsColumn},
		},
		{
			name: "all rbac columns",
			opts: flag.ScanOptions{SecurityChecks: []string{types.SecurityCheckVulnerability,
				types.SecurityCheckConfig, types.SecurityCheckSecret, types.SecurityCheckRbac}},
			availableColumns: RoleColumns(),
			want:             []string{NamespaceColumn, ResourceColumn, RbacAssessmentColumn},
		},
		{
			name:             "config column only",
			opts:             flag.ScanOptions{SecurityChecks: []string{types.SecurityCheckConfig}},
			availableColumns: WorkloadColumns(),
			want:             []string{NamespaceColumn, ResourceColumn, MisconfigurationsColumn},
		},
		{
			name:             "secret column only",
			opts:             flag.ScanOptions{SecurityChecks: []string{types.SecurityCheckSecret}},
			availableColumns: WorkloadColumns(),
			want:             []string{NamespaceColumn, ResourceColumn, SecretsColumn},
		},
		{
			name:             "vuln column only",
			opts:             flag.ScanOptions{SecurityChecks: []string{types.SecurityCheckVulnerability}},
			availableColumns: WorkloadColumns(),
			want:             []string{NamespaceColumn, ResourceColumn, VulnerabilitiesColumn},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			column := ColumnHeading(tt.opts.SecurityChecks, tt.availableColumns)
			if !assert.Equal(t, column, tt.want) {
				t.Error(fmt.Errorf("TestReport_ColumnHeading want %v got %v", tt.want, column))
			}
		})
	}
}
