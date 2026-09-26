# Thin harness, fat skills (adjacent encode)

Source (public): [@garrytan “Thin Harness, Fat Skills”](https://x.com/garrytan/status/2042925773300908103) (queued via [@himarkyi](https://x.com/himarkyi/status/2103792459042169157)). Scraped 2026-09-27. Evidence: public article, not kitchen OS.

Thesis: the productivity gap is **architecture**, not a smarter base model. Push intelligence into **skills**; keep the **harness** thin; push execution into **deterministic** tools. Complementary to pstack / Feature Maps — **not** a second factory OS and **not** Autopilot unlock.

## When to invoke

> Fat skills. Thin harness. Codify if asked twice.

| Use | Skip |
|-----|------|
| Harness growing fat (many broad tools, slow round-trips) | Replacing `/poteto-mode` with a new router |
| Skill files that read like one-off prompts | Dumping a 20k-line mega-instruction file |
| Choosing latent vs gateable work | Inventing product memory handlers “because the article said so” |
| Teaching agents to encode repeats | Turning Autopilot on |

## Steal (encode these; do not re-research)

| Pattern | What it is | Where it lands here | When |
|---------|------------|---------------------|------|
| **Thin harness** | Loop the model, read/write files, manage context, enforce safety. Prefer narrow fast tools over god-tools / fat MCP menus | Product harnesses + [orchestration.md](orchestration.md); avoid 40+ always-loaded tools | When tool list eats context or latency |
| **Fat skills** | Markdown procedures that encode **how** (judgment + process); invocation supplies **what** (params / world) | pstack skills + product skills; treat like method calls | Repeated workflows |
| **Resolvers** | When task type X appears, load document Y first (pointers, not a dump) | `AGENTS.md` / Feature Map / `CONTEXT.md` pointers; skill `description` fields | Context rot / agents missing evals or conventions |
| **Latent vs deterministic** | Judgment in the model; same-input-same-output in code/SQL/gates | Gates + verify skills for trust; agents for synthesis | Before putting combinatorial work in chat |
| **Diarization** | Read many sources → one structured profile / judgment page | Research briefs + Feature Map Language; not a DB lookup | Knowledge-work intake |
| **Codify if asked twice** | Manual once (small N) → approve → skill (and cron if automatic) | [quality-ladder.md](quality-ladder.md) · encode-lessons; `audit/smells.tsv` | Repeat asks / overnight failures |

## Already covered — do not duplicate

| Article idea | Ours |
|--------------|------|
| Skills as process | pstack skills + `/poteto-mode` |
| Context pointers vs mega-file | [prompting-model.md](prompting-model.md) · Feature Maps · `CONTEXT.md` in [adjacent-craft.md](adjacent-craft.md) |
| Encode repeats into structure | [quality-ladder.md](quality-ladder.md) · encode-lessons |
| Parallel sub-agents | [orchestration.md](orchestration.md) · `/swarm` `/arena` |
| Overnight / Autopilot | [TRUST-NEXT.md](TRUST-NEXT.md) only |

## Remaining / not factory work

| Topic | Status | Factory action |
|-------|--------|----------------|
| Vendor-specific CLI dumps / leaked harness archaeology | Out of scope | Do not copy proprietary trees into kitchen |
| Building a new consumer assistant product here | Out of scope | Kitchen stays kitchen |
| Invented Net.Register-style memory handlers | Forbidden this pass | Research only elsewhere if needed |

## Related

- [assistant-speed-harness.md](assistant-speed-harness.md)
- [adjacent-craft.md](adjacent-craft.md)
- [why-throughput.md](why-throughput.md)
- [quality-ladder.md](quality-ladder.md)
- [orchestration.md](orchestration.md)
