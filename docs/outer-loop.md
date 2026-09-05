# Outer loop — Grok Bot routine drafts

Skill = how. Routine = when. Test as a one-off before scheduling. Narrow matchers only. Approval required before posting back to Slack/X or changing production.

Paste these into Grok Bot after you connect Slack / X / GitHub. They write into this kitchen: `intake/QUEUE.md`.

Part 1 says: once `/control-<app>` is good, put it in these routines. Auto-fix only after repro is trustworthy. Optional: [Dr Eggbot](https://x.ai/bot/93gOz3op1UQdBdbekQFLK) creates the engineer bot that owns verify + daily maintain.

Bots **coordinate**. They `spawn a cloud agent` so the bot computer stays free. Do not burn the CoS context window on coding.

Attitude ([three-virtues.md](three-virtues.md)): if you did the errand twice, ask “how can a bot do this instead of me?” before you do it a third time.

Workshop pattern ([workshop-grok-bot.md](workshop-grok-bot.md)): talk to a **Chief of Staff** bot. Specialists own domains (separate memory, separate accountability). Give a group chat an **objective**, not a pre-split task list. Approval line is **reversibility** — drafts and research finish alone; anything the outside world sees, or that moves money, parks for you.

Product-demo pattern (public MTS interview, [YT A63sedG-p5Q](https://www.youtube.com/watch?v=A63sedG-p5Q)): named specialist bots + **cadence routines** (needs-you sweep, evening PR shepherd, morning briefing). Chat can surface PR cards; heavy work still leaves the bot via Cloud Agents. UX metaphor is iMessage-like — personalities, not a dashboard. Steal the **routine shapes** below; keep our roster in [BOTS.md](../automations/grok-bot/BOTS.md).

0xCodez’s [10-step article](https://x.com/0xCodez/status/2089676836619878567) is a Grok Bot product tutorial, not a first-party manuscript. Steal the charter shape (own / good looks like / never do without asking), not the marketing.

## Routine: Slack bug farmer

- **When:** A message in your bug/feedback channel contains a screenshot, video, or the word `repro` / `broken` / `regression`.
- **Do:** Save source link, quote, and attachments. Classify as `bug` vs `unclear`. Draft a queue row with a hypothesized feature path. Do **not** file a public reply.
- **Write:** One `inbox` row in `intake/QUEUE.md`.
- **If source missing:** Report failure. Do not invent a ticket.

## Routine: X / user-complaint farmer

- **When:** Weekdays 08:00 local, or when you @mention the bot with a tweet URL.
- **Do:** Pull the last 24h of relevant mentions/replies you asked it to watch. Deduplicate. Skip praise and off-topic.
- **Write:** At most five `inbox` rows. Each needs a URL and a one-line user-visible failure.

## Routine: GitHub issue / PR comment farmer

- **When:** New issue labeled `bug` or a review comment containing `broken` / `regression`.
- **Do:** Capture repo, number, author, and the exact claim. Check whether a queue row already exists.
- **Write:** `inbox` row with `source: github`. Never comment on the issue unless asked.

## Routine: needs-you sweep

- **When:** Morning (e.g. with standup) and optionally mid-afternoon.
- **Do:** Scan parked items that need a human: approval, secrets, spend-cap, merge/kill, Slack reply. List only what blocks agents.
- **Write:** A short **Attention** block at the top of `intake/QUEUE.md` (or a `decisions.tsv` wake row). Do not invent urgency.
- **Keep:** Fail closed without the channel/tool; do not unlock Benny from this alone.

## Routine: evening PR shepherd

- **When:** Evening local (before bed / overnight window).
- **Do:** List open draft PRs for products you trust agents on. For each: CI status, whether `Done means` evidence exists, whether a fresh verifier (not the author agent) should look. Prefer `spawn a cloud agent` for babysit/fix — bot stays coordinator.
- **Write:** At most one queue row per stuck PR (`playbook hint: investigation` or babysit). Never merge. Never Autopilot-full until [TRUST-NEXT.md](TRUST-NEXT.md) is green.
- **Keep:** Authors do not certify themselves.

## Routine: morning briefing

- **When:** Morning local (pair with Daily Standup on Harvey).
- **Do:** Digest overnight: new queue rows, draft PRs, failed CI, Attention leftovers. One paragraph + bullets. Point at evidence paths (`control-*` artifacts, Actions URLs).
- **Write:** Standup note or top of `intake/QUEUE.md`. Spot-check one claim by hand when overnight ran.

## Routine: weekly prune

- **When:** Friday 16:00 local.
- **Do:** Ask each bot: every routine it ran, how often, what it produced, what it skipped or guessed, what it parked that you never answered. Which routine is least useful, and why.
- **Write:** A short note at the top of `intake/QUEUE.md` or `audit/decisions.tsv`. Spot-check one output per routine by hand. Kill anything you would not miss.
- **Keep:** Do not let the bot grade itself as the only evidence.

## Routine: idea spark (low priority)

- **When:** Sunday 18:00 local.
- **Do:** Propose at most three feature sparks from the week's intake themes.
- **Write:** `spark` rows. Never implement.

## Queue row template

```markdown
### [inbox] short title
- source:
- playbook hint: bug-fix | feature | investigation | perf
- goal:
- done means:
- keep:
- owner: none
```

## Related

- [BOTS.md](../automations/grok-bot/BOTS.md) · [make-bot-ui.md](make-bot-ui.md) · [spend-and-cloud.md](spend-and-cloud.md) · [TRUST-NEXT.md](TRUST-NEXT.md) · [workshop-grok-bot.md](workshop-grok-bot.md)
