# GMod / Lua

Coding bar lives in pack **lua-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `lua`, `lua-net`, `lua-ui`, `poteto-lua`
- Rule: `lua.mdc` on `**/*.lua`
- Lint tiers (product repos; copy from lua-kit):
  - Tier 0: `scripts/lua-rg-gate.sh`
  - Tier 1: `luacheck` via `templates/luacheckrc` + `scripts/lua-luacheck-gate.sh`
  - Tier 2 (optional): `glualint` via `templates/glualint.json`
  - Product CI skeleton: `templates/github-workflows/lua-gates.yml`
- Pilot: Obsidian Framework
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-lua`
- Encode: Obsidian REPEAT smells → product lint/CI → pack skill bullet (Friday encode-lessons)

Do not put Lua product CI into kitchen workflows. Point here only.

Lean public GMod tips stay in [lean-public-tip.md](lean-public-tip.md). Skip Vite bootstrap for Lua addons ([storage-layout.md](storage-layout.md)).

Factory health (CI / review / trust; Facepunch only on Lua): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-lua` standing rule; lua-kit 0.2.7).
