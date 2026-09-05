> Source archive — public posts/talks. This kitchen is inspired by that work; not affiliated.

# Coding is Dead, Long Live Engineering

Source: [x.com/poteto/status/2014823103239749881](https://x.com/poteto/status/2014823103239749881) â€” article dated **23 Jan 2026** (article id `2014803131457273859`). The day-before companion is [deepcoding](deepcoding.md) (22 Jan) â€” she links it from this piece as the how behind â€œcontext engineer.â€ She had not joined Cursor yet (that is [end of March](how-i-use-cursor.md)). The later pieces operationalize this manifesto: [How I Use Cursor](how-i-use-cursor.md) (25 May) names the dark factory, [Loops You Can Trust](loops-you-can-trust.md) (24 Jun) maps it onto Grove, [pstack guide Pt. 1](pstack-guide-pt1.md) (31 Aug) is the verification recipe. The sharper public split (typing is solved; problem-solving is not) and the gardening metaphor are in [Let a thousand gardens bloom](thousand-gardens.md).

The kitchenâ€™s â€œfactoryâ€ language starts here. â€œDark factoryâ€ is a later line; **The Factory Must Grow** is the original.

## The two questions

She opens with the two arguments she keeps hearing:

1. **Is coding dead?** Software engineers lamenting that AI killed the activity they love.
2. **Is AI good enough at coding?** Senior engineers deriding AI because it did not yield good results when they tried it.

Her answer to both: coding is dead *if* you can build **Sufficiently Smart agents**. If you cannot, you will see little value shipping real production code with AI. That is a skill issue, not a model issue.

## Yes, coding is dead

She quotes Ryan Dahl ([@rough__sea](https://x.com/rough__sea/status/2013280952370573666)): the era of humans writing code is over; SWEs still have work, but writing syntax directly is not it.

The load-bearing sentence:

> The real question is not whether coding is dead, it's whether you're skilled enough to **context engineer** agents that write high quality code.

Models have already advanced past the old bottleneck. The bottleneck is **you, and everything around the model**:

- rules
- skills
- context
- internal search tools
- the way you prompt
- â€œand so much moreâ€

Given the right context, she says agents write **better code than she can, faster than she can**. She had watched one of the best engineers she knows teach Claude a deeply complex project and use it to solve a bug they had been stuck on for **more than a year**.

The next unlock (this is January, still Claude Code / Codex era): **a harness** around the agent so it truly works for you. Coding may be dead; **engineering is needed more than ever.**

She does not treat agents as replacements. She treats them as **cybernetically enhanced clones** of herself and her colleagues â€” clones you can give rules, skills, and context from the scars of designing systems and handwriting code.

> In 2026, not getting value out of AI is ackshually a skill issue.

Every pre-AI engineer (including her) has to learn new skills to stay relevant. Skills keep evolving. **Changing perspective is the first and most important step.**

She also points at Anthropicâ€™s [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

## The Factory Must Grow

[Factorio](https://factorio.com/) is the analogy. Credit: [@gweterings](https://x.com/gweterings).

Until very recently, SWEs wrote code by hand â€” mining iron, copper, and stone with pickaxes. Artisans assembling the machines that run everything.

AI is the invention of automation: a machine that can automate things that were not automatable. Instead of mining with pickaxes, you build an **agent rig that mines for you**. Instead of assembling machines by hand, you **build machines that make the machines**.

This is why this repo exists. The kitchen is the rig. Product work is the ore.

## Long live engineering

Factorioâ€™s goal is to automate production so you do not have to do everything yourself. You still continuously **refactor, extend, and improve** systems so they run smoothly and scale. Sitting and watching the game play itself is not the fun. Nobody does that. You build drones, train tracks, send rockets to other planets, set up more robots.

You start thinking about **higher-level problems** because you are no longer stuck on implementation details. Mismanage the factory and you get an inefficient plant that continuously breaks down and requires intervention.

> This is what SWE has become. The only question is whether you will help the factory grow, or hang on to your pickaxe.

## How the later essays cash this check

| Date | Essay | What it adds on top of this |
|------|--------|-----------------------------|
| 22 Jan 2026 | [deepcoding](deepcoding.md) | The how: invert the Agony Pyramid; frontload context |
| 23 Jan 2026 | **This** | Perspective: context engineering is the job; factory must grow |
| 25 May 2026 | How I Use Cursor | She converts to Cursor; pstack launch; â€œdark factoryâ€; do not parallelize untrusted agents |
| 24 Jun 2026 | Loops You Can Trust | Grove breakfast factory; verification is the 3-minute egg; Benny can stop the line |
| 12 Aug 2026 | [Feature maps](feature-maps.md) (workshop files) | What the machine looks like on disk: four H2s + driving conventions |
| 31 Aug 2026 | pstack guide Pt. 1 | The machine that makes the machines: control CLI + Feature Map + cloud agents |

January is still â€œbuild a harness around Claude Code or Codex.â€ By May the harness is pstack inside Cursor. By August the harness is a **CLI the agent runs**, not more markdown. The Factorio move stays the same: stop mining, grow the factory.

## What this essay is not

- Not a PR-count post. No 1000 / 2000 claim.
- Not a Cursor product essay. She is still talking CC / Codex.
- Not a verification recipe. â€œContextâ€ here is still rules, skills, search, prompting â€” the later essays harden that into a driveable CLI and hard CI.

## Workspace implications from *this* essay

- Identity shift first: you are the person who grows the factory, not the person who must type every line.
- If an agent run was useless, treat it as a missing harness (rules, skills, tools, context), not as proof the model is a toy.
- Do not sit and watch. Refactor the kitchen when the plant breaks down.
- The later â€œdark factoryâ€ line is only legal after verification is trusted. This essay names the direction; it does not authorize Autopilot on day one.
