# What you can match (and what you cannot)

Goal: a kitchen where agents are trustworthy enough that volume becomes possible. Inspired by public pstack / Cursor agent-factory talks. Speaker claim of **~1,000–2,000 PRs/month** is **SELF-REPORTED** late-stage output after Dune, verify, cloud spend, and merge rights. Not a plugin install. Labels: [evidence-standard.md](evidence-standard.md). Why volume emerges: [why-throughput.md](why-throughput.md). Architecture: [nine-layers.md](nine-layers.md).

## Three tiers

| Tier | What | How you get it |
|------|------|----------------|
| **Exact (public)** | pstack `/poteto-mode`, playbooks, `/create-verification-skill`, `/maintain-verification-skill`, Make Bot UI, cursor-team-kit (`deslop`, `control-ui`, `control-cli`), Autopilot + `/goal` `/loop` `/swarm`, noodle design cherry-picks, jacobgold model map via `/setup-pstack` | Install marketplace plugins. Auto-updates. Do not fork. |
| **Same idea, your wiring** | Feature Map for *your* app, Benny Slack pack, Grok Bot outer-loop routines, Bugbot, daily maintain automation, Dune CI (ban footguns, folder isolation, anti-slop), cloud agent snapshot | You configure on a **product** repo. Kitchen docs the recipes. |
| **Never** | Dune Electron source, private personal-mode internals (public name is `/poteto-mode`), original control-glass, live Benny YAML / secrets, third-party Grok Bot fleets, org gardener access, audited PR ledger | Recreate the **method**. Do not wait for a leak. |

`/poteto-mode`, Feature Map, Dune (method), Benny, Autopilot, Bugbot, `control-glass`, and `verify-glass` are public pstack-ecosystem names. Keep them so agents hit the real tools.

## Trust curve (do not skip)

From the [workshop](workshop-grok-bot.md). Y-axis is agents you can **leave**, not agents you can spawn.

1. **Watch one.** You are the conveyor belt.
2. **One complete loop.** Repro → fix → prove on the real artifact → small PR. Verify skill exists.
3. **Parallel.** Isolated writers. Local worktree for a few; **Cloud Agents** to scale.
4. **Night shift.** Feature Map + control CLI + hard CI + Autopilot. This is the overnight tier.
5. **Dark factory.** Hundreds — only after verification is a **repo capability**, not a chat habit.

If you cannot trust **one** agent, a hundred wastes tokens and ships weeds.

## What published volume claims actually required

- Hundreds of architecture PRs to install Dune (shortest path = correct path)
- `control-glass` + Feature Map so agents close their own loop
- Cloud agents 24/7; bots coordinate, cloud works
- Gardener role: smell the PR stream, weed → rule
- Lab-scale tokens — **do not copy the spend**; set a cap

Plugins alone will not produce those numbers. The kitchen recreates the **operating system**. Throughput is your product’s maturity × your gardener time × your cloud budget.

## How this kitchen relates

| Repo | Job |
|------|-----|
| **dark-factory** (this) | Kitchen: docs, queue, overnight contract, model rule. Not a product app. |
| **Your product repo** | Where verify CLI, Feature Map, Dune CI, Benny, Autopilot live. |
| **agent-native-kit** | Optional gap-fill pack from another session. Do **not** rebuild it here unless you ask. Prefer recipes in [setup-everything.md](setup-everything.md) + [dune-method.md](dune-method.md). |

## Related

- [evidence-standard.md](evidence-standard.md) — claim labels + headline math
- [nine-layers.md](nine-layers.md) · [why-throughput.md](why-throughput.md)
- [global-vs-private.md](global-vs-private.md) — what installs everywhere vs per product
- [setup-everything.md](setup-everything.md) — ordered install
- [pstack-inventory.md](pstack-inventory.md) · [public-inventory.md](public-inventory.md) — public lists
- [pr-workflow.md](pr-workflow.md) · [evals.md](evals.md) · [spend-and-cloud.md](spend-and-cloud.md)
- [four-loops.md](four-loops.md) — the slogan
- [feature-maps.md](feature-maps.md) — eyes
- [dune-method.md](dune-method.md) — hard constraints
- [source-register.md](source-register.md) · [timeline.md](timeline.md)
