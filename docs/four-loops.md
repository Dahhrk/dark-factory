# The four loops (1000-PR post)

Source: [x.com/poteto/status/2090141955695198633](https://x.com/poteto/status/2090141955695198633) — **19 Aug 2026**, quote-tweet of [Cursor’s cloud-agent release](https://x.com/cursor_ai/status/2090136956101414982). LinkedIn crosspost the same day. Speaker figures, not an audited ledger.

This is the slogan. The kitchen’s operating manual is a reconstruction of **these four bullets**. Later posts (Pt. 1, workshop, organic architecture) are what you must have *before* you copy the number.

## The claim

> I shipped 1000 PRs last month and am on track to doubling that this month, all thanks to cloud agents.

You can also launch cloud agents from **Grok Bot**. Cursor’s own post, which she is quoting: cloud agents pick up work from events, hold a goal until it is met, and stay on course through long sessions.

Pt. 1 (31 Aug) raises the same claim to **2,000 / month**. The workshop (12 Aug, recorded earlier) had ~1000 last month, ~800 by day 12, ~20 overnight. Same speaker, same month. Still not a ledger.

## The four bullets, in her words

### 1. pstack (inner rigor)

She built [pstack](https://github.com/cursor/plugins/tree/main/pstack) — her personal set of skills for **rigorous engineering and verification**. Inside their codebase it is `/lauren-mode`. In the public plugin it is `/poteto-mode`.

Not “more code.” Verification is in the same sentence as engineering. The router is the product.

### 2. Grok Bot routines (outer loop)

Routines farm context: bug reports on Slack, user complaints on X, new feature ideas. Grok Bot feeds her **“outer loop”**, where **she** thinks about what to point the factory at next.

She named the outer loop here. She also named the remaining human job: **aim**. The bots fill the pile. She chooses the target. Kitchen: `intake/QUEUE.md` + [outer-loop.md](outer-loop.md).

### 3. Full Autopilot (own, verify, ship)

Heavy use of `/goal`, `/loop`, and `/swarm` inside pstack to run the **Full Autopilot** playbook. Agents/bots **fully own, verify, and ship** a task from start to finish.

Three verbs. Own without verify is slop. Verify without ship is a stack that never lands. Ship without a fresh verifier is the author grading their own homework — later playbooks split babysit (never merges) from shipping (foreign verdict, then land).

### 4. Cloud (laptop closed)

Everything runs on cloud agents. Bots work 24/7 when she is asleep or the laptop is offline.

Pt. 1 later: do not scale this with a local worktree farm. Bots **coordinate** and `spawn a cloud agent`. The bot’s context and computer stay free.

## How the kitchen mapped this

| Her bullet | Kitchen loop |
|------------|----------------|
| Grok Bot farms Slack / X / ideas; she aims | Outer loop — you + routines → `intake/QUEUE.md` |
| pstack / `/poteto-mode` | Inner loop — playbook + evidence |
| `/goal` `/loop` `/swarm` + Full Autopilot | Overnight loop — predicate + `audit/decisions.tsv` |
| Cloud agents, laptop closed | Cloud runtime |

## What this post does not say (and later posts do)

- No verify CLI, no Feature Map, no “markdown is not enough.” That is [Pt. 1](pstack-guide-pt1.md), [feature-maps.md](feature-maps.md), and [new-to-pstack.md](new-to-pstack.md).
- No “do not start at Autopilot.” [How I Use Cursor](how-i-use-cursor.md) and the [workshop](workshop-grok-bot.md) trust curve: one agent you trust, then parallel, then night shift.
- No Dune / organic architecture. [18 Jul](organic-architecture.md) already said the best rules are in the code. The workshop page writes the [five-rule contract](dune-method.md). This post is the *output* of that invest.
- No token honesty. Workshop: do not copy lab spend.

Copy the four bullets after the trellis exists. Copying Autopilot onto a vibe-coded repo is how Grok Bot earned 600 cleanup PRs.

## Workspace implications from *this* post

- The number is not the method. The method is four loops, and she listed them in order: rigor pack → aim → Autopilot → cloud.
- You still choose what the factory points at. Routines that auto-implement skip the outer loop.
- Full Autopilot means own **and** verify **and** ship. Drop one verb and it is not her playbook.
- Cloud is the runtime, not a nicer laptop. If the lid has to stay open, you do not have loop 4.
- `/lauren-mode` and `/poteto-mode` are the same router. Do not wait for an internal fork.

Attitude that makes these four loops fire: [three-virtues.md](three-virtues.md).
