# Cursor Projects × pstack × dark-factory

Sources (public):
- [@cursor_ai — Introducing Projects](https://x.com/cursor_ai/status/2098162488013455784)
- [@poteto — Projects + pstack “Michelin kitchen”](https://x.com/poteto/status/2098165460714057863)

This recipe **maps the product drop to our factory**. Complementary — **not** Autopilot unlock, **not** a replacement for the Grok Bot floor, **not** a second Cos.

## What shipped

| Piece | Claim |
|-------|--------|
| **Cursor Projects** | One persistent coordinator thread instead of a fresh chat per task. Always-on; manages subagents; improves over time (Cursor compared it to `@bot`). |
| **Cloud parallel** | Same shape works in the cloud so you can fan out many agents. |
| **Poteto’s use** | She has been on Projects already; **pstack + Projects** = her “personal software factory / Michelin kitchen” with less plumbing — prompt the coordinator. |

## Map to dark-factory (do not collapse layers)

| Layer | Who / what | Projects analogy |
|-------|------------|------------------|
| Outer loop | Harvey + routines (farm, triage, route) | Still **outside** Cursor — intake, overnight catch-up, spend gates |
| Inner coordinator | `/poteto-mode` + (now) **Projects** thread | Persistent coordinator that owns Done means + Keep and spawns workers |
| Workers | Tony Cloud Agents / Devin / local agents | Projects subagents / cloud parallel |
| Proof | Riddler → Gordon → human plate | Unchanged — author never merges on own verdict |
| Kitchen | Public recipes only | This doc — patterns, not product Feature Maps |

**Rule:** Projects may absorb *inner* spawn plumbing. It does **not** replace Harvey routing, TRUST-NEXT, or human plate.

## When to try Projects

| Use | Skip |
|-----|------|
| Long-lived Control-Glass / product waves where chat-per-task thrashes context | Spend / on-demand dry — cloud parallel will stall (same wall as Cloud Agents) |
| pstack orchestrate / multi-unit waves with a standing coordinator | Overnight Autopilot fleet (still [TRUST-NEXT.md](TRUST-NEXT.md) only) |
| Teaching a single durable Done means across many subagents | Replacing Riddler proof or Stewie gates |
| After on-demand is green and you want poteto’s Michelin shape inside Cursor | Abandoning Grok Bot Cos / kitchen QUEUE |

## Steal (encode these)

| Pattern | What it is | Where it lands | When |
|---------|------------|----------------|------|
| Persistent coordinator | One thread owns the program of work | Cursor **Projects** for inner loop; Harvey stays outer | Multi-day product waves |
| Prompt the kitchen, not the plumbing | Brief Done means + Keep; let coordinator spawn | Spawn briefs to Tony / Projects | Default after trust |
| Cloud parallel as scale knob | Fan-out only when spend allows | Cursor Spending on-demand + [spend-and-cloud.md](spend-and-cloud.md) | High-volume PR days |
| Michelin naming | Factory = quality + plate, not raw throughput | Kitchen language; human plates | Always |

## Already covered

| Projects / poteto idea | Ours |
|------------------------|------|
| Always-on bot | Grok Bot fleet + Harvey routines |
| Coordinator + subagents | `/poteto-mode` + Cloud Agents + [outer-loop.md](outer-loop.md) |
| Supervise smarter models | [pstack-pt2-supervise.md](pstack-pt2-supervise.md) |
| Evidence before done | Feature Maps + Riddler → Gordon |
| Spend realism | [spend-and-cloud.md](spend-and-cloud.md) |

## Skip forever

- Treat Projects as greening Autopilot / TRUST-NEXT
- Delete Harvey / kitchen QUEUE because Cursor has a coordinator
- Spawn cloud thousands while on-demand is dry
- Vendor Cursor marketing copy as kitchen OS
- Skip human plate because “Projects shipped thousands of PRs” for poteto

## Decision

| Need | Reach for |
|------|-----------|
| Outer triage / overnight / routing | Harvey + [QUEUE](../intake/QUEUE.md) |
| Inner align / build / verify | `/poteto-mode` (+ **Projects** when spend green) |
| Noisy intake first move | [pstack-pt2-supervise.md](pstack-pt2-supervise.md) |
| Cloud fan-out | On-demand green + Tony; else GitHub MCP / draft PRs |
| Overnight / Autopilot | [TRUST-NEXT.md](TRUST-NEXT.md) only |

## Related

- [pstack-pt2-supervise.md](pstack-pt2-supervise.md)
- [outer-loop.md](outer-loop.md)
- [spend-and-cloud.md](spend-and-cloud.md)
- [orchestration.md](orchestration.md)
- [workshop-grok-bot.md](workshop-grok-bot.md)
- [TRUST-NEXT.md](TRUST-NEXT.md)

## Source archive

- https://x.com/cursor_ai/status/2098162488013455784
- https://x.com/poteto/status/2098165460714057863
