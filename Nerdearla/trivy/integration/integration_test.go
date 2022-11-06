//go:build integration || module_integration

package integration

import (
	"context"
	"encoding/json"
	"flag"
	"io"
	"net"
	"os"
	"path/filepath"
	"sort"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/aquasecurity/trivy-db/pkg/db"
	"github.com/aquasecurity/trivy-db/pkg/metadata"
	"github.com/aquasecurity/trivy/pkg/commands"
	"github.com/aquasecurity/trivy/pkg/dbtest"
	"github.com/aquasecurity/trivy/pkg/types"
)

var update = flag.Bool("update", false, "update golden files")

func initDB(t *testing.T) string {
	fixtureDir := filepath.Join("testdata", "fixtures", "db")
	entries, err := os.ReadDir(fixtureDir)
	require.NoError(t, err)

	var fixtures []string
	for _, entry := range entries {
		if entry.IsDir() {
			continue
		}
		fixtures = append(fixtures, filepath.Join(fixtureDir, entry.Name()))
	}

	cacheDir := dbtest.InitDB(t, fixtures)
	defer db.Close()

	dbDir := filepath.Dir(db.Path(cacheDir))

	metadataFile := filepath.Join(dbDir, "metadata.json")
	f, err := os.Create(metadataFile)
	require.NoError(t, err)

	err = json.NewEncoder(f).Encode(metadata.Metadata{
		Version:    db.SchemaVersion,
		NextUpdate: time.Now().Add(24 * time.Hour),
		UpdatedAt:  time.Now(),
	})
	require.NoError(t, err)

	return cacheDir
}

func getFreePort() (int, error) {
	addr, err := net.ResolveTCPAddr("tcp", "localhost:0")
	if err != nil {
		return 0, err
	}

	l, err := net.ListenTCP("tcp", addr)
	if err != nil {
		return 0, err
	}
	defer l.Close()
	return l.Addr().(*net.TCPAddr).Port, nil
}

func waitPort(ctx context.Context, addr string) error {
	for {
		conn, err := net.Dial("tcp", addr)
		if err == nil && conn != nil {
			return nil
		}
		select {
		case <-ctx.Done():
			return err
		default:
			time.Sleep(1 * time.Second)
		}
	}
}

func readReport(t *testing.T, filePath string) types.Report {
	t.Helper()

	f, err := os.Open(filePath)
	require.NoError(t, err, filePath)
	defer f.Close()

	var report types.Report
	err = json.NewDecoder(f).Decode(&report)
	require.NoError(t, err, filePath)

	// We don't compare history because the nano-seconds in "created" don't match
	report.Metadata.ImageConfig.History = nil

	// We don't compare repo tags because the archive doesn't support it
	report.Metadata.RepoTags = nil
	report.Metadata.RepoDigests = nil

	for i, result := range report.Results {
		for j := range result.Vulnerabilities {
			report.Results[i].Vulnerabilities[j].Layer.Digest = ""
		}

		sort.Slice(result.CustomResources, func(i, j int) bool {
			if result.CustomResources[i].Type != result.CustomResources[j].Type {
				return result.CustomResources[i].Type < result.CustomResources[j].Type
			}
			return result.CustomResources[i].FilePath < result.CustomResources[j].FilePath
		})
	}

	return report
}

func execute(osArgs []string) error {
	// Setup CLI App
	app := commands.NewApp("dev")
	app.SetOut(io.Discard)

	// Run Trivy
	app.SetArgs(osArgs)
	return app.Execute()
}

func compareReports(t *testing.T, wantFile, gotFile string) {
	want := readReport(t, wantFile)
	got := readReport(t, gotFile)
	assert.Equal(t, want, got)
}
