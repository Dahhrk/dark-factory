# Elixir

Coding bar lives in pack **elixir-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `elixir`, `poteto-elixir`
- Rule: `elixir.mdc` on `**/*.{ex,exs}`
- Lint tiers (product repos; copy from elixir-kit; **all required**):
  - Tier 0: `scripts/elixir-rg-gate.sh` (PSR Elixir: `String.to_atom`; SQL concat/`#{}`; `Process.sleep`; single-walk; requires rg)
  - Tier 0.5: `scripts/elixir-hotpath-gate.sh` (`ELIXIR_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/elixir-fmt-gate.sh` (mix format wiring / live)
  - Tier 1: `scripts/elixir-credo-gate.sh` (Credo wiring)
  - Tier 1: `scripts/elixir-dialyzer-gate.sh` (dialyzer / dialyxir wiring)
  - Product CI skeleton: `templates/github-workflows/elixir-gates.yml`
- Pilot research: phoenixframework/phoenix (public catalog top pick, MIT)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-elixir`
- Standards source: Programming Standards Reference Elixir chapter (mix format / Credo / dialyzer / no `String.to_atom` on input / no SQL concat / no `Process.sleep` on hot paths)

Do not put Elixir product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-elixir` standing rule; elixir-kit 0.1.0).
