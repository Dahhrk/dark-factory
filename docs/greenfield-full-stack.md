# Greenfield full-stack (playbook recipe)

Opt-in poteto-mode playbook for greenfield full-stack one-shots. Agents do
**not** start here automatically. Match via poteto-mode when the ask is a
greenfield app/product from scratch, a full-stack one-shot, or a new product
with backend and frontend in one run. Typing a skill slash command is not
required; the playbook lives in plug-factory pstack
`skills/poteto-mode/playbooks/greenfield-full-stack.md`.

This is not a Default. It does not replace Feature for single-layer work. It
does not invent a vendor router. It sequences existing setup-pstack /
pstack-models roles only.

## Route

| Ask shape | Action |
|-----------|--------|
| Greenfield full-stack one-shot (backend + frontend in one run) | poteto-mode → Greenfield full-stack playbook |
| Single-layer feature / change | poteto-mode → Feature playbook (unchanged) |
| Vague / missing Done means / Keep | `/poteto-prompt` first, then poteto-mode |

## Sequence

1. Fail closed: read `AGENTS.md` (or `CLAUDE.md` if that is the project
   constraint file). Require at least one project agent constraints file and
   a clear Done means / Keep path. Missing either → STOP and report. Do not
   invent constraints. Do not encode.
2. Plan on hardest-tasks / judgment-and-prose models. Name data shapes.
3. Backend encode via Feature playbook steps on the **feature** model.
4. Frontend encode via Feature playbook steps on the **feature** model. When
   `ui:yes`, figma-from-system still applies as the existing default.
5. Adversarial: `interrogate`, then prove on the real surface
   (principle-prove-it-works / control-ui or control-cli).
6. Docs on judgment-and-prose with orwell-prose + technical-writing.
7. Opening a PR.

## Autopilot stays off

Leave Autopilot and TRUST-NEXT off unless Dark has already greened them
with evidence. Do not invent Autopilot. Do not self-merge.

## Related

- [one-shot-task.md](one-shot-task.md) (default entry; this recipe is opt-in)
- [orwell-prose.md](orwell-prose.md)
- [figma-from-system.md](figma-from-system.md)
- [product-debate.md](product-debate.md)
- plug-factory `pstack/skills/poteto-mode/playbooks/greenfield-full-stack.md`
- [fleet-orchestrate.md](fleet-orchestrate.md) (sibling opt-in multi-workstream playbook)
