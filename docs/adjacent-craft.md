# Adjacent craft packs (not pstack core)

Engineering discipline skills people mix with pstack. Complementary — **not** a second factory OS. Look/feel → [adjacent-taste.md](adjacent-taste.md). Growth → [adjacent-growth.md](adjacent-growth.md).

## mattpocock/skills

Source: [mattpocock/skills](https://github.com/mattpocock/skills) · install via Claude plugin or `npx skills@latest add mattpocock/skills` (pick skills; keep editable copies if you want to hack).

Thesis: small composable skills beat mega-process frameworks (GSD / BMAD / Spec-Kit). Fixes misalignment, verbosity, missing feedback loops, and agent-accelerated entropy.

### Steal (encode these; do not re-research)

| Pattern | What it is | Where it lands here | When |
|---------|------------|---------------------|------|
| **`CONTEXT.md` + domain grilling** | Project glossary: preferred term + `_Avoid_` synonyms; ADRs for hard decisions. Agents speak one word instead of twenty. | Product repo root `CONTEXT.md` (or extend Feature Map **Language** section). Built by grilling, not by dumping a dictionary up front. | When Control-Glass (or any app) jargon outgrows Feature Map alone — e.g. “materialization cascade” vs a paragraph of filesystem prose |
| **Deep-module survey** | Periodic scan for “lots of behavior behind a small interface” opportunities (`/improve-codebase-architecture`). Survey, not rescue. | Pair with [dune-method.md](dune-method.md) + Feature Map; present candidates, human picks one | After [TRUST-NEXT.md](TRUST-NEXT.md) overnight is green; every few days on a dirty product tree, not instead of trust |
| **Session handoff compact** | Collapse a long chat into a handoff doc another agent can continue (`/handoff`) | Kitchen: keep using decision rows in `audit/decisions.tsv` for overnight; product: optional handoff file in `local/` if chats span agents | When context is fat across agent hops |
| **Selective install** | Take 1–3 skills; run setup once per repo if using his tracker/triage wiring | Product repos only. Never as kitchen OS. | Optional after overnight |

### Already covered — do not duplicate

| Matt skill | Ours |
|------------|------|
| `/grill-me` / grilling | `/poteto-mode` + Done means + Keep (+ `/how`) |
| `/tdd`, `/diagnosing-bugs` | pstack TDD / systematic-debugging |
| `/code-review` | Gordon + Bugbot + product `BUGBOT.md` |
| `/prototype` | Prototype playbook |
| `/implement` + `/to-tickets` / wayfinder | Intake queue + Cloud Agents + Feature Map slices |
| `/ask-matt` router | `/poteto-mode` — one entry, not a second router |

### Skip forever (for this factory)

- Install the **whole** set alongside pstack (double routers, double triage state machines).
- Replace `/poteto-mode` with `/ask-matt` or Matt’s issue-tracker triage as Cos.
- Block Control-Glass overnight or Autopilot unlock on Matt skills.
- Copy his Linear/GitHub triage label machine into the kitchen — we already have intake + fleet-board.

### Optional install (product, after trust)

```bash
# Pick only what you need — e.g. grill-with-docs, handoff, improve-codebase-architecture
npx skills@latest add mattpocock/skills
```

If using his engineering set: run `/setup-matt-pocock-skills` once in that repo (tracker + doc paths). Prefer **skills.sh editable copy** over a read-only plugin if you will adapt terms to Feature Map / Dune nouns.

## Decision

| Need | Reach for |
|------|-----------|
| Align before build | `/poteto-mode` (not Matt grill as default) |
| Shared product jargon | `CONTEXT.md` pattern above |
| Look / landing / motion | [adjacent-taste.md](adjacent-taste.md) |
| Growth / signal / panel | [adjacent-growth.md](adjacent-growth.md) |
| Deepen modules | Dune + Matt-style survey after trust |
| Autopilot / overnight | [TRUST-NEXT.md](TRUST-NEXT.md) only |

## pstack Pt. 2 — supervise someone smarter than you

Public operating notes from [@poteto Pt. 2](https://x.com/i/article/2094940651607715840): indirect restatement, `/teach`/`/how`/`/why`, architect + prototype before multi-unit waves. **Not** a second OS. Full recipe: [pstack-pt2-supervise.md](pstack-pt2-supervise.md).

| Need | Reach for |
|------|-----------|
| Default align / build / verify | `/poteto-mode` |
| Noisy intake / ambiguous bug | [pstack-pt2-supervise.md](pstack-pt2-supervise.md) |
| Matt craft patterns | sections above |

## SureForge (optional named QC)

Instruction-only Agent Skill for heavy multi-step / high-assurance work. **Not** always-on. Full recipe: [sureforge.md](sureforge.md).

| Need | Reach for |
|------|-----------|
| Default align / build / verify | `/poteto-mode` |
| Named heavy QC (standard/full) | [sureforge.md](sureforge.md) |
| Matt craft patterns | sections above |


## Cursor Projects × pstack

Product drop + poteto’s Michelin-kitchen take: persistent coordinator thread + cloud parallel. **Inner** loop only — Harvey outer loop stays. Full map: [cursor-projects-pstack.md](cursor-projects-pstack.md).

| Need | Reach for |
|------|-----------|
| Long-lived product wave coordinator | Cursor **Projects** (+ `/poteto-mode`) when spend green |
| Outer triage / overnight / routing | Harvey + [QUEUE](../intake/QUEUE.md) |
| Cloud fan-out | On-demand green — see [spend-and-cloud.md](spend-and-cloud.md) |

## Related

- [sureforge.md](sureforge.md)
- [cursor-projects-pstack.md](cursor-projects-pstack.md)
- [adjacent-taste.md](adjacent-taste.md)
- [adjacent-growth.md](adjacent-growth.md)
- [dune-method.md](dune-method.md)
- [feature-maps.md](feature-maps.md)
- [public-inventory.md](public-inventory.md)
