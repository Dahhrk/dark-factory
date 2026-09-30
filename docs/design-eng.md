# Design eng (default)

UI and animation taste across factory lanes. Agents apply automatically
for user-facing visuals or motion. Typing `/design-eng` is optional; the
skill in `cursor-team-kit` names the contract. Same shape as
figma-from-system for UI paths.

Companion skills: `review-animations` (pre-ship gate for any change with
animation) and `animation-vocabulary` (translates vague motion feedback
to concrete properties before design-eng runs).

## Route

1. UI / animation / interaction polish asks apply design-eng taste:
   layout, spacing, typography, color, motion, polish pass.
2. Vague motion feedback ("feels off", "janky") runs
   `animation-vocabulary` first, then design-eng.
3. Any change with animation runs `review-animations` before ship
   (timing, easing, purpose, reduced-motion, performance).
4. Prefer the existing design system and tokens. Do not invent colors,
   spacing, or type scales.

## Fail closed

Shipping UI or animation without a taste pass, or shipping animation
without `review-animations`, is not done when the change touches
user-facing visuals or motion.

## Autopilot stays off

Leave Autopilot and TRUST-NEXT off unless Dark has already greened them
with evidence. Do not invent Autopilot. Do not self-merge.

## Related

- [figma-from-system.md](figma-from-system.md)
- [one-shot-task.md](one-shot-task.md)
- [product-debate.md](product-debate.md)
- [software-factory-gates.md](software-factory-gates.md)
- [design-control-loop.md](design-control-loop.md)
- [improve-agents-md.md](improve-agents-md.md)
- plug-factory `cursor-team-kit/skills/design-eng/SKILL.md`
- plug-factory `cursor-team-kit/skills/review-animations/SKILL.md`
- plug-factory `cursor-team-kit/skills/animation-vocabulary/SKILL.md`
