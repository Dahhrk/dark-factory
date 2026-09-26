# Assembly

Coding bar lives in pack **assembly-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `assembly`, `poteto-assembly`
- Rule: `assembly.mdc` on `**/*.{asm,s,S,nasm,inc}`
- Lint tiers (product repos; copy from assembly-kit; **all required**):
  - Tier 0: `scripts/assembly-rg-gate.sh` (PSR Assembly: no shellcode in product paths; explicit section hygiene or BITS+ORG; no `jmp` to register without same-line `;` comment; single-walk; requires rg)
  - Tier 0.5: `scripts/assembly-hotpath-gate.sh` (`ASSEMBLY_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/assembly-build-gate.sh` (nasm / gas `as` wiring in Makefile/CMake/meson/CI)
  - Product CI skeleton: `templates/github-workflows/assembly-gates.yml`
- Pilot research: whispem/learn-assembly-with-em (public MIT; drives shellcode / section / jmp-reg encode). cirosantilli/x86-bare-metal-examples noted but license NOASSERTION.
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-assembly`
- Standards source: Programming Standards Reference Assembly chapter (no shellcode product paths / section hygiene / jmp-reg comment gate / nasm|gas)

Do not put Assembly product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-assembly` standing rule; assembly-kit 0.1.0).
