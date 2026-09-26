# Python

Coding bar lives in pack **python-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `python`, `poteto-python`
- Rule: `python.mdc` on `**/*.py`
- Lint tiers (product repos; copy from python-kit; **all required**):
  - Tier 0: `scripts/py-rg-gate.sh` (PSR Python: bare except / type:ignore / noqa / mutable defaults / shell / eval / exec / pickle / yaml.load / env / json.loads; single-walk; requires rg)
  - Tier 0.5: `scripts/py-hotpath-gate.sh` (`PY_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/py-ruff-gate.sh` (Ruff E/F/B; one formatter = Ruff format)
  - Tier 1: `scripts/py-typing-gate.sh` (mypy or Pyright config)
  - Tier 1: `scripts/py-test-gate.sh` (tests present)
  - Product CI skeleton: `templates/github-workflows/py-gates.yml`
- Pilot research: pallets/flask (public catalog top pick)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-python`
- Standards source: Programming Standards Reference Python chapter (PEP 8 / PEP 257 / typing / PyPA)

Do not put Python product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-python` standing rule; python-kit 0.1.0).
