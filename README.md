# dark-factory

**Public teaching kitchen** modeled on Lauren Tan’s (@poteto) *public* surface. She does **not** publish a factory repo — her public OS is **pstack**; her real factory is private. We mirror that: this repo teaches; **`Control-Glass`** is the private factory.

→ Map: **[docs/her-system-map.md](docs/her-system-map.md)** · **[PUBLIC.md](PUBLIC.md)** · **[docs/naming.md](docs/naming.md)**  
→ Private product: `~/Projects/Control-Glass` (`control-glass` / `verify-glass` — our folder, named after her skill)  
→ Visibility: [VISIBILITY.md](VISIBILITY.md)

Personal software factory recipes. The factory metaphor is hers: [Coding is Dead](docs/coding-is-dead.md) · [How I Use Cursor](docs/how-i-use-cursor.md) (“dark factory”). Load-bearing recipe: control CLI + Feature Map + cloud agents ([Pt. 1](docs/pstack-guide-pt1.md)).

This repo is the **kitchen**, not a product. Product work happens in other repos. You are the head chef: pick the next target, define done, turn repeated review comments into red CI.

## Recreate her factory

You can match her **public OS**. You cannot download Dune source or her org config. Full path: [docs/setup-everything.md](docs/setup-everything.md). Board: [docs/SETUP-STATUS.md](docs/SETUP-STATUS.md). Ceiling: [docs/match-ceiling.md](docs/match-ceiling.md).

## First 15 minutes

```text
/add-plugin pstack
/add-plugin cursor-team-kit
/setup-pstack
```

New chat after setup. **Say no** to `/create-verification-skill` here — run it on `Control-Glass`.

```text
/poteto-mode new task. read README.md and docs/her-system-map.md.
Done means you can list public OS vs public teaching vs private factory.
Do not change any files.
```

## How work starts

```text
/poteto-mode <what you observed or want>
Done means <checkable>.
Keep <invariants>.
```

## Layout (start here)

| Path | Job |
|------|-----|
| [docs/her-system-map.md](docs/her-system-map.md) | Her layers → ours |
| [docs/naming.md](docs/naming.md) | **Her names** for borrowed pieces |
| [docs/storage-layout.md](docs/storage-layout.md) | Disk paths |
| [PUBLIC.md](PUBLIC.md) | Short visitor map |
| [docs/operating-manual.md](docs/operating-manual.md) | Full OS + read order |
| [docs/SETUP-STATUS.md](docs/SETUP-STATUS.md) | Gate board |
| [examples/](examples/) | Public examples (Atlas analog) |
| [templates/product-bootstrap/](templates/product-bootstrap/) | **Dune** + BUGBOT onto products |
| [automations/](automations/) | Cursor + Grok Bot drafts |
| Private factory | `~/Projects/Control-Glass` |

Essays and full distill index: see older layout sections in git history / `docs/` directory listing. Key essays: [deepcoding](docs/deepcoding.md), [coding-is-dead](docs/coding-is-dead.md), [how-i-use-cursor](docs/how-i-use-cursor.md), [feature-maps](docs/feature-maps.md), [four-loops](docs/four-loops.md), [pstack-guide-pt1](docs/pstack-guide-pt1.md).

## What this is not

- Not a claim of 1000 PRs/month from plugins alone  
- Not Autopilot on day one  
- No public GitHub remote until you say **publish it**

## Sources

- [pstack](https://github.com/cursor/plugins/tree/main/pstack) · [verification-skill-example](https://github.com/poteto/verification-skill-example)  
- Full register: [docs/source-register.md](docs/source-register.md)
