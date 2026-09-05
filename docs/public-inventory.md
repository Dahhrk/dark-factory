> Source archive — public posts/talks. This kitchen is inspired by that work; not affiliated.

# Public inventory (Laurenâ€™s installable stack)

What is public. Install from marketplace / GitHub. Do not vendor into this kitchen. Ceiling: [match-ceiling.md](match-ceiling.md).

**Full tables** (every playbook / skill / principle): [pstack-inventory.md](pstack-inventory.md). Map of global vs private: [global-vs-private.md](global-vs-private.md).

## Install these two first

```text
/add-plugin pstack
/add-plugin cursor-team-kit
/setup-pstack
```

| Plugin | What |
|--------|------|
| [pstack](https://github.com/cursor/plugins/tree/main/pstack) | Hers. `/poteto-mode` (= internal `/lauren-mode`), playbooks, principles, verify skills, Benny pack, Make Bot UI. |
| [cursor-team-kit](https://github.com/cursor/plugins/tree/main/cursor-team-kit) | Cursor eng. `deslop`, `control-ui`, `control-cli`, `verify-this`, CI/PR helpers. pstack expects these. |

Grok Bot: `grokbot://app/v1/plugin/add?id=9717366`.

## pstack â€” skills you type

Representative set (counts drift; README is source of truth):

| Skill | Job |
|-------|-----|
| `/poteto-mode` | Router â†’ playbook |
| `/setup-pstack` | Model map â†’ `~/.cursor/rules/pstack-models.mdc` |
| `/how` `/why` `/teach` `/recall` | Understand |
| `/architect` `/arena` `/swarm` `/interrogate` | Shape / parallel / review |
| `/tdd` `/blast-radius` `/no-comments` `/unslop` | Build hygiene |
| `/create-verification-skill` `/maintain-verification-skill` | Eyes + Feature Map |
| `/show-me-your-work` `/automate-me` `/figure-it-out` `/reflect` | Meta |
| `/make-bot-ui` | Local UI â†’ webhook â†’ bot â€” [make-bot-ui.md](make-bot-ui.md) |

**Playbooks / principles / agents:** full tables in [pstack-inventory.md](pstack-inventory.md). Ops distill: [pr-workflow.md](pr-workflow.md) Â· [evals.md](evals.md) Â· [visual-parity.md](visual-parity.md) Â· [automate-me.md](automate-me.md).

**Automations:** [Benny](https://github.com/cursor/plugins/tree/main/pstack/automations/benny) â€” `FOR_AGENTS.md` Â· [benny-line.md](benny-line.md).

## cursor-team-kit â€” skills

`deslop`, `control-ui`, `control-cli`, `verify-this`, `loop-on-ci`, `fix-ci`, `review-and-ship`, `make-pr-easy-to-review`, `new-branch-and-pr`, `get-pr-comments`, `run-smoke-tests`, `check-compiler-errors`, `fix-merge-conflicts`, `what-did-i-get-done`, `weekly-review`, `workflow-from-chats`, `thermo-nuclear-code-quality-review`, â€¦

## Noodle â€” cherry-pick design only

[poteto/noodle](https://github.com/poteto/noodle) is a **separate** Go orchestrator (pre-Cursor). Do **not** install it as her Cursor OS.

Optional on a **product** UI repo:

```bash
npx skills add poteto/noodle --skill frontend-design
npx skills add poteto/noodle --skill make-interfaces-feel-better
npx skills add poteto/noodle --skill interaction-design
```

See [design-notes.md](design-notes.md).

Other poteto repos: [github-sources.md](github-sources.md) (`how`, `brainmaxxing`, `verification-skill-example`, `benny-avatars`).

## Adjacent (not Lauren, useful)

Full notes: [adjacent-taste.md](adjacent-taste.md). Spend/forge: [spend-and-cloud.md](spend-and-cloud.md).

| Pack | Job |
|------|-----|
| [dmmulroy/anti-slop](https://github.com/dmmulroy/anti-slop) | Opinionated TS rules â€” she recommended it for gardener CI |
| [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) | Landing-page anti-template look |
| [emilkowalski/skills](https://github.com/emilkowalski/skills) | Motion / feel |
| korallis scaffolding / Factory no-use-effect | Community Dune-*method* fills |

## Cursor builtins she wires

`/loop`, `/goal`, Plan mode (she prefers prototypes), Design Mode, Cloud Agents, `/create-skill`.

## Not public

Dune framework source, org ESLint pack, control-glass original, Benny production config, Grok Bot fleet wiring. Recreate method: [dune-method.md](dune-method.md), [setup-everything.md](setup-everything.md).
