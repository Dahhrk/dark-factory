# Software factory gates (default)

Four gates before implementation on non-trivial multi-file work across
factory lanes. Agents apply automatically. Typing
`/software-factory-gates` is optional; the skill in `cursor-team-kit`
names the contract. Same shape as one-shot-task. Trivial one-liners and
single-file fixes skip it.

## Route

1. Product: state the user problem, behavior change, and done condition
   in plain words. No code. Get explicit approval before gate 2.
2. Architecture: name components, boundaries, data flow, and risks.
   Prefer a list or short diagram. Get explicit approval before gate 3.
3. Program design: name types, interfaces, and function signatures that
   change. Still no implementation. Get explicit approval before gate 4.
4. Build order: vertical slices that ship end-to-end. Implement only
   after gate 4 is approved.

## Fail closed

Bundling gates, skipping ahead, or writing implementation code before
all four approvals is not done. Trivial one-liners may skip; when unsure,
run the gates.

## Autopilot stays off

Leave Autopilot and TRUST-NEXT off unless Dark has already greened them
with evidence. Do not invent Autopilot. Do not self-merge.

## Related

- [one-shot-task.md](one-shot-task.md)
- [outcome-repeat-back.md](outcome-repeat-back.md)
- [product-debate.md](product-debate.md)
- [design-control-loop.md](design-control-loop.md)
- [design-eng.md](design-eng.md)
- [improve-agents-md.md](improve-agents-md.md)
- [harness-not-training.md](harness-not-training.md)
- plug-factory `cursor-team-kit/skills/software-factory-gates/SKILL.md`
