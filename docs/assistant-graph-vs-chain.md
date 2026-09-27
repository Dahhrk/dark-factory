# Assistant graph vs chain (operating encode)

Sources (public): [@0xSoural on verifier / loops / graphs](https://x.com/0xSoural/status/2103847152547979736) · Distort [Everyone Is Building Agent Teams. Nobody Is Building The Graph](https://x.com/i/article/2099113086669979653) ([status](https://x.com/distortgeekin/status/2099117449232699548)). Scraped 2026-09-27. Encode only; **does not authorize Autopilot** or overnight fleet expand.

Thesis: **Harness** keeps one agent honest. **Loop** improves run over run. **Graph** is shared state plus conditional next step plus stop. Fixed A→B→C with blind handoffs is a **chain**, not a graph. A named coordinator watching workers without conditional routing is a **dashboard**, not a graph.

## When to invoke

> Prefer one well-prompted agent unless context, parallelism, or tools force a split. Start with one state field the next step actually reads.

| Use | Skip |
|-----|------|
| Deciding single agent vs multi-agent | Treating headcount as progress |
| Designing handoffs that must read shared state | Blind A→B→C pipelines with no stop condition |
| Token / ROI honesty before spawning workers | Enabling Autopilot or overnight fleet from this note |
| Smallest stateful routing experiment | Inventing pack smells or kitchen orchestration products |

## Definitions (encode these)

| Term | Meaning | Not |
|------|---------|-----|
| **Harness** | Keeps **one** agent honest (tools, budgets, Done means, verify) | More agents |
| **Loop** | Improve the **same** run shape over successive runs | A team org chart |
| **Graph** | Shared state + **conditional** next step + **stop** | Fixed sequence with blind handoffs |
| **Chain** | Fixed A→B→C; each step may not read prior state | A real graph |
| **Dashboard** | Named coordinator watching workers **without** conditional routing | A real graph |

## Multi-agent cost and when it wins

Multi-agent often costs roughly **3-10× tokens** versus one agent on the same task. Use multi-agent when at least one holds:

- **Context pollutes** - one thread cannot hold the work without thrashing.
- **Work is parallel** - independent slices with no data edge between them.
- **Specialization improves tools** - distinct toolsets or verify roles actually change outcomes.

Otherwise prefer **one well-prompted agent** with a clear Done means.

## Smallest start

Add **one state field** that the **next step actually reads** before deciding what to do (or whether to stop). If nothing reads it, it is decoration, not a graph.

## Autopilot / overnight (explicit gate)

Autopilot and overnight fleet stay gated by [TRUST-NEXT.md](TRUST-NEXT.md). **This doc does not authorize enabling Autopilot.** Encode the vocabulary; do not change the trust checklist.

## Already covered (do not duplicate)

| Idea | Ours |
|------|------|
| Parallel independent checks / harness speed | [assistant-speed-harness.md](assistant-speed-harness.md) |
| Thin harness / fat skills | [thin-harness-fat-skills.md](thin-harness-fat-skills.md) |
| Orchestration / ownership | [orchestration.md](orchestration.md) · [why-throughput.md](why-throughput.md) |
| Overnight / Autopilot ladder | [TRUST-NEXT.md](TRUST-NEXT.md) · [fleet-board.md](fleet-board.md) |
| Loops you can trust | [loops-you-can-trust.md](loops-you-can-trust.md) · [four-loops.md](four-loops.md) |

## Remaining / not factory work

| Topic | Status | Factory action |
|-------|--------|----------------|
| Autopilot / overnight fleet expand from this clip | Forbidden | [TRUST-NEXT.md](TRUST-NEXT.md) only |
| New pack smells from graph rhetoric | Skip | Wait for `audit/smells.tsv` repeats |
| Replacing CoS / specialists with a framework graph product | Out of scope | Pattern only |
| Author-agent merge on own verdict | Forbidden | Human merge |

## Related

- [TRUST-NEXT.md](TRUST-NEXT.md)
- [assistant-speed-harness.md](assistant-speed-harness.md)
- [assistant-memory-hygiene.md](assistant-memory-hygiene.md)
- [thin-harness-fat-skills.md](thin-harness-fat-skills.md)
- [orchestration.md](orchestration.md)
- [loops-you-can-trust.md](loops-you-can-trust.md)
- [fleet-board.md](fleet-board.md)
- [adjacent-craft.md](adjacent-craft.md)
