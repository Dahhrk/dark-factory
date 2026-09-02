# Atlas control surface (public twin)

**VERIFIED PUBLIC IMPLEMENTATION** shape: [poteto/verification-skill-example](https://github.com/poteto/verification-skill-example). Fictional product (Atlas / Harbor Labs). Not private Glass source. Live twin she scrolled: [feature-maps.md](feature-maps.md). Pt. 1: [pstack-guide-pt1.md](pstack-guide-pt1.md).

## Why it matters

Shows what `/create-verification-skill` should emit for a VS Code / Electron-style fork: checkout-isolated desktop instances driven over **Chrome DevTools Protocol**. Each checkout derives its own **port** and **user-data directory**. The driver refuses an ambiguous connection that could control the user’s main session.

CLI binary may be omitted from the public example; the **command surface** is documented. Your product must ship a real CLI (Build the Lever).

## Documented commands (example surface)

| Group | Commands |
|-------|----------|
| Health | `doctor`, `info`, `cleanup`, `watch --restart` |
| Observe | `snapshot`, `screenshot`, `components`, `console`, `network-log`, `network-summary` |
| Navigate | `home`, `new-session`, `select-project`, `select-runtime` |
| Drive | `send`, `click`, `aria-click`, `type`, `press`, `upload-image`, `add-context` |
| State | `feature-flag`, `eval` (after real path only) |
| Perf | `trace`, `profile`, `record`, `perf-metrics`, `wait-settle` |

## Proof standard

- Normal **production user path** — not invoking internal handlers as primary proof.
- Trigger and **stable end state** in the same recording.
- Side effects (files, DB, RPC), not pixels alone.
- `doctor` first — stale bundle is not evidence.
- `wait-settle` ≠ turn done (Driving conventions in [feature-maps.md](feature-maps.md)).
- No `eval` of `glass.*`-style internals as the pass criterion.

## Generator contract (`/create-verification-skill`)

Interviews the **repo** first: surface, start, harness, evidence, side-by-side instances. Emits project-local skill with **Launch · Doctor · Drive · Evidence · Cleanup · Helpers** plus Feature Map. Must **execute its own instructions once** before handoff — an unexecuted verify doc is a draft, not infrastructure.

Daily: `/maintain-verification-skill` — one read-only source reader per feature, one live pass, clean/changed/blocked, at most one correction PR; never hide product regressions by editing the map.

## Kitchen

Do **not** run create-verify in `dark-factory`. Apply on the product path in `intake/QUEUE.md`. Bootstrap: `templates/product-bootstrap/`.
