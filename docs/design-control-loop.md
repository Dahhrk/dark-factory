# Design control loop (default)

Name sensor, controller, actuator, and disturbances before coding a new
agent loop, overnight automation, or feedback-driven system. Agents
apply automatically. Typing `/design-control-loop` is optional; the
skill in `cursor-team-kit` names the contract. Same shape as
leave-machine-clean.

## Route

1. New agent loop / overnight automation / feedback-driven system:
   design all four parts before implementation.
2. Sensor: data source, read frequency, observation shape, staleness
   bounds.
3. Controller: rules, thresholds, exit conditions; name state if any.
4. Actuator: every side effect; idempotent or guarded with rollback.
5. Disturbances: external events, detection, and recovery behavior.

## Fail closed

Writing loop code before naming all four parts, or omitting disturbances,
is not done. A loop that cannot detect or recover from its named
disturbances is not done.

## Autopilot stays off

Leave Autopilot and TRUST-NEXT off unless Dark has already greened them
with evidence. Do not invent Autopilot. Do not self-merge.

## Related

- [routine-by-default.md](routine-by-default.md)
- [fleet-orchestrate.md](fleet-orchestrate.md)
- [harness-not-training.md](harness-not-training.md)
- [software-factory-gates.md](software-factory-gates.md)
- [improve-agents-md.md](improve-agents-md.md)
- [one-shot-task.md](one-shot-task.md)
- plug-factory `cursor-team-kit/skills/design-control-loop/SKILL.md`
