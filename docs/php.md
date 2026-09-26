# PHP

Coding bar lives in pack **php-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `php`, `poteto-php`
- Rule: `php.mdc` on `**/*.{php,phtml}`
- Lint tiers (product repos; copy from php-kit; **all required**):
  - Tier 0: `scripts/php-rg-gate.sh` (PSR PHP: eval; unserialize; SQL string concat; single-walk; requires rg)
  - Tier 0.5: `scripts/php-hotpath-gate.sh` (`PHP_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/php-fmt-gate.sh` (Pint / php-cs-fixer wiring / live)
  - Tier 1: `scripts/php-stan-gate.sh` (phpstan or psalm wiring)
  - Product CI skeleton: `templates/github-workflows/php-gates.yml`
- Pilot research: laravel/framework (public catalog top pick, MIT)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-php`
- Standards source: Programming Standards Reference PHP chapter (PSR-12 / Pint / php-cs-fixer / phpstan / psalm / no-eval / no unserialize of untrusted input / no SQL string concat)

Do not put PHP product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-php` standing rule; php-kit 0.1.0).
