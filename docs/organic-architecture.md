# Organic architecture

Source: [x.com/poteto/status/2078527882499150286](https://x.com/poteto/status/2078527882499150286) — note tweet, **18 Jul 2026**. Quoted later by the gardener thread ([20 Aug](https://x.com/poteto/status/2090546476464451907)). Spoken again in the [12 Aug workshop](workshop-grok-bot.md).

This is the written thesis behind [dune-method.md](dune-method.md). “Whatever grew” is the failure mode. The best rules are in the code, not in `AGENTS.md`. The workshop page states the same idea as a **contributor context model**: make the locally obvious change the globally correct one.

## How codebases used to hold together

Good codebases have always had strong foundations and constraints. These files go here. This kind of code goes there.

Two ways that held:

1. **Cater to the lowest-common-denominator developer** — conventional frameworks and languages. The rails are in the stack.
2. **A style guide enforced by code review** — humans saying please-don’t on the PR.

## Infinite monkeys obsolete the style guide

Agents are an infinite number of monkeys with keyboards. That **obsoletes (2)**. You cannot review your way to a house style when the volume is agent-scale. Layer 4 from the workshop (a human on the PR) is already dead as an enforcement strategy. She wrote that here first, on 18 July.

Codebases **designed for agents** need **hard constraints** so that even the **dumbest agent (and pilot)** can contribute meaningfully. Pilot = the non-engineer pointing the agent — PM, designer, self-taught Excel-macros path from [thousand-gardens.md](thousand-gardens.md). The chaos must be tamed.

## Invest accordingly

> Refactoring your codebase and choosing a tech stack with strong type systems / compiler diagnostics has far greater impact than `AGENTS.md` and tweaking your skills.

Hard constraints and well thought-out architecture guide agents to do the **right thing by default**.

> The best rules are in your code.

That is why Rust got a nod in the workshop, why she would change stacks for CDP/simulator driveability, why Dune cost 600+ PRs, and why `/create-verification-skill` must emit a CLI, not more markdown. Skills are layer 3. They rot. Types, compilers, directory layout, and CI do not.

Organic architecture is what you get when you skip the invest: vibe-coded greenfield, each task solved the convenient way, a maze the agent still “understands” and you do not.

## How this sits on the stack

| Date | Piece | Relation |
|------|--------|----------|
| 22 Jan | [deepcoding](deepcoding.md) | Grep the slop, emit the slop. Ban the pattern. |
| 18 Jul | **This** | Names organic architecture. Monkeys obsolete review. Best rules are in the code. |
| 12 Aug | [workshop](workshop-grok-bot.md) / [dune-method.md](dune-method.md) | Contract, five rules, five nouns, four layers. Same ranking. |
| 12 Aug | [feature maps](feature-maps.md) | Trust slide: architecture is the third lever (greenfield vs brownfield). |
| 20 Aug | [gardener thread](https://x.com/poteto/status/2090546476464451907) | Quotes this. Weed → rule so it cannot grow back. |
| 31 Aug | [pstack guide Pt. 1](pstack-guide-pt1.md) | Gardener / maintainer as her job title. |
| ~Sep | [thousand gardens](thousand-gardens.md) | Magic beans + English as PL. This post is the trellis. |

## Workspace implications from *this* post

- Do not spend the week polishing `AGENTS.md` while the types are soggy. Refactor and pick a mean compiler first.
- Style-guide-plus-review does not survive agent volume. If a convention only lives in a comment, it is already lost.
- Hard constraints are how **dumb** agents and **non-engineer** pilots ship without wrecking the garden.
- Invest in architecture the way she invested 600 PRs. That is the spend that compounds. Skills are cheap and forgotten.
