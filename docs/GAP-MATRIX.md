# Gap matrix — Lauren public/private vs ours

Audit date: **3 Sep 2026** (refreshed after Control-Glass #8 land + trust toggles). Labels per [evidence-standard.md](evidence-standard.md). Interactive board: Cursor canvas `lauren-match-research.canvas.tsx`.

**Priority:** P0 = human click/decide · P1 = encode in structure · P2 = later · — = closed/ok · Never = do not chase.

| Capability | Her public | Her private | Ours | Gap | Pri |
|------------|------------|-------------|------|-----|-----|
| Router / rigor pack | pstack `/poteto-mode` | `/lauren-mode` (private) | pstack + models + factory rule (**VERIFIED**) | None | — |
| Personal mode | `/automate-me` | her internal mode | `/brooklyn-mode` exists (**VERIFIED**) | Not eval'd — fine for now | P2 |
| Eyes: control CLI | Atlas families / Pt.1 | `control-glass` on Glass (CDP) | `control-glass.mjs` Playwright daemon (**VERIFIED**) | Missing press/eval/console/network/trace/feature-flag/`--dry-run`; OK for 1-button app | P2 |
| Feature Map | four-H2 contract | ~12 Glass files (**SELF-REPORTED**) | 2 files home + mark-ready (**VERIFIED**) | Shape yes; substance tiny — need 3–5 features; Looks still soft PNG read | P1 |
| Daily maintain | `/maintain-verification-skill` | daily routine / Dr Eggbot | Cursor Automation **Active** (**VERIFIED** UI) | First maintain outcome not yet in `decisions.tsv` | P0 |
| Dune rule 1 blessed path | five rules doc | `sand/dune` | `new-feature.mjs` scaffold (**VERIFIED**) | OK for current size | — |
| Dune rule 2 forbidden deps | — | dependency graph CI | `check-boundaries` + probe (**VERIFIED**) | Trivially green with 1 feature; no app/framework split yet | P1 |
| Dune rule 3 one writer | — | Client/Host nouns | prose only in `dune.md` | Not mechanised | P2 |
| Dune footgun bans | anti-slop | ban `useEffect`, comments, `any` | `dune-footguns` + oxlint `any` + anti-slop on **main** (**VERIFIED** #8) | Escape hatch = architecture PR; keep | — |
| Soft review / Bugbot | BUGBOT.md pattern | Bugbot on Glass | `cursor[bot]` on #8 + #2 (**VERIFIED**) | Proven | — |
| Authors ≠ certifiers | babysit / shipping playbooks | fresh Cloud verifier | Written in docs; CODEOWNERS present | Required reviews **null**; #8 self-merged after Bugbot — largest method gap | P1 |
| Narrow PRs | opening-a-pr playbook | Pretext Virt slice | PRs mostly small (**VERIFIED**) | Some merges before review fixes; cleanup PRs | — |
| Decision ledger | `/show-me-your-work` | decisions TSV | `audit/decisions.tsv` + kitchen CI row gate (**VERIFIED**) | Habit still thin on busy days | P1 |
| Evals | eval playbook / blinded | unit tests for skills | none (**VERIFIED** absent) | `docs/evals.md` is theory only | P2 |
| Cloud runtime | Cloud Agents docs | 24/7 laptop closed | `environment.json`; Build **Success** + $200 cap (**VERIFIED**) | Ready for overnight | — |
| Outer loop → queue | Grok routines / Make Bot UI | Slack/X farmers feed aim | grokbot-fleet + **8** bots (**VERIFIED** roster) | Zero bot-written inbox rows yet | P0 |
| Benny | pstack pack | live `#issues-glass` | staged off fail-closed (**VERIFIED**) | Correctly gated on Slack | P2 |
| Overnight | autonomous-run playbook | ~20 auto-merges/night (**SELF-REPORTED**) | never run (**VERIFIED** absent) | The gate everything else waits on | P0 |
| Autopilot | `autopilot-full` / `stack` playbooks | Full Autopilot daily | SETUP-STATUS **BLOCKED**; banners → TRUST-NEXT | Docs gated; do not enable | P1 |
| Design proof | visual-parity + Design Mode | image diff to zero | visual-parity + anti-ai-ui + DESIGN.md (**VERIFIED**) | Soft tropes (3-card / cream+terracotta) still prose; Design Mode unused | P1 |
| Kitchen / product split | essays vs Grok repo | — | VISIBILITY + PRIVATE + kitchen-ci (**VERIFIED**) | Solid | — |
| Spend / PR volume | do not copy lab spend | lab tokens + 1k–2k PRs/mo (**SELF-REPORTED**) | spend cap **$200** (**VERIFIED**) | Never chase her volume or spend | Never |

## Counts

| Pri | n |
|-----|---|
| P0 | 3 |
| P1 | 6 |
| P2 | 5 |
| — | 7 |
| Never | 1 |
| **Total** | **22** |

## Next mechanical encodes (UI trust → auto-merge later)

Not more bots. Ordered:

1. Extend `check-anti-ai-ui.mjs` for cream/terracotta/serif + 3-card hero (already in rule prose).
2. Feature Map Looks ↔ visual-parity baseline contract (CI fails orphan Looks recipes).
3. Enforce CODEOWNERS + 1 review + conversation resolution, **then** `allow_auto_merge` — never before overnight evidence.

See: [TRUST-NEXT.md](TRUST-NEXT.md) · [SETUP-STATUS.md](SETUP-STATUS.md) · [match-ceiling.md](match-ceiling.md)

## Related

- [match-ceiling.md](match-ceiling.md) · [her-system-map.md](her-system-map.md) · [SELF-IMPROVE.md](SELF-IMPROVE.md) · [TRUST-NEXT.md](TRUST-NEXT.md) · [SETUP-STATUS.md](SETUP-STATUS.md)
