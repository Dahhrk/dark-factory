# Factory health (pointer)

Thin kitchen bar for how work lands. Not a Feature Map. Not ISO/DORA.

## Always

- **CI green** on the product artifact (or local gate exit 0 when Actions cannot run; note billing/runner).
- **Reviewable PR**: smallest change that advances Done means; leave open until Dark merges.
- **Plain PR titles**: user-facing titles and labels are work descriptions only (never `pass N` / `full-pass-N` / `poteto pass`). Encoded in lua-kit `poteto-lua`, typescript-kit `poteto-typescript`, and python-kit `poteto-python`.
- **No secrets** in diffs, logs, or kitchen docs.
- **Trust boundary** first (auth, net, realm, client input) before micro-opts or polish.

## Stack notes

| Stack | Bar |
|-------|-----|
| Lua / GMod | Facepunch checklist + pack **lua-kit** (`poteto-lua` standing scorecard, `lua-rg-gate` + `lua-hotpath-gate` + `luacheck` + `glualint`) |
| TS / UI | Pack **typescript-kit** 0.8.0 (`poteto-typescript` standing scorecard, `ts-rg-gate` single-walk + `ts-hotpath-gate` budget + `ts-strict-gate` + `ts-runtime-gate` + `ts-oxlint-gate` type-aware floating/misused promises with pinned oxlint + oxlint-tsgolint + global-fetch/URL/env boundaries + env-schema/typed-parse templates + `ts-kit-selfcheck`) + Control-Glass product gates |
| Python | Pack **python-kit** 0.1.0 (`poteto-python` standing scorecard, `py-rg-gate` single-walk + `py-hotpath-gate` budget + `py-ruff-gate` E/F/B + `py-typing-gate` + `py-test-gate` + env_schema/typed_parse templates + `py-kit-selfcheck`) |
| Kitchen | Docs only. Point; do not host product CI or Feature Maps here |

Facepunch alignment is Lua-only. Other stacks score CI / trust / size without Facepunch.

See also [lua.md](lua.md), [python.md](python.md), [pr-workflow.md](pr-workflow.md), [evidence-standard.md](evidence-standard.md).
