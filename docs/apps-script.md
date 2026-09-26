# Google Apps Script

Coding bar lives in pack **apps-script-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `apps-script`, `poteto-apps-script`
- Rule: `apps-script.mdc` on `**/*.{gs,js,mjs,cjs,json,yml,yaml}`
- Lint tiers (product repos; copy from apps-script-kit; **all required**):
  - Tier 0: `scripts/apps-script-rg-gate.sh` (PSR Apps Script: eval/new Function; Logger.log in libs; getUi in doGet/doPost files; concurrent sheet writes without LockService; single-walk; requires rg)
  - Tier 0.5: `scripts/apps-script-hotpath-gate.sh` (`APPS_SCRIPT_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/apps-script-clasp-gate.sh` (clasp / appsscript.json / .clasp.json / CI wiring)
  - Product CI skeleton: `templates/github-workflows/apps-script-gates.yml`
- Toolchain: **clasp** / **appsscript.json** wiring required (project / CI)
- Pilot research: googleworkspace/apps-script-samples (Apache-2.0). Corroboration: labnol/apps-script-starter (MIT), howdy39/gas-clasp-starter (MIT).
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-apps-script`
- Standards source: Programming Standards Reference Apps Script chapter (eval; Logger.log in libs; getUi wrong context; LockService for concurrent writes if gateable; clasp wiring)

Do not put Apps Script product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-apps-script` standing rule; apps-script-kit 0.1.0).
