# Refactor first (default)

Hard rule for non-trivial behavior changes in existing modules across
factory lanes. Agents apply automatically. Typing `/refactor-first` is
optional; the skill in `cursor-team-kit` names the contract. Same shape
as software-factory-gates and one-shot-task.

## Route

1. Refactor first: behavior-preserving cleanup that makes room for the
   change. Tests green (or equivalent verify). No behavior change in this
   step.
2. Implement second: build the new behavior on the clean structure from
   step 1.
3. Never combine both in one unverifiable diff.

## Constraints

Treat these as constraints, not a checklist. When two collide, pick
lowest future cost for this repo and say so in the commit.

- Separation of concerns
- Encapsulation and information hiding
- High cohesion, loose coupling
- DRY for knowledge (not coincidental similarity)
- One owning module per domain; never duplicate logic
- No business logic in rendering layers

## Fail closed

Jumping straight to the behavior change while leaving mess in place is
not done. A single unverifiable diff that mixes refactor and feature is
not done.

## Autopilot stays off

Leave Autopilot and TRUST-NEXT off unless Dark has already greened them
with evidence. Do not invent Autopilot. Do not self-merge.

## Related

- [one-shot-task.md](one-shot-task.md)
- [software-factory-gates.md](software-factory-gates.md)
- [outcome-repeat-back.md](outcome-repeat-back.md)
- [design-control-loop.md](design-control-loop.md)
- [improve-agents-md.md](improve-agents-md.md)
- plug-factory `cursor-team-kit/skills/refactor-first/SKILL.md`
