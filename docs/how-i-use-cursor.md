> Source archive — public posts/talks. This kitchen is inspired by that work; not affiliated.

# How I Use Cursor

Source: [x.com/poteto/status/2058975157503570132](https://x.com/poteto/status/2058975157503570132) â€” article dated **25 May 2026**. This is the first *Cursor* essay. Underneath it: [deepcoding](deepcoding.md) (22 Jan) and [Coding is Dead](coding-is-dead.md) (23 Jan). [Loops You Can Trust](loops-you-can-trust.md) (24 Jun) and [pstack guide Pt. 1](pstack-guide-pt1.md) (31 Aug) are sequels.

This repo is named after a line in here: when verification is trusted, â€œtrue agent parallelism, like in a **dark factory** for software, might be possible.â€

## Confession and conversion

She had **never used Cursor** before the onsite. At Meta, Claude Code was taking off; she paid **$200/month** for side projects and started an **orchestrator on top of CC**. Simplicity was the appeal and the trap.

Interview: two days on the **Editor Window** (pre Cursor 3). VS Code muscle memory helped. The first hour the CLI felt missing; clicking felt barbaric. Three things converted her:

1. **Multi-model in one project.** Opus + Codex at once (Opus frontend, Codex systems). Native model switch. Subagents on different models. She was already doing adversarial review; the UI made it natural.
2. **Compaction that does not make the model stupid.** CC compaction took minutes and she watched the context bar constantly. Cursor compacted so fast she stopped looking. After CC compact she often felt the model got â€œsuper dumb.â€
3. **GUI over TUI.** In-editor browser + **Design Mode**. Purpose-built UIs beat wrapping more CLIs.

## Building Cursor with Cursor

Joined **end of March**. Daily driver: Cursor 3 **Agent Window**. She still likes CC. Observation: CCâ€™s simplicity creates **latent demand** (she quotes Boris Cherny / `@bcherny`): people abuse a hackable CLI, then productize the abuse. At her last job a new internal CC orchestrator shipped **every week**.

That pattern exposes the real demand: **a CLI makes you, the human, the orchestrator.**

â€œRunning multiple CLIs in a GUI was missing the point entirely. The approach I was interested in was **building trust in agents.**â€

EM analogy, first published here:

- New hires need the codebase *and* how work gets done.
- They arrive with skills (debug, tests, communication).
- **Agents are new hires in a constant state of amnesia and idiocy.** They forget, they do not learn, but rules / skills / tools / memory approximate that. Capable, stupid, teachable.
- Failure modes are teaching opportunities.
- Without rigor they sycophantically write whatever you asked. They will write a lot of it.
- **Naive parallelization just makes them write slop faster.**

## If you want to go fast, go deep first

This is the pstack launch post.

- Same skills she uses every day to build Cursor.
- Started on side projects, refined at work.
- Among the most-used skills on the Cursor eng team (later posts: ~9â€“10k runs in a week).
- Install: [cursor.com/marketplace/cursor/pstack](https://cursor.com/marketplace/cursor/pstack)
- Goal is **not** max LOC. Opposite: maximum impact, least code.
- Multi-model rigor. `/poteto-mode` is the router.

Debugging example (the playbook idea in one paragraph): binary-search the problem space. Hypotheses, rule them out, synthetic repro if needed, instrumentation / logging to see state. Agents will *guess* if you let them. The playbook is how you donâ€™t.

Playbooks she lists here (early inventory; later grew to 22):

- Skill authoring and evals
- Working autonomously
- Bug fixes and runtime forensics
- Feature development
- Visual parity and prototyping
- And more

Skills she lists for direct use: `/how`, `/why` (MCP fan-out: git, issues, docs, chat, infra, errors, warehouse), `/architect`, `/arena`, `/interrogate`, `/tdd`, `/unslop`, `/reflect`, `/figure-it-out`, `/show-me-your-work`. Then `/automate-me` to mint your own `-mode` on top of pstack.

Works in any agentic tool; **best in multi-model Cursor**. Depth-first orchestration, not breadth-first.

The sentence the later essays rest on:

> The bottleneck with agents is verification. â€¦ When you can get there, true agent parallelism, like in a dark factory for software, might be possible. But first, we need to go deep and be rigorous. I think we get there by dialing up the trust.

## Zen and the Art of Software Maintenance

Writing code got easier. **Maintenance got worse** â€” agents write so much that bugs, perf, and requests explode.

**Cursor Automations** = cloud agents on a schedule or a Slack event. **Benny** is the example, given the same pstack skills.

Vision: if pstack can mostly one-shot a problem with high PR quality, automate *feedback* too.

Factory as of May 2026 (Benny still WIP):

1. **Triage** â€” employee dogfood on release candidates. Images/video. Chat the reporter until repro steps exist. Without that, agents only guess.
2. **Ticket** â€” code + git history (regression?) + Slack dupes + **Notion** (bug vs designed behavior).
3. **Second Benny via `/orchestrate`** â€” computer use on a Cloud Agent running Cursor itself. CDP (or equivalent) to click the real product.
4. Consistent repro â†’ fix. Perf â†’ before/after CPU traces and heap snapshots.
5. Subplanners verify against the ticket. Other workers record before/after video. PR opens **with the video in the description**.

She wanted a team that fixes bugs while she sleeps. Code-review scalability was the next unsolved (Cursor â€œupcoming featuresâ€).

Closing rule, unchanged in every later essay:

> Unless you can trust an agent to own a problem end-to-end, including verification, you cannot automate your processes. â€¦ Trying to parallelize agents you donâ€™t trust yet is a huge waste of tokens and introduces more slop into your codebase.

## How the five essays stack

| Date | Essay | Job |
|------|--------|-----|
| 22 Jan 2026 | [deepcoding](deepcoding.md) | Invert the Agony Pyramid; frontload context before code |
| 23 Jan 2026 | [Coding is Dead, Long Live Engineering](coding-is-dead.md) | Perspective: context engineering; Factorio; factory must grow |
| 25 May 2026 | **How I Use Cursor** (this) | Why Cursor over CC; pstack launch; trust > orchestration; Benny vision; â€œdark factoryâ€ |
| 24 Jun 2026 | Loops You Can Trust | Grove; control-glass origin; stop-the-line Benny; StyleX |
| 18 Jul 2026 | [Organic architecture](organic-architecture.md) | Monkeys obsolete review. Best rules are in the code. |
| 12 Aug 2026 | [Grok Bot workshop](workshop-grok-bot.md) | Live talk: trust curve, evals, four layers, tokens, PMs |
| 12 Aug 2026 | [Feature maps](feature-maps.md) | What she scrolled: four H2s, driving conventions, trust slide |
| 19 Aug 2026 | [Four loops](four-loops.md) | 1000-PR slogan. pstack / outer loop / Autopilot / cloud |
| 31 Aug 2026 | pstack guide Pt. 1 | Verification CLI + Feature Map; cloud not worktree farms; Dr Eggbot |
| ~Sep 2026 | [Let a thousand gardens bloom](thousand-gardens.md) | Typing is solved; problem-solving is not. Magic beans. English as PL. Gardener. |
| undated | [Three virtues](three-virtues.md) | Wallâ€™s laziness / impatience / hubris, rewritten for Grok Bot |

Workspace implications from *this* essay specifically: multi-model is not optional flavor â€” it is why she left a CC orchestrator. Compaction quality matters. Design Mode / in-editor browser are part of the harness, not chrome. Do not build another meta-orchestrator; encode rigor and verification.
