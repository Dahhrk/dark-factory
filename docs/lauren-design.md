# How Lauren designs

She is a **design engineer with verification**, not a marketing art director. Product UI + proof. Adjacent packs (Elaya, Emil) fix look/feel; they are not her factory.

Sources: pstack `experience-first` + `visual parity` playbooks; [poteto/noodle](https://github.com/poteto/noodle) craft skills; [How I Use Cursor](how-i-use-cursor.md) (Design Mode); [workshop](workshop-grok-bot.md).

## Mental model

- Ship **less, better** — few polished features beat ten rough ones.
- **Prototype before committing** — throwaway HTML beats production guesses.
- Best spec is **code** / running UI, not a long Plan.
- Sweat transitions, alignment, spacing, feedback, empty/error states.
- Done = **rendered** proof (screenshot, image diff, `control-ui`), not “JSX looks nice in chat.”

## Her loop

```text
1. Decide the experience (few surfaces, clear delight)
2. /architect or prototype — cheap sketches
3. /arena if several visual directions — pick / graft
4. Build with frontend-design + make-interfaces-feel-better
5. Design Mode on the live app — point at what feels off
6. visual parity or control-ui — screenshot / pixel proof
7. /deslop + ship
```

Example:

```text
/poteto-mode prototype two versions of this settings panel:
A dense, B airy. throwaway HTML ok. I'll pick one.
then implement the winner. make-interfaces-feel-better on polish.
verify in browser with screenshots before you call it done.
```

Reference-driven:

```text
/poteto-mode visual parity. attached image is correct.
match spacing and type. image diff until zero. never edit the baseline to cheat.
```

## Skills to install (product repo)

```bash
npx skills add poteto/noodle --skill frontend-design
npx skills add poteto/noodle --skill make-interfaces-feel-better
npx skills add poteto/noodle --skill interaction-design
```

| Skill | Job |
|-------|-----|
| `frontend-design` | Commit a bold aesthetic before code. Ban Inter / purple-on-white / cookie-cutter grids. |
| `make-interfaces-feel-better` | Concentric radii, optical alignment, shadows over borders, soft exits, press scale ~0.96, no `transition: all`, hit targets. |
| `interaction-design` | Microinteractions / motion vocabulary. |

Also: team-kit `deslop`; pstack `/unslop` for prose. Neither replaces visual proof.

## Design Mode

Agents Window browser → `Cmd/Ctrl+Shift+D`. Click / draw / talk. Agent gets xpath, component, computed styles, fiber props, **and** a screenshot of that state. Refine in the running app. Cursor often recommends a fast model (e.g. Composer) for this loop.

## Lauren vs Elaya vs Emil

| | Lauren | Elaya | Emil Kowalski |
|--|--------|-------|---------------|
| Center | Product UI + proof | Landing / brand look | Motion / feel |
| Spec | Running app + image diff | Fonts, spacing table, copy bans | Easing, springs, library choice |
| Tooling | pstack + Design Mode + control-ui | `landing-page-design` | `emil-design-eng` pack |
| Default move | Prototype → verify | Visual constitution | Animate correctly |

Use Elaya for a marketing site. Use Emil for janky motion. Use Lauren’s stack when shipping **product** under Autopilot.

## What she does not do

- One-shot “make a beautiful landing page”
- Trust “looks good in the diff”
- Soft style guides alone without CI / harness
- Plan forever instead of a throwaway prototype

## Related

- [setup-everything.md](setup-everything.md) Gate 4
- [feature-maps.md](feature-maps.md) — agent drives the same UI
- [public-inventory.md](public-inventory.md)
