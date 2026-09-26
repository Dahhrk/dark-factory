# Go

Coding bar lives in pack **go-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `go`, `poteto-go`
- Rule: `go.mdc` on `**/*.go`
- Lint tiers (product repos; copy from go-kit; **all required**):
  - Tier 0: `scripts/go-rg-gate.sh` (PSR Go: func hooks / bare `go` / ioutil / panic / errgroup+Background; single-walk; requires rg)
  - Tier 0.5: `scripts/go-hotpath-gate.sh` (`GO_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/go-fmt-gate.sh` + `scripts/go-vet-gate.sh`
  - Tier 1: `scripts/go-race-ci-gate.sh` (`-race` in Makefile or CI)
  - Tier 1b: `scripts/go-golangci-gate.sh` (bodyclose + errcheck)
  - Product CI skeleton: `templates/github-workflows/go-gates.yml`
- Pilot research: cli/cli (public catalog top pick)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-go`
- Standards source: Programming Standards Reference Go chapter (gofmt / go vet / race / errors / cancellation / goroutines / resources)

Do not put Go product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-go` standing rule; go-kit 0.1.0).
