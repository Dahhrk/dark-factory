# pstack AMA ops — factory operating patterns

Source (public): [@poteto X AMA](https://x.com/poteto/status/2098634643323142286) · scraped 2026-09-15 · full brief `/workspace/briefs/poteto-pstack-ama-2098634643323142286.md`.

Kitchen dump (Harvey intake, not upstream): encode **factory-ops patterns only** — not a transcript dump. Install skills from [pstack](https://github.com/cursor/plugins/tree/main/pstack), not from a kitchen fork. Complementary to [pstack-pt2-supervise.md](pstack-pt2-supervise.md) — **not** a second factory OS and **not** Autopilot unlock.

Thesis: Pt. 2 = supervise smarter agents. This recipe = **budget, role split, router defaults, and Keep boundaries** poteto clarified in the AMA. Use it when setting up models, choosing `/poteto-mode` vs skills, or when spend/compaction/auto-merge questions come up.

## When to invoke

Harvey (or you) says explicitly, or when ops questions match this table:

> Run `/setup-pstack` before burning tokens.  
> Composer trivial / Grok default / Fable hardest.  
> Trust compaction; don’t thrash threads for context rot.

| Use | Skip |
|-----|------|
| Token/budget pressure; defaults feel too hot | One-liner already covered by Feature Map |
| Choosing role → model map | Rewriting model maps silently without Tony |
| “Which skill do I call?” / auto router | Replacing Riddler / Stewie / TRUST-NEXT |
| Knowledge-work bots / eng-bot packaging | Treating poteto auto-merge as factory Keep |
| Improving pstack itself via evals | Greening Autopilot or overnight fleet |

## Steal (encode these; do not re-research)

| Pattern | What it is | Where it lands here | When |
|---------|------------|---------------------|------|
| **`/setup-pstack` for budget** | Pick models + reasoning levels that fit spend; poteto open to poor/rich-style presets later | First move when usage spikes; writes `~/.cursor/rules/pstack-models.mdc` | Before parallel waves; after invoice / cap pressure |
| **Models from Settings → Models** | Subagents spawn **only** from Cursor Settings → Models list; missing slugs → inherit-parent | Enable models in app before expecting `/setup-pstack` options | When setup shows inherit / missing roles |
| **Role split** | Composer → trivial/straightforward; Grok → everything else; Fable → hardest | Suggested map; Fable coordinator + Grok subagents = poteto’s own Grok Bot shape | Default heuristic after setup |
| **Start 0 / selective skills** | Observe failure modes before all-in; install pstack but use skills selectively | New desks / new products | Before sticky `/poteto-mode` everywhere |
| **`/poteto-mode` auto router** | Orchestrator picks playbook + skills; can omit `/figure-it-out`; should spawn `poteto-agent`s | Default entry for rigor / eng tasks | Non-trivial work |
| **Projects + auto-update** | Cursor Projects works with pstack; marketplace skills auto-update | Prefer marketplace install over forks | Plugin hygiene |
| **Trust compaction** | Cursor/Grok Bot compaction is “very very good” — don’t thrash threads for context rot | Long Control-Glass / kitchen / fleet chats | When tempted to start fresh for rot alone |
| **`/bro` not auto** | Restate skill is **not** automatically invoked | Call explicitly if needed | Noise / restatement |
| **Knowledge work → dr eggbot** | Eng bots that use pstack + cloud agents; marketplace/plugin path | [Dr Eggbot](https://x.ai/bot/93gOz3op1UQdBdbekQFLK) (AMA also posted t.co; kitchen uses known bot link) | Non-product eng bots / maintain packaging |
| **Improve via evals** | poteto-mode **eval playbook**; she uses pstack to build pstack | [evals.md](evals.md); skill changes need blinded runs | Before promoting skill/prompt edits |
| **Non-frontier OK** | e.g. Grok 4.6 high/xhigh coordinator + cheaper workhorse when budget constrained | `/setup-pstack` choices; not “frontier only” | Cap / invoice / poor preset |
| **Defaults may be too hot** | Poteto acknowledged Fable-5-1 max defaults may need tweaking | Prefer `/setup-pstack` over leaving max everywhere | Usage killed / spend worry |

## Already covered — do not duplicate

| AMA idea | Ours |
|----------|------|
| Supervise / indirect / architect+prototype | [pstack-pt2-supervise.md](pstack-pt2-supervise.md) |
| Verification foundation | Pt. 1 + Riddler → Gordon / Bugbot / Feature Maps |
| Router / playbooks | `/poteto-mode` + pstack playbooks |
| Author ≠ merger (factory) | Human plates; authors never merge on own verdict |
| Overnight / Autopilot | [TRUST-NEXT.md](TRUST-NEXT.md) only |
| Newcomer three commands | [new-to-pstack.md](new-to-pstack.md) |

## Skip forever

- Treat AMA (or poteto auto-merging Grok Bot PRs) as permission to enable Autopilot or skip TRUST-NEXT.
- Author merges on own verdict in this factory — **even if** poteto lets Grok Bot merge its own PRs.
- Silently rewrite `pstack-models.mdc` / Criminal maps in encode tasks — **Tony** owns `/setup-pstack` when models/spend allow.
- Vendor AMA transcript into kitchen as canonical skill text (link + patterns only).
- Put product Feature Maps or secrets in this kitchen.
- Assume `/bro` runs automatically; invent marketplace URLs when only a t.co was posted.

## Factory gap (models)

- **Box** rule `~/.cursor/rules/pstack-models.mdc` is currently all `inherit-parent` — does **not** match AMA Composer/Grok/Fable split.
- **Criminal** may already have a Lauren/jacobgold-style map from a prior `/setup-pstack`; still do not silently rewrite here.
- **Tony action:** run `/setup-pstack` (after enabling desired models in Cursor Settings → Models) when spend allows; prefer efficient defaults over Fable-max everywhere.

## Factory Keep

| Rule | Meaning |
|------|---------|
| NOT Autopilot unlock | AMA confidence ≠ green TRUST-NEXT |
| Author never merges on own verdict | Human plates even if upstream auto-merges |
| Human plates | You merge; agents draft |
| TRUST-NEXT still gates overnight | No overnight fleet until trust checklist is green |

## Decision

| Need | Reach for |
|------|-----------|
| Default align / build / verify | `/poteto-mode` + Feature Map |
| Token / model / budget setup | `/setup-pstack` (this recipe) |
| Noisy bug / supervise flow | [pstack-pt2-supervise.md](pstack-pt2-supervise.md) |
| Skill / prompt improvement | poteto-mode eval playbook · [evals.md](evals.md) |
| Knowledge-work eng bots | Dr Eggbot (link above) |
| Overnight / Autopilot | [TRUST-NEXT.md](TRUST-NEXT.md) only |

## Related

- [pstack-pt2-supervise.md](pstack-pt2-supervise.md)
- [public-inventory.md](public-inventory.md)
- [github-sources.md](github-sources.md)
- [adjacent-craft.md](adjacent-craft.md)
- [new-to-pstack.md](new-to-pstack.md)
- [pstack-inventory.md](pstack-inventory.md)
- [evals.md](evals.md)
- [TRUST-NEXT.md](TRUST-NEXT.md)
- [spend-and-cloud.md](spend-and-cloud.md)

## Source archive

- AMA parent: https://x.com/poteto/status/2098634643323142286
- Full scrape brief (box): `/workspace/briefs/poteto-pstack-ama-2098634643323142286.md`
- Raw JSON (box): `/workspace/briefs/poteto-ama-2098634643323142286-raw.json`
- Pt. 2 article: https://x.com/i/article/2094940651607715840
- Marketplace: https://cursor.com/marketplace/cursor/pstack
- Dr Eggbot (kitchen-known): https://x.ai/bot/93gOz3op1UQdBdbekQFLK
