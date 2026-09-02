# The three virtues of using Grok Bot well

Source: first-party post by @poteto. Full text pasted into this kitchen; a public status URL was not recovered. She is rewriting [Larry Wall’s three virtues of a programmer](https://thethreevirtues.com/) (Programming Perl) for Grok Bot.

This is the **attitude** layer on top of the [four loops](four-loops.md). pstack already has a different principle also named laziness — do not mix them up. See below.

## The three virtues (hers)

### Laziness

> The quality that makes you go to great effort to reduce overall energy expenditure. It makes you question “how can a bot do this instead of me?”

Wall’s first sentence, almost verbatim. His payoff was “write a labor-saving program and document it.” Hers is **delegate to a bot**. The great effort is the harness: routine, charter, verify skill, approval line. Cheap laziness is dumping the task into chat and staying the conveyor belt. Expensive laziness is one hour of scaffolding so you never do the click again.

Kitchen test: if you did the same errand twice this week, the next question is not “should I do it faster?” It is “how can a bot do this instead of me?” Then write the routine in [outer-loop.md](outer-loop.md).

### Impatience

> Instead of asking “should we do this?”, you use the bot to build it yourself and share a PR or feature flag.

Do not wait for a committee. Build it, hide it behind a flag, open the PR. That is how PMs ship under Dune ([workshop](workshop-grok-bot.md), [thousand-gardens.md](thousand-gardens.md)). Impatience without a flag or a hard constraint is vibe-coding to production ([deepcoding](deepcoding.md)). Impatience *with* a flag is how ordinary people enter engineering.

Kitchen test: the row is still `inbox` because someone has not blessed it. If the change is reversible, promote it, ship a flag, let the gardeners smell the PR.

### Hubris

> The quality that makes you own the outcome even when you didn’t make it with your own hands.

Wall: write programs others won’t want to say bad things about. Hers: you still own the auto-merged branch. “I almost never look at code” is not abdication. Hubris without verify is blaming the model. Hubris with a trellis is the gardener who woke to 20 PRs and treated the landed main as **hers**.

Kitchen test: if a bot shipped it, your name is still on it. You do not get to say “the agent did that.” You get to turn the weed into a rule ([organic-architecture.md](organic-architecture.md)).

## Not the pstack Laziness Protocol

| | This post | pstack `laziness protocol` |
|--|-----------|----------------------------|
| Target | Your **time** | The **diff** |
| Question | Can a bot do this instead of me? | Can we delete and stay flat? |
| Failure | You stay the clicker | Over-engineered agent slop |

You can say `apply laziness protocol` mid-task and the agent will shrink the change. You can say `how can a bot do this instead of me?` and the agent should draft a routine, not more product code. Different lever.

## How this sits on the stack

| Piece | Relation |
|-------|----------|
| Larry Wall / Programming Perl | The names. She kept them and changed the payoffs. |
| [four-loops.md](four-loops.md) | Laziness → routines + Autopilot. Impatience → ship. Hubris → you still aim and own. |
| [organic-architecture.md](organic-architecture.md) | Hubris is why hard constraints exist: you own the dumb agent’s output. |
| [thousand-gardens.md](thousand-gardens.md) | Impatience is English-as-PL. Hubris is still being called an engineer. |
| [outer-loop.md](outer-loop.md) | Laziness made concrete: farm, don’t click. |

## Workspace implications from *this* post

- Twice is a routine. Ask the laziness question before you do it a third time.
- “Should we?” is often the wrong meeting. A flagged PR is a better argument.
- Own the night shift. `audit/decisions.tsv` is hubris on disk.
- Do not confuse this with shrinking a diff. Both are virtues. They fire at different moments.
