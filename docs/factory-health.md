# Factory health (pointer)

Thin kitchen bar for how work lands. Not a Feature Map. Not ISO/DORA.

## Always

- **CI green** on the product artifact (or local gate exit 0 when Actions cannot run; note billing/runner).
- **Reviewable PR**: smallest change that advances Done means; leave open until Dark merges.
- **Plain PR titles**: user-facing titles and labels are work descriptions only (never `pass N` / `full-pass-N` / `poteto pass`). Encoded in lua-kit `poteto-lua`.
- **No secrets** in diffs, logs, or kitchen docs.
- **Trust boundary** first (auth, net, realm, client input) before micro-opts or polish.

## Stack notes

| Stack | Bar |
|-------|-----|
| Lua / GMod | Facepunch checklist + pack **lua-kit** (`poteto-lua` standing scorecard, `lua-rg-gate` + `lua-hotpath-gate` + `luacheck` + `glualint`) |
| TS / UI | Existing Control-Glass gates (product repos) |
| Kitchen | Docs only. Point; do not host product CI or Feature Maps here |

Facepunch alignment is Lua-only. Other stacks score CI / trust / size without Facepunch.

See also [lua.md](lua.md), [pr-workflow.md](pr-workflow.md), [evidence-standard.md](evidence-standard.md).
