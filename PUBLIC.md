# How public vs private works

Inspired by the public pstack kitchen/factory split. Full table: [docs/system-map.md](docs/system-map.md). Naming: [docs/naming.md](docs/naming.md).

```text
PUBLIC OS        →  pstack + cursor-team-kit   (Cursor marketplace)
PUBLIC TEACHING  →  this repo (dark-factory)   (docs / templates / examples)
PRIVATE PRODUCT  →  ~/Projects/Control-Glass   (app + control-glass + Dune + CI)
```

| Want | Do |
|------|-----|
| Same marketplace tools | `/add-plugin pstack` + `cursor-team-kit` |
| Read / share the recreate path | Use **this** repo |
| Run a trusted agent product loop | Work in **Control-Glass** (private remote) |
| Contribute to other OSS | Open **their** repo; `/poteto-mode` + their CI |

Keep upstream skill names (`/poteto-mode`, Feature Map, **Dune**, Benny, `control-<app>`, Autopilot) so agents hit real tools.

[VISIBILITY.md](VISIBILITY.md) · [docs/storage-layout.md](docs/storage-layout.md)
