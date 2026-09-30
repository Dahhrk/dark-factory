# Improve AGENTS.md (default)

Rewrite AGENTS.md or CLAUDE.md with clear instruction blocks when the
file has drifted or a new repo needs its agent contract rewritten.
Agents apply automatically on drift or rewrite asks. Typing
`/improve-agents-md` is optional; the skill in `cursor-team-kit` names
the contract. Same shape as teach-to-skill.

## Route

1. Census every instruction. Tag as always-on, conditional default,
   opt-in skill, or dead.
2. Group into blocks with headings that name when each block fires.
3. Number short imperative sentences inside each block. One instruction
   per line.
4. Keep product-specific content. Move dead rules to Retired or delete
   with a commit note.
5. Verify every numbered instruction is actionable from the file alone.

## Fail closed

A rewrite that leaves a long flat list, contradicts itself, or templates
over product-specific content is not done. Prefer structure over more
rules.

## Autopilot stays off

Leave Autopilot and TRUST-NEXT off unless Dark has already greened them
with evidence. Do not invent Autopilot. Do not self-merge.

## Related

- [one-shot-task.md](one-shot-task.md)
- [teach-to-skill.md](teach-to-skill.md)
- [software-factory-gates.md](software-factory-gates.md)
- [design-control-loop.md](design-control-loop.md)
- [design-eng.md](design-eng.md)
- [harness-not-training.md](harness-not-training.md)
- plug-factory `cursor-team-kit/skills/improve-agents-md/SKILL.md`
