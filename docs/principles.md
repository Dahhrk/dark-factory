# Principles (steer mid-run by name)

Source: pstack `skills/principle-*/SKILL.md` (21). Indexed at `/poteto-mode` start. You steer by **saying the name** — do not paste the whole skill into chat.

Companion: [pstack-inventory.md](pstack-inventory.md) · [three-virtues.md](three-virtues.md).

## Core

| Name | One-line |
|------|----------|
| **laziness-protocol** | Smallest script/diff that does or proves the job — never a framework for a one-off. |
| **foundational-thinking** | Sequence work so foundations land before features that depend on them. |
| **redesign-from-first-principles** | When the current design fights the goal, rebuild from the real constraints — don’t patch forever. |
| **subtract-before-you-add** | Delete dead weight / stub refs first; build on the simpler base. |
| **minimize-reader-load** | Optimize for the next reader (agent or human): less noise, clearer path. |
| **outcome-oriented-execution** | Optimize for the checkable outcome, not activity or ceremony. |
| **experience-first** | User delight over implementation convenience; fewer polished features beat more rough ones. |
| **exhaust-the-design-space** | Novel UI/arch with no precedent → 2–3 competing prototypes before committing. |
| **build-the-lever** | Codemod / script / generator / shared skill — the rerunnable artifact beats hand edits. |

## Architecture

| Name | One-line |
|------|----------|
| **model-the-domain** | Name the real nouns; types and modules follow the domain, not the framework. |
| **boundary-discipline** | Validate at CLI/config/network edges; trust internal types; thin shell, pure core. |
| **type-system-discipline** | Illegal states unrepresentable; brand primitives; parse at boundaries; don’t lie to the compiler. |
| **make-operations-idempotent** | Safe to retry; same inputs → same durable effect. |
| **migrate-callers-then-delete-legacy-apis** | Move everyone off the old surface, then delete — no forever dual APIs. |
| **separate-before-serializing-shared-state** | Kill shared writers first; only then lock/serialize when one writer is a real invariant. |

## Verification

| Name | One-line |
|------|----------|
| **prove-it-works** | Runtime evidence on the real artifact — builds and self-reports are not done. |
| **fix-root-causes** | Reproduce → why until root; no nil-check silence; fix the pattern not one instance. |
| **sequence-verifiable-units** | Small units each ending green; stack commits/PRs so the story proves itself. |

## Delegation

| Name | One-line |
|------|----------|
| **guard-the-context-window** | Don’t dump the world into one prompt; isolate, summarize, hand off narrowly. |
| **never-block-on-the-human** | Keep moving under a written contract; escape hatch when truly stuck — don’t wait for chat. |

## Meta

| Name | One-line |
|------|----------|
| **encode-lessons-in-structure** | Same correction twice → lint / CI / type / skill, not more prose. |

## How to use

```text
prove it works
laziness protocol
subtract before you add
encode lessons in structure
separate before serializing shared state
```

Attitude layer (virtues, not principles): [three-virtues.md](three-virtues.md) — Wall-laziness, impatience, hubris.

Plugin tree wins if a skill renames; this page is a kitchen index, not a fork.
