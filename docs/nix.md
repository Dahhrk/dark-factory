# Nix

Coding bar lives in pack **nix-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `nix`, `poteto-nix`
- Rule: `nix.mdc` on `**/*.nix`, `**/flake.nix`, `**/default.nix`, `**/shell.nix`
- Lint tiers (product repos; copy from nix-kit; **all required**):
  - Tier 0: `scripts/nix-rg-gate.sh` (PSR Nix: fetchurl without hash; builtins.exec / IFD abuse; impure env lookups; world-writable store paths; curl|bash in builders; single-walk; requires rg; covers *.nix / flake.nix / default.nix / shell.nix)
  - Tier 0.5: `scripts/nix-hotpath-gate.sh` (`NIX_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/nix-nix-gate.sh` (*.nix / flake / default / shell / CI nix wiring / live)
  - Product CI skeleton: `templates/github-workflows/nix-gates.yml`
- Pilot research: NixOS/nix (public LGPL-2.1; fetchurl hash / IFD / getEnv / builder perms / curl|bash drive encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-nix`
- Standards source: Programming Standards Reference Nix chapter (nix wiring / no fetchurl-without-hash / no exec|IFD / no getEnv / no world-writable / no curl|bash)

Do not put Nix product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-nix` standing rule; nix-kit 0.1.0).
