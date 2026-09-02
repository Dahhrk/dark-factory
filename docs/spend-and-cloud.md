# Spend, cloud, Bugbot, Origin

Account and forge notes that sit beside pstack. Not a Lauren essay — distilled from Pt. 1, workshop token honesty, and playbook forge rules.

## Cloud Agents

- Her factory runtime: bots **coordinate**, cloud agents **work**, laptop closed ([four-loops.md](four-loops.md), [pstack-guide-pt1.md](pstack-guide-pt1.md))  
- Do **not** scale with local worktree farms (~10 agent ceiling, disk)  
- Snapshot an environment that can install deps, run the app, record video  
- First build slow; later runs from snapshot  

## Spend

Workshop: she has lab-feeling tokens. **Do not copy the spend.** Set an **on-demand spend cap** before Autopilot. Reframe cost as ROI: hire someone vs make the repo naive-agent-safe. Cost–intelligence sweet spot, not biggest model.

pstack can spawn several frontier agents per task — use when a plausible diff is not enough. Mechanical swarm → fast code model in `pstack-models.mdc`.

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
