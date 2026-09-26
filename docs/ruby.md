# Ruby

Coding bar lives in pack **ruby-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `ruby`, `poteto-ruby`
- Rule: `ruby.mdc` on `**/*.{rb,rake,gemspec}`
- Lint tiers (product repos; copy from ruby-kit; **all required**):
  - Tier 0: `scripts/ruby-rg-gate.sh` (PSR Ruby: eval; dynamic send smells; SQL string interpolate in where/order/select; single-walk; requires rg)
  - Tier 0.5: `scripts/ruby-hotpath-gate.sh` (`RUBY_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/ruby-fmt-gate.sh` (RuboCop wiring / live rubocop)
  - Tier 1: `scripts/ruby-rubocop-performance-gate.sh` (rubocop-performance plugin wiring)
  - Product CI skeleton: `templates/github-workflows/ruby-gates.yml`
- Pilot research: rails/rails (public catalog top pick, MIT)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-ruby`
- Standards source: Programming Standards Reference Ruby chapter (Ruby docs / RuboCop / rubocop-performance / no-eval / dynamic send smells / no SQL string interpolate in where)

Do not put Ruby product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-ruby` standing rule; ruby-kit 0.1.0).
