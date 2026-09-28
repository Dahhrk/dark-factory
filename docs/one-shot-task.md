# One-shot task (default)

Default entry for every non-trivial ask across factory lanes. Agents start
here automatically. Typing `/one-shot-task` is optional; the skill in
`cursor-team-kit` names the contract.

## Route

| Ask shape | Action |
|-----------|--------|
| Vague (one-liner, missing Done means / Keep) | `/poteto-prompt` → `/poteto-mode` |
| Structured (goal + Done means + Keep) | `/poteto-mode` directly |
| Until-X / run-until-done on Cursor | Autonomous run + Cursor built-in `/loop` with a checkable exit |
| Non-Cursor lanes | Verifiable units + re-invoke; no fake `/loop` |

## Done means ≡ done_when

Kitchen handoffs use `done_when` on the [task contract](harness/task-contract.md).
Poteto prompts use **Done means**. Same idea: a falsifiable check against a
real artifact (command, UI flow, stored value, profile). See
[prompting-model.md](prompting-model.md) for the compose shape.

Do not invent Done means when language gates are missing. Run factory-init
(then seat-kit) so gates exist, then derive the predicate from them.

## Chain

```text
factory-init → seat-kit → poteto (prompt when vague, mode when structured)
```

1. `/factory-init` onboards the repo (AGENTS, close-loop, gates).
2. `/seat-kit` vendors language kit gates and installs the kit plugin.
3. Work defaults to one-shot: poteto-prompt and/or poteto-mode as above.

## Autopilot stays off

Poteto Autopilot-full / Autopilot-stack playbooks are queue/stack programs
inside poteto-mode. They are not factory overnight Autopilot and do not
green [TRUST-NEXT.md](TRUST-NEXT.md). Leave Autopilot and TRUST-NEXT off
unless Dark has already greened them with evidence. Do not invent Autopilot.

## Related

- [prompting-model.md](prompting-model.md)
- [orwell-prose.md](orwell-prose.md) (default writing system for prose surfaces)
- [figma-from-system.md](figma-from-system.md) (default for ui:yes / Figma work)
- [product-debate.md](product-debate.md) (default for new product ideas before encode)
- [harness/task-contract.md](harness/task-contract.md)
- [factory-keep-up.md](factory-keep-up.md)
- plug-factory `cursor-team-kit/skills/one-shot-task/SKILL.md`
