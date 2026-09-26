# Shell

Coding bar lives in pack **shell-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `shell`, `poteto-shell`
- Rule: `shell.mdc` on `**/*.{sh,bash}`
- Lint tiers (product repos; copy from shell-kit; **all required**):
  - Tier 0: `scripts/sh-rg-gate.sh` (PSR Shell: eval / unsafe `/tmp/$$` / unquoted for|cd|rm / curl|sh; single-walk; requires rg)
  - Tier 0.5: `scripts/sh-hotpath-gate.sh` (`SH_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/sh-shellcheck-gate.sh` + `scripts/sh-fmt-gate.sh`
  - Tier 1: `scripts/sh-strict-gate.sh` (`set -euo pipefail`)
  - Tier 1: `scripts/sh-test-gate.sh` (tests present; filenames/signals/empty)
  - Product CI skeleton: `templates/github-workflows/sh-gates.yml`
- Pilot research: ohmyzsh (public catalog top pick)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-shell`
- Standards source: Programming Standards Reference Shell chapter (ShellCheck / shfmt / quote expansions / explicit failure / safe temps / edge tests)

Do not put Shell product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-shell` standing rule; shell-kit 0.1.0).
