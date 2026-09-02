# Why the throughput is possible

**INFERENCE** from public mechanisms + **SELF-REPORTED** volume. The high PR count is an **emergent property**, not a plugin install. Evidence labels: [evidence-standard.md](evidence-standard.md).

## Eight compounding effects

### 1. Small units

Narrow PRs → lower review cost, lower conflict probability, simpler verification, easier rollback ([pr-workflow.md](pr-workflow.md)).

### 2. Parallel ownership

Independent branches / Cloud VMs remove filesystem and process contention. The human is not the scheduler across ten terminals ([how-i-use-cursor.md](how-i-use-cursor.md)).

### 3. Early externalisation

Branches, PRs, head SHAs, artifacts, decision logs preserve progress. Work that exists only inside a chat or ephemeral VM is unfinished ([orchestration.md](orchestration.md)).

### 4. Automated context gathering

Coding agents do not start by asking you to paste every ticket and screenshot. Intake assembles the brief ([outer-loop.md](outer-loop.md), [benny-line.md](benny-line.md)).

### 5. Executable proof

Agents decide the next step without waiting for a human to click through the app ([feature-maps.md](feature-maps.md)).

### 6. Independent verdicts

Confidence from separation of roles (owner / reviewer / verifier / coordinator / human), not from one agent writing a longer explanation.

### 7. Continuous landing

Integration starts with the **first** verified unit — not after the whole program finishes.

### 8. Learning compounds

Every failure that becomes a hard check ([quality-ladder.md](quality-ladder.md)) lowers the intervention cost of future work.

## The bottleneck that remains

Verification infrastructure. Without it, parallelism multiplies slop ([nine-layers.md](nine-layers.md)). Trust curve: [match-ceiling.md](match-ceiling.md) · [workshop-grok-bot.md](workshop-grok-bot.md).
