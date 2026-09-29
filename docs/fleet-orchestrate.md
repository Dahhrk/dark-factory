# Fleet orchestrate (default + opt-in playbook)

Default when an ask spans multiple workstreams across factory lanes.
Agents start here automatically. Typing `/fleet-orchestrate` is
optional; the skill in `cursor-team-kit` names the contract. Same shape
as one-shot-task.

The poteto-mode playbook `playbooks/fleet-orchestrate.md` is **opt-in**
like greenfield-full-stack. The skill is the named default; the playbook
is the sequenced recipe when poteto-mode matches the same shape.

## Route

1. Name each workstream in plain nouns (frontend, backend, research,
   docs, CI, review, QA). No persona names.
2. Assign one specialist or unit per workstream with clear ownership.
3. Publish an ordered plate with merge holds. Parent waits on children.
4. Shared box filesystem is fine for artifacts; memory stays per-agent.
5. Verify before merge. Fresh `verify-this` evidence for falsifiable
   done and substance merge claims.

## Fail closed

Stop if ownership across workstreams cannot be named in plain words, or
if project constraints / Done means / Keep are missing.

## Autopilot stays off

Leave Autopilot and TRUST-NEXT off unless Dark has already greened them
with evidence. Do not invent Autopilot. Do not self-merge.

## Related

- [one-shot-task.md](one-shot-task.md)
- [greenfield-full-stack.md](greenfield-full-stack.md) (sibling opt-in playbook)
- [outcome-repeat-back.md](outcome-repeat-back.md)
- [results-not-homework.md](results-not-homework.md)
- plug-factory `cursor-team-kit/skills/fleet-orchestrate/SKILL.md`
- plug-factory `pstack/skills/poteto-mode/playbooks/fleet-orchestrate.md`
