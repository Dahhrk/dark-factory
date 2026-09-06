# Spend, cloud, Bugbot, Origin

Account and forge notes that sit beside pstack. Distilled from Pt. 1, workshop token honesty, and playbook forge rules.

## Cloud Agents

- Runtime: bots **coordinate**, cloud agents **work**, laptop closed ([four-loops.md](four-loops.md), [pstack-guide-pt1.md](pstack-guide-pt1.md))
- Do **not** scale with local worktree farms (~10 agent ceiling, disk)  
- Snapshot an environment that can install deps, run the app, record video  
- First build slow; later runs from snapshot  
- **Self-Hosted Machines** (Cursor, Sep 2026): agent loop stays in Cursor; tools can run on **My Machines** (`agent worker start`) or sandbox pools (Modal, E2B, Lambda, …). Moves **compute**, not model billing. Solo default: My Machines if needed; skip AWS/Modal pools until trust + spend allow. Docs: [cursor.com/blog/self-hosted-machines](https://cursor.com/blog/self-hosted-machines).

## Spend

Workshop token honesty: lab-feeling pools are not a template. **Do not copy the spend.** Set an **on-demand spend cap** before Autopilot. Reframe cost as ROI: hire someone vs make the repo naive-agent-safe. Cost–intelligence sweet spot, not biggest model.

Two pools (individual plans): **Cursor Models** (Grok / Composer family) and **Other Models** (Claude / GPT / …). When Other Models is empty, stay on Cursor Models + local Agent. Self-host does **not** refill Other Models.

**When On-Demand / Other Models cap hits:** stop new Cloud Agents that need that pool; day encode local; raise cap only for one named predicate; log a `decisions.tsv` spend row; Autopilot stays off.

pstack can spawn several frontier agents per task — use when a plausible diff is not enough. Mechanical swarm → fast code model in `pstack-models.mdc`. Daytime / empty Other Models → prefer Cursor Models / `inherit-parent`.

### Cost–intelligence (SELF-REPORTED)

Public MTS product demo cited Cursorbench-style numbers: a fast Cursor-family model in the same quality band as a max frontier judge at roughly **~1/6 the $/task** (speaker claim — not an audited ledger). Use it as a **bias toward Cursor Models for day work**, not as a license to spawn fleets. Workshop line still holds: hunt the sweet spot, do not copy lab spend. Source pointer: [YT A63sedG-p5Q](https://www.youtube.com/watch?v=A63sedG-p5Q) · workshop tokens in [workshop-grok-bot.md](workshop-grok-bot.md).

## Bugbot

- Soft layer 3 ([dune-method.md](dune-method.md) four layers)  
- Babysit: triage skeptically; fix real findings with proof in the owning PR; dismiss noise with disproof on the thread  
- Promote repeated dismissal patterns into shared rubric / CI ([encode-lessons-in-structure](https://github.com/cursor/plugins/blob/main/pstack/skills/principle-encode-lessons-in-structure/SKILL.md))  
- Kitchen bootstrap: `templates/product-bootstrap/BUGBOT.md`  

## Origin vs Graphite vs gh

Playbooks:

- **`gh`** = default  
- **Origin** (`origin pr …`) if installed and resolves the repo  
- **Never require Graphite (`gt`)**  

Optional Graphite/Origin for stacks is fine on your machine; pstack must not assume `gt`.

## GitHub product wiring

Per product remote: Bugbot enabled, branch protection that needs green checks, merge queue optional. Shipping trusts forge merge state, not a screenshot of green dots.

## Related

- [pr-workflow.md](pr-workflow.md)  
- [setup-everything.md](setup-everything.md) Gate 0  
- [workshop-grok-bot.md](workshop-grok-bot.md) tokens chapter  
