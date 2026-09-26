# Mako

Coding bar lives in pack **mako-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `mako`, `poteto-mako`
- Rule: `mako.mdc` on `**/*.{mako,html,py,pyi}`
- Lint tiers (product repos; copy from mako-kit; **all required**):
  - Tier 0: `scripts/mako-rg-gate.sh` (PSR Mako: disable_unicode / input_encoding footguns; untrusted `<%include>`; `${}` without filters / `|n` raw; `module_directory` code-exec cache paths; single-walk; requires rg; covers `.mako` / `.html` / `.py` / `.pyi`)
  - Tier 0.5: `scripts/mako-hotpath-gate.sh` (`MAKO_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/mako-mako-gate.sh` (`from`/`import mako` / requirements|pyproject / CI wiring / live)
  - Product CI skeleton: `templates/github-workflows/mako-gates.yml`
- Pilot research: sqlalchemy/mako (public MIT; drives unicode / include / filter / module_directory encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-mako`
- Standards source: Programming Standards Reference Mako chapter (mako wiring / no disable_unicode|input_encoding footgun / no untrusted include / no `|n` raw / no module_directory)

Do not put Mako product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-mako` standing rule; mako-kit 0.1.0).
