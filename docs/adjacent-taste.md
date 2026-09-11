# Adjacent taste packs (not pstack core)

Tools people mix with pstack for **look** and **feel**. Workshop notes pointed at anti-slop for TS gardening. Elaya/Emil are community/X patterns, not pstack.

## dmmulroy/anti-slop

[anti-slop](https://github.com/dmmulroy/anti-slop) is opinionated TS rules that contain widen-then-assert, `unknown` soup, unsafe dicts, and similar.

```bash
npx skills add dmmulroy/anti-slop --skill install-anti-slop
```

Gardener layer: smell → rule. Pairs with [dune-method.md](dune-method.md) and `templates/product-bootstrap/`.

## Elaya Design (`landing-page-design`)

[ai-design-skills](https://github.com/elayadesign/ai-design-skills) / [redesign-skill](https://github.com/elayadesign/redesign-skill).

**Look + copy** constitution: ban Inter/Roboto, purple gradients, 3 equal cards, “Elevate/Seamless” copy; force strategy then visual law. Best for **marketing / landing** pages.

Not the product verify loop. Pair with [design-notes.md](design-notes.md) when shipping app UI under Autopilot.

## Emil Kowalski skills

[emilkowalski/skills](https://github.com/emilkowalski/skills) (`emil-design-eng`, `animate`, `pick-ui-library`, …).

**Feel**: easing, no `scale(0)`, Sonner over hand-rolled toasts, motion under 300ms. Thesis: [Agents with Taste](https://emilkowal.ski/ui/agents-with-taste).

```bash
npx skills@latest add emilkowalski/skills
```

Closest pstack cousin: noodle `make-interfaces-feel-better` + [visual-parity.md](visual-parity.md).

## Community Dune-method (not Dune source)

| Pack | Job |
|------|-----|
| korallis scaffolding | Capability folders, public exports, mechanical CI — **method**, not Electron source |
| Factory `no-use-effect` | Same ban philosophy + replacement patterns |

Use to bootstrap [dune-method.md](dune-method.md) rules 1–2. Never claim “we installed Dune.”

## Kargul craft bar (studio density)

Public encode of [@marcelkargul](https://x.com/marcelkargul) / [kargul.studio](https://kargul.studio) operating patterns: Figma density → selective Rive/AE motion → Next.js polish. **Not** a second OS. Full recipe: [kargul-craft-bar.md](kargul-craft-bar.md). Product application: Walter (ui:yes).

## SiteCMD / Brambleworks rails (deterministic gates)

Public encode of [SiteCMD](https://sitecmd.com) / [Brambleworks post](https://sitecmd.com/blog/senior-software-engineers-perspective-on-building-with-ai) + friend agent test/notify pattern: guardrail bank, hook ladder, local `@sitecmd/cli`, claims→SoT. **Not** Autopilot. Full recipe: [sitecmd-brambleworks-bar.md](sitecmd-brambleworks-bar.md). Harness: Stewie. Wire: Tony. Banned UI list: Walter.

## Decision

| Need | Reach for |
|------|-----------|
| Product UI + proof | verify + visual parity + Design Mode |
| Studio-density chrome / hero motion budget | [kargul-craft-bar.md](kargul-craft-bar.md) + Walter |
| Deterministic AI rails / agent test+notify | [sitecmd-brambleworks-bar.md](sitecmd-brambleworks-bar.md) + Stewie |
| Landing page anti-template | Elaya |
| Motion / microinteraction jank | Emil |
| TS agent slop in types | anti-slop |
| Folder/import CI | Dune / korallis-style |
| Signal brief / copy panel / growth playbook | [adjacent-growth.md](adjacent-growth.md) |
| Domain glossary / deepen-modules survey | [adjacent-craft.md](adjacent-craft.md) (Matt Pocock) |

## Related

- [kargul-craft-bar.md](kargul-craft-bar.md)
- [sitecmd-brambleworks-bar.md](sitecmd-brambleworks-bar.md)
- [design-notes.md](design-notes.md)
- [adjacent-growth.md](adjacent-growth.md) — growth / signal patterns (not look)
- [adjacent-craft.md](adjacent-craft.md) — engineering craft packs (not look)
- [public-inventory.md](public-inventory.md)
- [dune-method.md](dune-method.md)
