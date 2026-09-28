# Figma from system (default)

Default for every `ui:yes` / Figma ask across factory lanes. Agents start
here automatically. Typing `/figma-from-system` is optional; the skill in
`cursor-team-kit` names the contract. Same shape as one-shot-task and
orwell-prose.

## Route

1. Confirm an existing design system (tokens, components, patterns).
2. Confirm one approved keyframe for the ask.
3. Confirm Figma access (Figma MCP or the lane's Figma tooling).
4. Expand the full end-to-end flow in Figma from that system and keyframe.
5. Prove visual parity. Capture evidence.
6. Get a look from the frontend workstream before encode.
7. Only then implement UI against the Figma source of truth.

## Fail closed

Stop and report. Do not invent a design system. Do not invent a keyframe.
Do not implement UI when any gate is missing: no design system, no
approved keyframe, or no Figma access.

## Autopilot stays off

Leave Autopilot and TRUST-NEXT off unless Dark has already greened them
with evidence. Do not invent Autopilot. Do not self-merge.

## Related

- [one-shot-task.md](one-shot-task.md)
- [orwell-prose.md](orwell-prose.md)
- [product-debate.md](product-debate.md)
- plug-factory `cursor-team-kit/skills/figma-from-system/SKILL.md`
