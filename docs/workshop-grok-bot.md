> Source archive — public posts/talks. This kitchen is inspired by that work; not affiliated.

# Grok Bot workshop (12 Aug 2026)

Source: [x.com/0xCodez/status/2091980766372639135/video/1](https://x.com/0xCodez/status/2091980766372639135/video/1) â€” uncut ~60 min screen-share (video id `2091979655037300736`, 3580s). Posted 24 Aug 2026. Same session as Maven [How Cursor Turned AI Agents Into Better Engineers](https://maven.com/p/e23d9c) (recorded ~12 Aug, day after Grok Bot beta). Official-ish mirror: [YouTube](https://www.youtube.com/watch?v=Cmoh-yR-usA).

This is first-party **spoken**. The five essays are first-party **written**. The talk is where she shows the live factory and answers the questions the essays skip (tokens, PMs, evals, why comments are banned).

Speaker figures, not an audited ledger. Recaps used to reconstruct chapters: [TANREN](https://tanren.jp/blog/216) (Japanese, from the audio), [XiaoHu](https://best.xiaohu.ai/en/article/cursor-agent-team-24x7/), [HTX](https://www.htx.com/news/woke-up-to-find-20-prs-merged-into-main-branch-spacex-ai-eng-sQa47Cjn/). The 0xCodez tweet *caption* and his [10-step Grok Bot article](https://x.com/0xCodez/status/2089676836619878567) are **his** packaging, not her manuscript. Split them below.

## What this talk is

She opens as an EM, not a model vendor: management skill and agent skill have a surprising amount in common. Light slides, mostly screen share. Theme: **how do you trust it** when you have years of taste and the agent keeps winging it, guessing, and announcing the smoking gun for the hundredth time.

The kitchen metaphor is said out loud here:

> More like a chef now. Head chef of a restaurant. You are not cooking every dish. There is a line, there are sous-chefs, there are stations. Your job is to design the kitchen.

â€œI almost never look at code anymoreâ€ is not abdication. She moved the check from her eyes into architecture + CI + verification. The 600+ Dune PRs are the construction cost.

## Maven chapter map

| Time | Chapter | What she does |
|------|---------|----------------|
| 00:00 | Intro | Netflix EM â†’ Meta React Compiler â†’ Cursor / Grok Bot. Still on React core. |
| 00:04 | Trust curve | Hand-drawn. Not scientific. Y = agents you can leave, not agents you can spawn. |
| 00:08 | Verification + feature maps | First skill: **control glass**. Then a map so the agent knows what the product *is*. |
| 00:16 | pstack | Skills so agents stop hallucinating a process. Named after Gary Tanâ€™s gstack; no relation. |
| 00:20 | Evals | Unit tests for skills. Blinded. Cross-model judge. Loop to a 10. |
| 00:26 | Cloud / Benny | Local eyes â†’ cloud computer. Benny repros Slack bugs; sometimes the fix is already on main. |
| 00:32 | Organic architecture | Vibe-coded greenfield is the danger. Big-company problems are now everyoneâ€™s. |
| 00:38 | PR size | No line cap. Atomic history. A 40k-line merge is still a failure. |
| 00:41 | Dune + CI | Shortest path = correct path. Four layers of force. Human review is the worst layer. |
| 00:50 | Tokens / ROI | She has lab tokens. Do not copy the spend. Hire a person vs make the repo agent-safe. |
| 00:56 | PMs + close | Grok Bot is the non-engineer Cursor moment. PMs ship; she approves. |

## Trust curve (as drawn)

Vertical axis: how many agents you can **trust in parallel**. Horizontal: time. Three stages she named:

1. **Watch.** One or a few. You read every output. You keep typing instructions. Screenshot the trace, paste the error, repeat. You are the conveyor belt.
2. **Cloud parallel.** Environment is set. The same loop runs without you in the chair. â€œIf you set the environment up, the investment pays huge dividends.â€
3. **Auto-merge.** She woke to ~20 PRs on main and reviewed the already-landed branch. Contents were good.

Load-bearing line: if you cannot trust **one** agentâ€™s output, you cannot run a hundred. Same as an EM who does not trust the team â€” you spend the day looking over shoulders.

There is **no shortcut up this curve**. â€œThis is about the level of trust you have in your own agents.â€ Stage-1 people who spawn 100 cloud agents waste tokens and pay for it.

Claims from the talk (hers): ~1000 PRs last month; ~800 by day 12 of the then-current month; ~20 overnight auto-merges; 600+ PRs to install Dune; HTX recap also quotes ~3000 across five months.

## Verification is the first skill, not codegen

Week one at Cursor: perf work for a release in seven days. Brand-new codebase. She screenshots Chrome traces. The agent says â€œprobably thisâ€ with total confidence. She applies it. Wrong.

That loop â€” instruct, receive, **you** build, it fails, you paste the error â€” is why parallelism never starts. The human is the 3-minute egg (see [Loops You Can Trust](loops-you-can-trust.md)).

**control glass** was the first skill she wrote. â€œGlassâ€ is the internal name for Cursorâ€™s agent window. The skill is markdown that teaches CDP and Appleâ€™s simulator-control tools: launch the app, click, screenshot, read the console. She says the code is not interesting; your agent can write it. The idea is: **give the agent the same eyes you have.**

Verification does not guarantee *good* code. It does let the agent write code that **works**. That is a large step for trust.

Then the agent could drive the product and still had no idea what the product *was*. Slack: â€œleft sidebar jankâ€ plus a screenshot of `???`. Without a map it clicks at random.

**Feature map** (user-facing catalog). She scrolled the live files; full capture: [feature-maps.md](feature-maps.md).

- Feature name and where it lives (and children)
- How a user reaches it
- Keyboard shortcuts
- Selectors / DOM attributes the agent should grab (`data-component`, ARIA â€” â€œlike the attributesâ€)

Four H2s per file: Sub-features â†’ user POV â†’ Driving it with `control-glass` â†’ Gotchas. Shared **Driving conventions** on `features/README.md`. Sharpest rule: `wait-settle` is a short renderer wait, not â€œthe turn finished.â€

`/create-verification-skill` writes the skill + map. `/maintain-verification-skill` keeps it honest. Colin (host) asked how it stays current: **evals**.

Same talk, handwritten slide â€” **how do I trust my agents more?** Three levers: verification, high-quality skills (pstack), agent-friendly architecture (greenfield vs brownfield). Evals annotated on the first two.

## Evals (the part the essays barely show)

In her head, an eval is a **unit test for a skill**.

1. A coordinator agent writes a rubric (what â€œgoodâ€ means).
2. Many subagents run the skill on organic-looking tasks.
3. Directory names are sanitized so they do **not** know they are being scored. Agents detect evals and change behavior â€” same as a salesperson who is suddenly polite when the manager sits in.
4. A judge from **another model family** scores, so the first model does not grade its own homework.
5. If it is not a 10, `/loop` and keep going.

Skill maintenance is hard. It needs taste and a good **backseat driver** â€” the pair-programming instinct that asks â€œwhy did you do it that way?â€

## Benny, on the recording

Cloud agent. Takes an internal bug report, boots its own computer, launches Cursor, drives the app with the verify skill, tries to hit the broken state. Overlay: **runs Cursor in** (the cloud). Frame: [benny-line.md](benny-line.md).

Live Slack (`#glass-oncall-assistant` â†’ `#issues-glass`): tyson reports panel focus reopening a blank Apps sidebar (video attached). Benny replies ðŸ¸ **Reproduced but already fixed on main** â€” â€œreproduced on the prior commit, gone on the fix.â€ `[view cloud agent]` is in the message. No competing PR. They needed a new build. An hour of sitting with an agent, gone. She frames the win as a **team** level-up, not a personal flex.

Do not skip to a hundred Bennys from stage 1.

## Organic architecture (why greenfield is the trap)

â€œBig-company problems are now everyoneâ€™s problems.â€

At Meta, tens of thousands of engineers in one repo. Lots of talent. Quality still bad. **Human slop existed before AI slop.** Enterprises built frameworks, conventions, guardrails, and intern-proof permissions for that reason.

Paradox: a **legacy** codebase with those rails is often *safer* to hand to agents. A **vibe-coded greenfield** has none.

Grok Bot itself: stood up extremely fast. Prototype, vibe-coded, humans not reading. Agents then solve each task the most convenient way. Over time you get a codebase you cannot understand â€” she calls it **organic architecture** (written 18 Jul: [organic-architecture.md](organic-architecture.md)). The agent may still â€œunderstandâ€ it. What it understands is a maze optimized for shortcuts.

That is why Dune cost 600+ PRs. See [dune-method.md](dune-method.md).

## Dune details she only says here

The written page she scrolled is now in [dune-method.md](dune-method.md). Spoken extras:

- Think â€œNext.js for Electron, designed for agents to write.â€
- Feature colocation; main vs renderer; CI dependency graph; ban `useEffect`; **ban comments**.
- Comment ban is not aesthetics. Agents write â€œhistoricalâ€ comments that are wrong for the current code â€” e.g. â€œLauren said never do thisâ€ when she only said â€œthis PR is bad, fix that part.â€ The context dies. The fragment fossilizes as a house rule.
- Principle: agents love shortcuts, so **make the shortest path the best path.**
- **Contract:** agents copy the nearest pattern, edit the open file, take the path that compiles, will not delete unseen callers, and will violate an invariant if the prompt says so. Those are design inputs.
- **Five rules** on the page. **Five public nouns** in Glass (Feature, Entrypoints / Transcript cards, Client, Host, package boundary). `sand/dune` never imports `sand/src`.
- **Pretext Virt** PR stream: one virtualization migration split into ~16 atomic PRs (`composer:`, `recital:`, `rules:`), some red, one closed.

### Four layers of force (the portable table)

| Layer | What | Hardness |
|-------|------|----------|
| 1 | Codebase structure | Hardest â€” you cannot violate it |
| 2 | CI / lint / compiler | Hard â€” the build stops |
| 3 | Rules, skills, style guides, AI review | Soft â€” forgotten |
| 4 | A human saying â€œplease donâ€™tâ€ on the PR | **Worst** |

If all you have is layer 3, the codebase becoming junk is a matter of time. Every time you are stuck writing the same review comment, treat it as a **smell**: can this be a lint, a CI fail, or deleted by structure?

Rust gets a nod: a mean compiler means a human does not have to go check.

PR policy from 00:38: no fixed line cap. Ask agents to **split**. History must stay a tool for context, rollback, and locating defects. A 40,000-line PR that merges is still a failure.

## Tokens (she answers the obvious objection)

Audience: you work at an AI lab, tokens are free, can a normal company do this?

She does not dodge. She has unlimited-feeling tokens. **Do not copy her spend.**

Reframe from cost to ROI. The refactor is expensive up front. If you are heading into a world where agents write the code, you want a light codebase, not a 10,000-engineer org. The leadership question:

> Do I hire someone to do this, or do I spend tokens so even a naive agent can do good work in this repo?

Pre-agents, building the framework, refactoring it, and verifying it herself would have taken she-does-not-know-how-many years. Her salary is not cheap.

Same day as the talk, Grok 4.6 shipped at 4.5 prices. She reads Cursor / xAI as hunting a **costâ€“intelligence sweet spot**, not the biggest model.

## Grok Bot as the non-engineer Cursor moment

Before Grok Bot, Cursor was an editor and a CLI â€” power-user tools. Grok Bot looks like iMessage. Named bots. Personalities. A team.

PMs at her company are already shipping: â€œI found a bug, I fixed it, can you look?â€ She reviews. It is clean. Approve. That is Dune working: **hard constraints let non-specialists contribute at a high bar.**

Constraint creates freedom. That is the close.

## What the 0xCodez caption adds (not her manuscript)

The tweet text attributes these lines to her. They match the workshopâ€™s *shape* (named bots, manager stance, 24/7) but they are not in the TANREN/XiaoHu chapter notes as verbatim. Treat as **attributed, not transcribed**:

- 10â€“20 Grok Bot agents
- ~90% of routine automated
- a **Chief of Staff** agent that knows the other bots and manages them

His linked [10-step article](https://x.com/0xCodez/status/2089676836619878567) is a product tutorial (install, charter, connect tools, login handoff, record-once, routines, specialists, group chat, reversibility line, weekly prune). Useful for Grok Bot mechanics. It is not pstack and it is not a first-party essay. Kitchen drafts that steal the *pattern*: [outer-loop.md](outer-loop.md).

**MTS product demo** ([YT A63sedG-p5Q](https://www.youtube.com/watch?v=A63sedG-p5Q), ~29m) is a different recording from this workshop: live named bots + cadence routines + cost–intelligence talk. Steal routine shapes into [outer-loop.md](outer-loop.md); spend bias into [spend-and-cloud.md](spend-and-cloud.md). Do not treat it as a second install checklist.

## How this sits on the essays

| Written | What the talk adds live |
|---------|-------------------------|
| [deepcoding](deepcoding.md) | Organic architecture = Agony Pyramid at repo scale |
| [Coding is Dead](coding-is-dead.md) | Head chef / kitchen said out loud; factory must grow is now a drawn trust curve |
| [How I Use Cursor](how-i-use-cursor.md) | control glass week-1 story; Glass = agent window; pstack named after gstack |
| [Loops You Can Trust](loops-you-can-trust.md) | Benny â€œalready fixed on mainâ€; evals as unit tests; blinded scoring |
| [pstack guide Pt. 1](pstack-guide-pt1.md) | Feature map fields named; PMs shipping; no shortcut; token/ROI honesty |
| [feature-maps.md](feature-maps.md) | The files she scrolled + the trust slide |
| [dune-method.md](dune-method.md) | Full contract, five rules, five nouns, Pretext Virt PR slice |

## Workspace implications from *this* talk

- Watch the curve. One trusted loop before a fleet. She said there is no shortcut.
- Build eyes first (`control-<app>` + Feature Map). Codegen second. The mapâ€™s contract is [feature-maps.md](feature-maps.md): four H2s, attributes as API, `wait-settle` â‰  turn-done.
- Greenfield without rails is the expensive path. She paid 600 PRs to leave it. The written contract is [dune-method.md](dune-method.md).
- Layer 4 comments are a smell. Second time you type it, it becomes CI (rule 5: exceptions are architecture changes).
- Do not copy lab token spend. Spend to make a naive agent safe, or hire â€” pick one.
- Talk to one Chief; specialists own domains. Group gets an **objective**, not your pre-split task list.
- Weekly: did the routine run, was it right, would you miss it if you killed it?
- You design the kitchen. You do not plate every dish.
