# Factory health (pointer)

Thin kitchen bar for how work lands. Not a Feature Map. Not ISO/DORA.

## Always

- **CI green** on the product artifact (or local gate exit 0 when Actions cannot run; note billing/runner).
- **Reviewable PR**: smallest change that advances Done means; leave open until Dark merges.
- **Plain PR titles**: user-facing titles and labels are work descriptions only (never `pass N` / `full-pass-N` / `poteto pass`). Encoded in lua-kit `poteto-lua`, typescript-kit `poteto-typescript`, python-kit `poteto-python`, go-kit `poteto-go`, shell-kit `poteto-shell`, rust-kit `poteto-rust`, c-kit `poteto-c`, cpp-kit `poteto-cpp`, and java-kit `poteto-java`.
- **No secrets** in diffs, logs, or kitchen docs.
- **Trust boundary** first (auth, net, realm, client input) before micro-opts or polish.

## Stack notes

| Stack | Bar |
|-------|-----|
| Lua / GMod | Facepunch checklist + pack **lua-kit** (`poteto-lua` standing scorecard, `lua-rg-gate` + `lua-hotpath-gate` + `luacheck` + `glualint`) |
| TS / UI | Pack **typescript-kit** 0.8.0 (`poteto-typescript` standing scorecard, `ts-rg-gate` single-walk + `ts-hotpath-gate` budget + `ts-strict-gate` + `ts-runtime-gate` + `ts-oxlint-gate` type-aware floating/misused promises with pinned oxlint + oxlint-tsgolint + global-fetch/URL/env boundaries + env-schema/typed-parse templates + `ts-kit-selfcheck`) + Control-Glass product gates |
| Python | Pack **python-kit** 0.1.0 (`poteto-python` standing scorecard, `py-rg-gate` single-walk + `py-hotpath-gate` budget + `py-ruff-gate` E/F/B + `py-typing-gate` + `py-test-gate` + env_schema/typed_parse templates + `py-kit-selfcheck`) |
| Go | Pack **go-kit** 0.1.0 (`poteto-go` standing scorecard, `go-rg-gate` single-walk + `go-hotpath-gate` budget + `go-fmt-gate` + `go-vet-gate` + `go-race-ci-gate` + `go-golangci-gate` bodyclose/errcheck + ctx_errgroup/http_close templates + `go-kit-selfcheck`) |
| Shell | Pack **shell-kit** 0.1.0 (`poteto-shell` standing scorecard, `sh-rg-gate` single-walk + `sh-hotpath-gate` budget + `sh-shellcheck-gate` + `sh-fmt-gate` + `sh-strict-gate` + `sh-test-gate` + safe_temp/quoted_expand/test_edge templates + `sh-kit-selfcheck`) |
| Rust | Pack **rust-kit** 0.1.0 (`poteto-rust` standing scorecard, `rust-rg-gate` single-walk + `rust-hotpath-gate` budget + `rust-fmt-gate` + `rust-clippy-gate` + `rust-test-ci-gate` + unsafe_boundary/ffi_extern templates + `rust-kit-selfcheck`) |
| C | Pack **c-kit** 0.1.0 (`poteto-c` standing scorecard, `c-rg-gate` single-walk + `c-hotpath-gate` budget + `c-fmt-gate` + `c-warn-gate` + `c-san-ci-gate` + `c-malloc-gate` + bounded_string/malloc_check templates + `c-kit-selfcheck`) |
| C++ | Pack **cpp-kit** 0.1.0 (`poteto-cpp` standing scorecard, `cpp-rg-gate` single-walk + `cpp-hotpath-gate` budget + `cpp-fmt-gate` + `cpp-warn-gate` + `cpp-tidy-ci-gate` + unique_ptr_new/static_cast templates + `cpp-kit-selfcheck`) |
| Java | Pack **java-kit** 0.1.0 (`poteto-java` standing scorecard, `java-rg-gate` single-walk + `java-hotpath-gate` budget + `java-fmt-gate` + `java-checkstyle-ci-gate` + `java-nullability-gate` + prepared_statement/logger_not_stdout templates + `java-kit-selfcheck`) |
| Kitchen | Docs only. Point; do not host product CI or Feature Maps here |

Facepunch alignment is Lua-only. Other stacks score CI / trust / size without Facepunch.

See also [lua.md](lua.md), [python.md](python.md), [go.md](go.md), [shell.md](shell.md), [rust.md](rust.md), [c.md](c.md), [cpp.md](cpp.md), [java.md](java.md), [pr-workflow.md](pr-workflow.md), [evidence-standard.md](evidence-standard.md).
