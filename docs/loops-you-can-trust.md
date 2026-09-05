> Source archive — public posts/talks. This kitchen is inspired by that work; not affiliated.

# Loops You Can Trust

Source: [x.com/poteto/status/2069824386283319343](https://x.com/poteto/status/2069824386283319343) â€” article dated **24 Jun 2026**. Full text recovered via X article API / [bittide cache](https://bittide.aicompass.dev/article/243275b7-708c-4307-92f3-17c348f9ceb1).

This is the management essay. It cash-checks the January Factorio manifesto ([Coding is Dead](coding-is-dead.md)) with Groveâ€™s breakfast factory. The August [workshop](workshop-grok-bot.md) is the same material spoken (Benny â€œalready fixed on main,â€ evals as unit tests). [pstack guide Pt. 1](pstack-guide-pt1.md) (31 Aug) is the verification recipe that sits on top of it. She also cites [How I Use Cursor](https://x.com/poteto/status/2058975157503570132) as the previous post (â€œthe bottleneck is verificationâ€).

Open-sourced pack from the article: [pstack/automations/benny](https://github.com/cursor/plugins/tree/main/pstack/automations/benny) â€” start at [`FOR_AGENTS.md`](https://github.com/cursor/plugins/blob/main/pstack/automations/benny/FOR_AGENTS.md). Setup notes: [benny-line.md](benny-line.md).

Book she tells you to read: Andy Grove, [*High Output Management*](https://www.amazon.com/dp/0679762884).

## The three-minute egg

Groveâ€™s breakfast factory: every plate is egg + toast + coffee, served together, warm, consistent, at a profit. The egg takes three minutes. Faster toast does not plate sooner.

She maps that onto agents:

| Grove question | Her agent question |
|----------------|--------------------|
| Whatâ€™s the limiting step? | Reproduction + verification (still mostly human) |
| How much work in flight? | Not â€œhow many agentsâ€ â€” how many loops you can *leave* |
| Where do you inspect quality? | Every station can stop the line |
| Where is managerial leverage? | Write the skill/tool once; every future agent inherits it |

Agents are brilliant new hires with amnesia. Same questions she used as an EM: bottleneck, parallelism, where bugs reach users, where her attention has leverage.

**Do not start loops until agents can verify.** Naive loops compound slop and dump more work on humans who already have less bandwidth.

## The Limiting Step â€” origin of `/control-glass`

Day two at Cursor. Manager DM: Agents Window (â€œglassâ€) perf is bad, launches in a few days, she knows React.

She did not know the codebase. Chrome DevTools on Electron. Memory so high the app hit the **4GB Electron limit** and crashed mid-trace. Agents confidently hallucinated; her BS meter kept firing.

Two paths: stay in the â€œpermanent underclassâ€ doing it by hand, or give agents the same signals she uses.

April 2025 she had built a toy **React Compiler MCP**. MCP was the wrong medium. The idea was right: compiler diagnostics, lints, static analysis â€” *agents should see what I see*.

`/control-glass` was that idea applied to Glass: launch a dev build with CDP, then click, type, a11y tree, screenshots, video, CPU/network throttle, CPU profiles, heap snapshots. The Feature Map that sits on that CLI â€” four H2s, Driving conventions, sidebar as the worked example â€” is [feature-maps.md](feature-maps.md).

Then the loop exists: **repro â†’ profile â†’ change â†’ remeasure**. Every future agent inherits it. Verification is the long pole. Shorten that and *you* (the scarce resource) can run multiple loops.

## Building trust â€” worktrees, then leverage

Cursor dev builds shared ports, processes, and user data. Two agents on one build collided. She added **worktree isolation**: own checkout, build, ports, browser state, Cursor instance.

Throughput went up. Quality did not. Parallelization produced more PRs to review and discard. That is the trap: more agents without playbooks = more rework.

Groveâ€™s **managerial leverage**: train and tool the team once. She never set out to build pstack. She turned recurring failure modes into skills:

- reproduce before touching code
- several hypotheses, eliminate them
- failing test first
- blast radius outside the diff
- compare alternatives before choosing
- capture the real product before and after

pstack is those scars. Playbooks that can run for hours and leave decision logs and tests. The job of an engineer is now: watch where agents fail, then encode the fix as a skill, a lint, or an architecture where the right path is the only path.

She quotes her own Jun 12 note: start with nothing â€” no plugins, no AGENTS.md. Prompt, observe failure modes, codify repeats. Better: lint rules or structure that make the mistake impossible.

## What if loops ran themselves â€” Benny

Even with pstack she still had to notice the problem, launch an agent, and watch. Entropy outran her.

Cursor Automations (March) was the missing pump. Maintenance was the first line: Slack reports already existed and split cleanly.

```
Slack report
    â†’ triage
    â†’ [human can reject]
    â†’ repro (hit the broken state TWICE, video)
    â†’ [human can reject]
    â†’ fix (smallest proven change, draft PR)
```

**Triage.** Download screenshots/video. Map a vague message onto a feature. Reporter version. Dupes. Code + recent history. Clear bug â†’ ticket + handoff. Or: expected behavior, stop.

**Repro.** Waits for the triage marker. Real Cursor build **in the cloud**, own computer. Follow the reporterâ€™s path. Broken state **twice**. Screenshots + video. That evidence is the only input the fixer is allowed.

**Human gate.** Thread stays open. Correct or reject the repro. No objection + clear root cause â†’ fixer gets the **warm build** and the evidence.

**Fix.** Test when cheap. Smallest change it can prove. Before/after. Draft PR. Or: too risky, stop.

**Also:** if a PR is already open, repro-automation runs before/after on *that* PR instead of competing. â€œNice, another PR already fixes this.â€ Live frame: ðŸ¸ **Reproduced but already fixed on main** â€” prior commit broken, fix commit clean, no new PR ([benny-line.md](benny-line.md)).

Artifacts in Slack (screenshots, videos) so she can tell in seconds whether it fixed the *right thing*. Then PR review is just the code, because she already trusts behavior.

**Every stage can stop the line.** Those stops are successes: they keep expensive bad work out of the next station. Slack is the control room. She no longer carries context between stages.

The open-source reference is Benny. Point an agent at `FOR_AGENTS.md`. Draft PRs only. Never merge. Fail closed if the control adapter or feature map is missing.

## Trust but verify

Same demand in chat and in automations: **show me your work.**

Not enough: â€œI fixed it.â€
Enough: failing+passing test, before/after video, trace, heap snapshot, screenshot. If it merged, **run it again on main**.

Artifacts beat a plausible explanation. She does not have to replay the run.

When she is in the loop she reads **thinking blocks** â€” that is where failure modes show. If a script can do it deterministically, use the script. Agents are for fuzzy work: hypotheses, interpreting evidence, when to escalate.

Long runs: `/show-me-your-work` â€” append-only TSV (decision, why, evidence, result), then a **different model family** reviews the log against the transcript.

**Build the Lever** (migration example): do not throw hundreds of agents at a rewrite and then verify hundreds of diffs. First unit by hand â†’ codemod + checker the reviewer can rerun. When an agent keeps doing something by hand, make it write the tool it wishes it had.

## StyleX â€” catch defects at the lowest-value stage

Shared UI library â†’ StyleX. PR ~**400k lines**, much of it generated evidence. Deterministic scripts compared computed SCSS vs StyleX. Generated CSS **30k â†’ ~6k**. Captured states hit visual parity.

Then they dogfooded. Pixel-perfect still hid z-index bugs, global class consumers, `!important` fights. The giant PR made every discovery expensive.

Next loop, trained by that pain:

- **one leaf component per day**
- warning-sign scan first: unclear ownership, dynamic class assembly, relational selectors, stacking, transforms, specificity fights
- before deleting a class, search behavioral / test / automation / consumer deps
- computed styles before/after across **light, dark, high-contrast**
- hover, focus, active, disabled, component-specific states
- record interactions, pair screenshots, **another agent inspects the media**
- failed build or parity check **ends the run**

Small PRs with lots of video. A failed check on one component is cheap. A regression after a giant land is expensive.

## Head chef, not a hundred interns

â€œA hundred agents waiting for prompts and dumping slop PRs into your lap is keeping us busier than ever.â€

She stopped asking how many agents she could run. She asks:

- what evidence does the loop produce?
- where can it fail fast?
- which failures make the system safer?
- where does my time have the highest leverage?
- can I leave it and understand what happened when I come back?

### Five steps (end of the article)

1. Do the work by hand first, so you know what good looks like.
2. Give agents the same tools and signals you use.
3. Make every stage prove its work and stop when it misses the bar.
4. Read the transcripts; turn recurring failures into tools, skills, or evals.
5. Make loops autonomous only after they earn trust.

Then: Cursor Automations + pstack. And read Grove.
