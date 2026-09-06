# PR workflow (babysit ΓåÆ ship ΓåÆ Autopilot)

Source: pstack playbooks [`opening-a-pr`](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/playbooks/opening-a-pr.md), [`babysit`](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/playbooks/babysit.md), [`shipping`](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/playbooks/shipping.md), [`autopilot-full`](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/playbooks/autopilot-full.md), [`autopilot-stack`](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/playbooks/autopilot-stack.md). Workshop + [four-loops.md](four-loops.md). Architecture: [nine-layers.md](nine-layers.md) ┬╖ [orchestration.md](orchestration.md).

This is how you contribute across **many PRs / many projects** without reading every line.

## Lifecycle states

```text
INTAKE ΓåÆ TRIAGED ΓåÆ CONTRACTED ΓåÆ ISOLATED
  ΓåÆ REPRODUCED or BASELINED ΓåÆ IMPLEMENTED ΓåÆ SELF_VERIFIED
  ΓåÆ PR_OPEN ΓåÆ REVIEWED ΓåÆ INDEPENDENTLY_VERIFIED
  ΓåÆ MERGE_READY ΓåÆ MERGED ΓåÆ MONITORED
```

Exception states: `BLOCKED` ┬╖ `SUPERSEDED` ┬╖ `STALE_SHA` ┬╖ `ABANDONED` ┬╖ `REVERTED` ┬╖ `NEEDS_HUMAN_PRODUCT_DECISION` ┬╖ `NEEDS_IRREVERSIBLE_APPROVAL`.

Benny auto-fixes stay **draft** until a stronger gate; planned pstack work opens **ready** ([benny-line.md](benny-line.md)).

Fleet babysit vocabulary (Working / Watching CLEAN ladder / Ready ≠ merge): [fleet-board.md](fleet-board.md). Inspired by public Engineer Bot marketplace rules — adapt into Tony/Harvey; do not install as CoS.

## Opening a PR (end of every build playbook)

- Worktree off main; one writer per branch  
- Commit liberally; rebase into small ordered commits before PR  
- Before commit: `/deslop` (team-kit), `/no-comments`  
- Titles: Conventional Commits `type(scope): subject` ΓÇö imperative, no trailing period  
- Body sections (drop if empty): **Why**, **Scope**, **Tradeoffs**, **Blast Radius**, **Verification** — not “Summary / Test plan” boilerplate. Attach screenshots/video when they prove a claim. **Visual proof:** real product chrome / hosted artifact you (or Riddler) open yourself; captions and mocks ≠ proof; put media in the PR body, not committed into the branch ([fleet-board.md](fleet-board.md))  
- Forge: `gh` default; Prefer **Origin** if `origin` resolves the repo. **Never require Graphite (`gt`)**  
- Prefer **five narrow PRs** to one fat one. Stacks = base-branch chain (child targets parent)  
- **One cloud agent per PR stream** — steer/reply for CI and re-proof; fresh launch only for a new task or rewrite ([fleet-board.md](fleet-board.md))  
- Open **ready**, never draft (cloud tools often default draft — set `draft: false` / `gh pr ready`)  
- Opening a PR does **not** start babysit. Finish the stack, then babysit once. **Board-first:** queue/board row before dig or launch.  

## Babysit (merge-ready, does **not** merge)

Owns the merge frontier. Modes: `drive` (loop to green), `background`, `threads-only` (Bugbot comments), `check` (one status pass).

Hard rules from real failures:

1. Declare mode + forge **before** polling  
2. Work the **lowest unmerged** PR only until it merges (most expensive mistake: fixing upstack while frontier is red)  
3. **One** babysitter per stack  
4. **Never** mutate stack topology (no rebase/retarget/force-push from babysit) except one sanctioned follow-up PR when the owning PR already merged  
5. Order: **conflicts ΓåÆ review threads ΓåÆ CI**. Batch fixes into one push wave  
6. Trust forge merge state, not a pretty green checklist. Watcher under `/loop`. **Never merge** unless user asked land/ship ΓåÆ route to Shipping  
7. Classify CI before retrigger: flake earns **one** fresh build; stale base needs rebase report, not retries  
8. **Bugbot skeptical** ΓÇö verify against code; fix in owning PR; dismiss noise with disproof; from third pass lean dismiss documented patterns (still escalate security/auth/billing/data)  
9. Stop at the humanΓÇÖs line (owner approval = wait)  

Glass **fsd** ([feature-maps.md](feature-maps.md)) is the in-app twin: babysit the branchΓÇÖs PR.

## Shipping (lands what is safe)

Babysit makes green. Shipping decides **safe**.

1. Independent verify **per PR** (cloud agent, `control-ui`/`control-cli`, parent vs head) ΓåÆ `PASS` / `PASS+NOTES` / `FAIL` posted on the PR. Author did not write the verdict  
2. Land only the **contiguous verified run from the bottom**; stop at first unverified  
3. Re-check patch-id / SHAs after rebase  
4. Prepare and squash-merge (or `--auto` merge-when-ready) **one** PR at a time from the bottom  
5. Recompute after every merge  
6. Stop at the ceiling; extending needs a new verify pass  

Green Γëá safe. CI green Γëá foreign verdict.

## Autopilot-full (independent queue)

- Operator names items they keep (the operator clicks)
- Explicit go ΓåÆ arm `/goal` for the program  
- **One cloud owner per PR**: build ΓåÆ proof ΓåÆ deslop ΓåÆ no-comments ΓåÆ rebase ΓåÆ babysit ΓåÆ **merge only after root swarm-verify**  
- True parallel; never stack independent work  
- Root audits ~every 30m; stuck lanes replaced; operator stop = zero writes  

## Autopilot-stack (coupled)

Same build/verify rigor; **you** land the linear stack (Shipping). Coordinator does not silently merge the whole chain without your landing protocol.

## Multi-project

| Global | Per project |
|--------|-------------|
| pstack playbooks + forge habits | `control-<app>` + Feature Map |
| Cloud Agents | That repoΓÇÖs CI / Dune |
| Queue aims which repo | Branch + PR in that remote |

Same playbooks; different eyes. See [match-ceiling.md](match-ceiling.md).

## Related

- [orchestration.md](orchestration.md) ΓÇö ledger + frontier for multi-day programs  
- [benny-line.md](benny-line.md) ΓÇö stop the line / already on main  
- [dune-method.md](dune-method.md) ΓÇö Pretext Virt atomic PR slice  
- [quality-ladder.md](quality-ladder.md) ΓÇö encode repeated review comments  
- [setup-everything.md](setup-everything.md) Gate 6  
- [spend-and-cloud.md](spend-and-cloud.md)
