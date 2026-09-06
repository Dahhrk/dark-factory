# Setup everything

Ordered path. Cap spend before Autopilot. Kitchen stays kitchen ΓÇö steps marked **product** run in the repo you name in `intake/QUEUE.md`.

Full ceiling: [match-ceiling.md](match-ceiling.md). Map: [global-vs-private.md](global-vs-private.md). Inventory: [pstack-inventory.md](pstack-inventory.md) ┬╖ [public-inventory.md](public-inventory.md). Ops: [pr-workflow.md](pr-workflow.md) ┬╖ [spend-and-cloud.md](spend-and-cloud.md).

## Gate 0 ΓÇö Account plumbing

**Done means:** cloud agents can run; you have a spend cap; Bugbot can see the product repo.

| Need | Why |
|------|-----|
| Cursor **Pro+ / Ultra** (solo) or **Teams** | Cloud agents + Autopilot burn past free pools. Check [Grok Bot / Cursor plans](https://cursor.com/docs) for current names. |
| **Cloud Agents ON** | 24/7 agents. Laptop closed. |
| **On-demand spend cap** | Do not copy lab spend ([workshop](workshop-grok-bot.md)). |
| **GitHub** + `gh` CLI | Ship PRs. |
| **Bugbot** on the product repo | Soft layer 3 ΓÇö still useful; hard CI is stronger. |
| Optional: **Slack**, **Linear**, **X**, **Graphite/Origin**, **Tailscale** | Benny / outer loop / stacks / Make Bot UI pages. |
| Models | From Cursor. No separate ΓÇ£Fable sub.ΓÇ¥ `/setup-pstack` picks what you can access. |

Machine: Cursor, Git, `gh`, your app runtime (Node/etc.).

## Gate 1 ΓÇö Plugins (once, then new chat)

In a Cursor chat (any workspace, then again on the product if needed):

```text
/add-plugin pstack
/add-plugin cursor-team-kit
/setup-pstack
```

Use the [jacobgold model map](https://github.com/cursor/plugins/blob/main/pstack/docs/guide/01-setup.md#pick-your-models) already seeded at `~/.cursor/rules/pstack-models.mdc`, or re-answer the wizard. **Start a new chat** after setup.

Grok Bot: install pstack via `grokbot://app/v1/plugin/add?id=9717366` (or marketplace equivalent).

**Done means:** `/poteto-mode` autocomplete works; Opt+Enter can pin Custom Mode; a new chat loads the model rule.

On **this kitchen**, if `/setup-pstack` offers `/create-verification-skill`, **say no**.

## Gate 2 ΓÇö Eyes on the product repo (**product**)

```text
/create-verification-skill
```

Must emit a real **CLI** (`control-<app>`) + `references/features/` with four H2s. Shape: [feature-maps.md](feature-maps.md), [verification-skill-example](https://github.com/poteto/verification-skill-example). Markdown-only is not enough.

Then schedule **daily**:

```text
/maintain-verification-skill
```

via Cursor cloud automation or Grok Bot / [Dr Eggbot](https://x.ai/bot/93gOz3op1UQdBdbekQFLK). Maintain ends `clean` | `changed` | `blocked`. Never edits product code to paper over a bug.

**Done means:** `control-*.mjs --help` works; one end-to-end drive produced screenshots/video; daily maintain is on.

Pin forever:

```text
/poteto-mode <goal>. use /control-<app> to verify. show screenshots or video as proof.
Done means <checkable>.
Keep <invariants>.
```

## Gate 3 ΓÇö Dune CI (**product**)

Encode the [five rules](dune-method.md). Minimum:

1. Forbidden imports fail CI (folder / layer boundaries).
2. One repeated footgun banned (`any`, comments-as-policy, restricted hooks ΓÇö **your** list).
3. Optional TS: [dmmulroy/anti-slop](https://github.com/dmmulroy/anti-slop) via `npx skills add dmmulroy/anti-slop --skill install-anti-slop`.
4. `BUGBOT.md` with the same bans for review bots.

Smell three times ΓåÆ red build. That is the gardener.

**Done means:** a deliberate illegal import (or banned pattern) fails CI on a throwaway branch.

## Gate 4 ΓÇö Design craft (optional, **product**)

Cherry-pick ΓÇö do **not** clone noodle as the OS ([github-sources.md](github-sources.md)):

```bash
npx skills add poteto/noodle --skill frontend-design
npx skills add poteto/noodle --skill make-interfaces-feel-better
npx skills add poteto/noodle --skill interaction-design
```

Use Design Mode + [design-notes.md](design-notes.md) ┬╖ [visual-parity.md](visual-parity.md). Adjacent packs: [adjacent-taste.md](adjacent-taste.md) · [adjacent-craft.md](adjacent-craft.md).

## Gate 5 ΓÇö Outer loop

Wire one intake path into `intake/QUEUE.md` (kitchen) or Linear (product):

- Grok Bot routines ΓÇö [outer-loop.md](outer-loop.md) ┬╖ optional [make-bot-ui.md](make-bot-ui.md)
- Or Benny after Gate 2 ΓÇö [benny-line.md](benny-line.md) (draft PRs only; fail closed if map missing)

**Done means:** one real Slack/X/GitHub signal becomes a queue row without you typing it.

## Gate 6 ΓÇö Overnight, then Autopilot

Only after Gates 2ΓÇô3:

```text
/poteto-mode im going to bed. <one task> in a fresh worktree or cloud agent.
done means <predicate>.
keep a decision log. don't ask me before committing.
/loop until done. if stuck, stop and write up why.
```

Then limited Autopilot-full (independent PRs) or Autopilot-stack (you land). Never author-agent merges on its own verdict. Playbooks: [pr-workflow.md](pr-workflow.md).

**Done means:** morning `/show-me-your-work` shows decision rows + evidence; you would merge the same PR by hand.

## Gate 7 ΓÇö Make it yours

```text
/automate-me
```

Personal `-mode` on top of pstack ([automate-me.md](automate-me.md)). Ours is `/brooklyn-mode`.

## Do not

- Scale with a local worktree farm (Pt. 1: use Cloud Agents).
- Start Autopilot on day one.
- Accept markdown-only verify.
- Fork pstack/noodle ΓÇ£to keep them updatedΓÇ¥ ΓÇö marketplace + `npx skills add` instead.
- Expect 1000 PRs from plugins alone.

## Related

- [new-to-pstack.md](new-to-pstack.md) ┬╖ [pstack-guide-pt1.md](pstack-guide-pt1.md) ┬╖ [operating-manual.md](operating-manual.md)
