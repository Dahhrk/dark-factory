# Assistant speed harness (adjacent encode)

Sources (public): [@cerebras “We built a 20x faster Grok bot”](https://x.com/cerebras/status/2103506859709858175) · companion bake-off [@MilksandMatcha](https://x.com/MilksandMatcha/status/2103508158690058592). Scraped 2026-09-27. Recorded runs on one dinner-reservation task — not a general ranking.

Thesis: assistant slowness is often **harness + discovery**, not only model quality. Parallelize independent checks, shorten model-wait pauses, and **skill-encode procedures** so the agent does not rediscover the site every run. Complementary to [thin-harness-fat-skills.md](thin-harness-fat-skills.md) — **not** Autopilot unlock and **not** a mandate to host on any one inference vendor.

## When to invoke

> Independent checks in parallel. Live facts stay live. Procedures become skills.

| Use | Skip |
|-----|------|
| Agent spends minutes on sequential browser discovery | Treating Cerebras/Pi as required factory hosts |
| Same site navigation rediscovered every run | Encoding volatile availability/price into a skill |
| Tool-call storms on independent options | Inventing language-kit smells from this article |
| Speed work on consumer or ops bots | Control-Glass as a language-farm host (forbidden) |

## Steal (encode these; do not re-research)

| Pattern | What it is | Where it lands here | When |
|---------|------------|---------------------|------|
| **Parallel independent options** | Fan out checks that do not depend on each other; sequence only the dependent book/decide step | Harness / orchestration briefs; `/swarm`-style coverage for independent slices | Multi-option search, multi-URL verify |
| **Skill the procedure, not the live fact** | Save navigation / booking procedure as a skill before the timed run; re-check availability, price, card live | Product skills; “codify if asked twice” | Repeat site workflows |
| **Cut model-wait pauses** | Faster inference shortens return-to-model gaps; does not remove website load or phone-verify | Spend / model map via `/setup-pstack`; day work prefers cost–intelligence sweet spot | Latency-bound agent loops |
| **Measure the harness path** | Trace where minutes go (skills load, memory, sequential browser) before blaming the model | Workshop honesty + decision rows | “Why is this bot slow?” intake |

## Already covered — do not duplicate

| Article idea | Ours |
|--------------|------|
| Skills encode how | pstack skills · [thin-harness-fat-skills.md](thin-harness-fat-skills.md) |
| Parallel ownership | [why-throughput.md](why-throughput.md) · [orchestration.md](orchestration.md) |
| Token / ROI honesty | [spend-and-cloud.md](spend-and-cloud.md) · [workshop-grok-bot.md](workshop-grok-bot.md) |
| Grok Bot workshop speedrun inspiration | [pstack-galaxy-livestream.md](pstack-galaxy-livestream.md) |

## Remaining / not factory work

| Topic | Status | Factory action |
|-------|--------|----------------|
| Pinning factory default inference to one vendor | Not a Keep | Pattern only |
| Re-running the dinner bake-off as kitchen CI | Out of scope | Optional product eval elsewhere |
| New pack smells without ledger proof | Skip | Wait for `audit/smells.tsv` repeats |

## Related

- [thin-harness-fat-skills.md](thin-harness-fat-skills.md)
- [why-throughput.md](why-throughput.md)
- [spend-and-cloud.md](spend-and-cloud.md)
- [workshop-grok-bot.md](workshop-grok-bot.md)
- [assistant-graph-vs-chain.md](assistant-graph-vs-chain.md)
- [assistant-memory-hygiene.md](assistant-memory-hygiene.md)
- [adjacent-craft.md](adjacent-craft.md)

## Harvey operating defaults (encode 2026-09-27)

Dark authorized applying this to Chief of Staff / intake work without waiting for Cerebras-class inference.

| Default | Do | Do not |
|---------|----|--------|
| **Parallel independent checks** | Fan out restaurant / flight / shop / verify options that do not depend on each other | Sequential browser crawls of independent URLs |
| **Playbook before discovery** | Dispatch site-playbook / saved procedure on first tool use | Rediscover OpenTable, Resy, Amazon, etc. every run |
| **API before browser** | Connector or direct API when available | Browser as the default path |
| **Thin status** | One ack, then result milestones only | Command-by-command narration |
| **Early handoff** | Route heavy code / UI / CI to the owning specialist or cloud agent | Keep long loops on Harvey |
| **Clear Done means** | Ask or infer a single success condition before multi-option shopping | Browse three restaurants when one named spot suffices |

**Expected ceiling (honest):** roughly 3-10x wall time on browser-heavy errands; roughly 1.5-3x felt speed on routing and factory intake. Not the blog's 22s dinner number (different model + harness).

**Measure:** when a run feels slow, jot where minutes went (skills load, memory, sequential browser, model waits) before blaming the model. Optional product bake-off elsewhere; not kitchen CI.

**Footage notes (Milk Sidekick clip):** split UI with think-block timers (~3s / ~2s), deep-link or known OpenTable path, confirmation as structured final reply separate from chain-of-thought.
