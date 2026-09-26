# Ada

Coding bar lives in pack **ada-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `ada`, `poteto-ada`
- Rule: `ada.mdc` on `**/*.{ads,adb,ada,gpr}`
- Lint tiers (product repos; copy from ada-kit; **all required**):
  - Tier 0: `scripts/ada-rg-gate.sh` (PSR Ada: `Unchecked_Conversion`; `pragma Suppress`; single-walk; requires rg)
  - Tier 0.5: `scripts/ada-hotpath-gate.sh` (`ADA_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/ada-gnat-gate.sh` (gnatcheck / gnatpp wiring; `Unchecked_Conversions` rule must stay enabled)
  - Product CI skeleton: `templates/github-workflows/ada-gates.yml`
- Formatter: **gnatpp** recommended (not a hard EXIT at 0.1.0 beyond wiring)
- Pilot research: zertovitch/hac (public MIT; drives Unchecked_Conversion / Suppress encode). alire / ada_language_server are GPL-3.0 — not primary hosts.
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-ada`
- Standards source: Programming Standards Reference Ada chapter (gnatcheck/gnatpp / Unchecked_Conversion / pragma Suppress)

Do not put Ada product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-ada` standing rule; ada-kit 0.1.0).
