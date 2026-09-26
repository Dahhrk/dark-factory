# Just

Coding bar lives in pack **just-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `just`, `poteto-just`
- Rule: `just.mdc` on `**/justfile`, `**/Justfile`, `**/.justfile`, `**/*.just`
- Lint tiers (product repos; copy from just-kit; **all required**):
  - Tier 0: `scripts/just-rg-gate.sh` (PSR Just: unchecked [script]/shebang; dotenv secrets in recipes; export of secrets; include of untrusted path; curl|bash; single-walk; requires rg; covers justfile / Justfile / .justfile / *.just)
  - Tier 0.5: `scripts/just-hotpath-gate.sh` (`JUST_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/just-just-gate.sh` (justfile / *.just / CI just wiring / live)
  - Product CI skeleton: `templates/github-workflows/just-gates.yml`
- Pilot research: casey/just (public CC0-1.0 / custom permissive; Shebang / Script / Dotenv / Export / Imports / Modules drive encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-just`
- Standards source: Programming Standards Reference Just chapter (just wiring / no unchecked script|shebang / no dotenv secrets / no export secrets / no import untrusted / no curl|bash)

Do not put Just product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-just` standing rule; just-kit 0.1.0).
