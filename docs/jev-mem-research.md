# Jev-Mem research note (distinct from TypeSafe Jev)

Source (public): [@omarsar0](https://x.com/omarsar0/status/2103603205821366311) · paper page [Jev-Mem: System-One-Controlled Agentic Memory](https://academy.dair.ai/papers/jev-mem-system-one-controlled-agentic-memory-for-efficient-ai-agents-2609.23986) (Jiang, Li, Li — UT Dallas; arXiv-style id 2609.23986). Scraped 2026-09-27. Speaker / paper claims — not an audited factory ledger.

**Name collision:** kitchen already ships **TypeSafe Jev** (`automations/typesafe/jev.mjs`) — a cheap System-One **judge** (typed questions over a state blob). **Jev-Mem** is a different artifact: an academic **agentic memory** architecture. Do not merge the two in docs or code.

## Thesis (paper)

Three planes: System-One **control** (memory typing, relations, routing, retrieval budget, traversal, scoring, adaptive stop), structured multi-relational **memory**, System-Two **reasoning** only for hard synthesis / final answer. Keeps autoregressive generation off the memory critical path. Reported LoCoMo overall 0.777 (+11% rel vs strongest baseline), construction 158 s (6.6× vs fastest competing), query latency 0.93 s (−36.7%).

## When to invoke

> Research note only. Disambiguate names. Steal control-plane ideas; do not invent memory handlers.

| Use | Skip |
|-----|------|
| Someone confuses TypeSafe Jev with Jev-Mem | Wiring a new memory product into kitchen |
| Designing agent memory / retrieval budgets | Inventing Net.Register-style handlers |
| Wanting LLM off the hot path for store/retrieve | Treating paper numbers as factory Keep without a ledger need |

## Steal later (if ledger proves need)

| Pattern | What it is | Factory landing (future) | Not now |
|---------|------------|--------------------------|---------|
| **Controller ≠ reasoner** | Lightweight policy for type/route/budget/stop; LLM for answer only | Possible future harness note beside typesafe | No code this pass |
| **Typed memory relations at write** | Assign type + relations when storing | Product memory designs only if a smell repeats | No kitchen schema invent |
| **Retrieval budget + adaptive stop** | Cap graph walk; stop when enough | Eval / harness timeouts kinship | No new gate invent |

## Already covered — do not duplicate

| Idea | Ours |
|------|------|
| Cheap System-One judgments | [automations/typesafe/README.md](../automations/typesafe/README.md) |
| Decision / smell ledger | `audit/decisions.tsv` · `audit/smells.tsv` |
| Context pointers vs dump | Feature Maps · resolvers in [thin-harness-fat-skills.md](thin-harness-fat-skills.md) (when landed) |
| Encode repeats into structure | [quality-ladder.md](quality-ladder.md) |

## Remaining / not factory work

| Topic | Status | Factory action |
|-------|--------|----------------|
| Implementing Jev-Mem in kitchen or packs | Deferred | Wait for proven smell + product owner |
| Net.Register / invented memory APIs | Forbidden | Do not invent |
| Renaming TypeSafe Jev | Out of scope | Keep name; disambiguate in docs |

## Related

- [automations/typesafe/README.md](../automations/typesafe/README.md)
- [evals.md](evals.md)
- [adjacent-craft.md](adjacent-craft.md)
- [github-sources.md](github-sources.md)
