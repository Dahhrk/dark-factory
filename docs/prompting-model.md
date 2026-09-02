# Prompting model

**VERIFIED** in pstack guide + playbooks: state the **outcome** and the **check**. Let the workflow choose the ceremony.

## Shape

```text
/poteto-mode <what you observed or want>
Done means <command, UI flow, stored value, or profile that can pass or fail>.
Keep <invariants that must not change>.
```

Optional hard fences: scope, risk, permissions, “don’t ask before committing,” decision-log path.

| Weak | Stronger |
|------|----------|
| “make this better” | “remove the duplicate notification; reproduce first; same retry path produces exactly one notification” |

## What the router picks

Investigation, bug fix, feature, refactor, perf/hillclimb, prototype, visual parity, skill authoring, eval, autonomous run, orchestrate, babysit, shipping, Autopilot, … — see [pstack-inventory.md](pstack-inventory.md).

## What not to do

Do **not** write “first `/how`, then `/architect`, then `/arena`, then `/interrogate`.” That duplicates the router, often in the wrong order, and makes the workflow brittle. Factory OS: [operating-manual.md](operating-manual.md).

Say `new task` when the subject changes. Mode is sticky.

## Parallelism kinds (don’t mash into one button)

| Kind | Skill | Job |
|------|-------|-----|
| Coverage | `/swarm` | Different slices → one report |
| Solution | `/arena` | Several attempts → graft best |
| Adversarial | `/interrogate` | Independent critics → one verdict |

## Related

- [nine-layers.md](nine-layers.md)  
- [orchestration.md](orchestration.md) — brief fields when you *are* the coordinator  
- [principles.md](principles.md) — mid-run steer by name  
