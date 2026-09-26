# Batchfile

Coding bar lives in pack **batchfile-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `batchfile`, `poteto-batchfile`
- Rule: `batchfile.mdc` on `**/*.bat`, `**/*.cmd`
- Lint tiers (product repos; copy from batchfile-kit; **all required**):
  - Tier 0: `scripts/bat-rg-gate.sh` (PSR Batchfile: unquoted %VAR% expansion; delayedExpansion footguns; call of untrusted paths; curl|powershell download-exec; secrets in set; single-walk; requires rg; covers *.bat / *.cmd)
  - Tier 0.5: `scripts/bat-hotpath-gate.sh` (`BAT_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/bat-batch-gate.sh` (*.bat / *.cmd / CI cmd|BatchScript wiring / live)
  - Product CI skeleton: `templates/github-workflows/bat-gates.yml`
- Pilot research: npocmaka/batch.scripts (public MIT; delayedExpansion / password-set / powershell hybrids drive encode) + intentional fixtures
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-batchfile`
- Standards source: Programming Standards Reference Batchfile chapter (batch wiring / no unquoted-%VAR% / no delayedExpansion-footgun / no call-untrusted / no curl|powershell / no secrets-in-set)

Do not put Batchfile product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-batchfile` standing rule; batchfile-kit 0.1.0).
