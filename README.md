# dark-factory

**Public teaching kitchen** for a personal software factory. Inspired by public Cursor / pstack agent-factory talks and essays — not affiliated with those authors, and not a copy of any private factory.

This repo teaches recipes. Product work lives elsewhere (private apps under `~/Projects`).

| Layer | Where |
|-------|--------|
| Kitchen (public) | this repo — docs, automations drafts, bootstrap templates |
| Product (private) | e.g. `~/Projects/Control-Glass`, `~/Projects/Flashpeek` |
| Eyes | `verify-<app>` + `control-<app>` CLI + Feature Map |
| Entry | `/poteto-mode` (pstack) · personal prefs: `/brooklyn-mode` on Control-Glass |

→ [docs/system-map.md](docs/system-map.md) · [PUBLIC.md](PUBLIC.md) · [docs/naming.md](docs/naming.md) · [docs/storage-layout.md](docs/storage-layout.md) · [VISIBILITY.md](VISIBILITY.md)

You are the head chef: pick the next target, define done, turn repeated review comments into red CI.

## Status (honest)

| Area | State |
|------|--------|
| Plugins / models / Dune-style CI on Control-Glass | In place |
| Feature Map + `control-glass` / visual + anti-AI UI gates | In place |
| Kitchen visibility CI + bootstrap gate pack | In place |
| Grok Bot fleet (coordinate only) | Wired; profiles local |
| Autopilot / Benny / Orchestrate | **Off** until trust overnight on Control-Glass |
| Other Models / On-Demand | Cap when empty — prefer Cursor Models + local ([spend-and-cloud.md](docs/spend-and-cloud.md)) |
| Trust next | [TRUST-NEXT.md](docs/TRUST-NEXT.md) · board [SETUP-STATUS.md](docs/SETUP-STATUS.md) |

## First 15 minutes

```text
/add-plugin pstack
/add-plugin cursor-team-kit
/setup-pstack
```

New chat after setup. **Do not** run `/create-verification-skill` in this kitchen — run it on a product repo (e.g. Control-Glass).

```text
/poteto-mode new task. read README.md and docs/system-map.md.
Done means you can list kitchen vs private product vs eyes.
Do not change any files.
```

## How work starts

```text
/poteto-mode <what you observed or want>
Done means <checkable>.
Keep <invariants>.
```

Non-trivial product work: outcome + Done means + Keep. Green build ≠ done. Match the check to the change (`control-*`, CI gate, fixture).

## Layout

| Path | Job |
|------|-----|
| [docs/system-map.md](docs/system-map.md) | Layers: public OS → kitchen → private product |
| [docs/naming.md](docs/naming.md) | Upstream skill names vs our product nouns |
| [docs/storage-layout.md](docs/storage-layout.md) | Disk paths |
| [docs/SETUP-STATUS.md](docs/SETUP-STATUS.md) | Gate board |
| [docs/TRUST-NEXT.md](docs/TRUST-NEXT.md) | Trust overnight before Autopilot |
| [docs/triage-subscribe.md](docs/triage-subscribe.md) | Outer-loop triage recipe (fail closed without Slack) |
| [docs/spend-and-cloud.md](docs/spend-and-cloud.md) | Caps, Cursor Models, self-hosted workers |
| [examples/](examples/) | Public examples (Atlas-style) |
| [templates/product-bootstrap/](templates/product-bootstrap/) | Dune-method + BUGBOT + gate pack onto products |
| [automations/](automations/) | Cursor Automation drafts + Grok Bot roster |
| [scripts/new-product.ps1](scripts/new-product.ps1) | Scaffold a private product under `~/Projects` |

Remotes: public [Dahhrk/dark-factory](https://github.com/Dahhrk/dark-factory) · private products on GitHub as needed.

## What this is not

- Not a claim of huge PR volume from plugins alone  
- Not Autopilot on day one  
- Not private Feature Maps, secrets, or real product ops in this repo ([VISIBILITY.md](VISIBILITY.md))  
- Not affiliated with any third-party private factory  

## Inspiration / sources

Public materials that informed this kitchen (read the distill pages for detail):

- [pstack](https://github.com/cursor/plugins/tree/main/pstack) · [cursor-team-kit](https://github.com/cursor/plugins/tree/main/cursor-team-kit)  
- [verification-skill-example](https://github.com/poteto/verification-skill-example)  
- Essay / talk notes under `docs/` (source archive headers on those pages)  
- Full register: [docs/source-register.md](docs/source-register.md)
