# Evidence standard

How kitchen docs label claims about Lauren Tan (`@poteto`). Companion to [match-ceiling.md](match-ceiling.md). From the 2 Sep 2026 research dossier.

## Three labels

| Label | Means |
|-------|--------|
| **VERIFIED PUBLIC IMPLEMENTATION** | Visible in plugin source, official Cursor docs, a published guide, or a public workflow file. Inspectable. |
| **SELF-REPORTED** | Lauren or a teammate stated the number or practice publicly. Private repos / dashboards are not available for independent audit. |
| **INFERENCE** | Reasoned reconstruction from several public sources. Not a quote or confirmed private fact. |

Use the primary source or inspectable repo when a secondary recap disagrees ([source-register.md](source-register.md)).

## Headline throughput (SELF-REPORTED)

Public claims (not an audited ledger):

- ~**1,000 PRs in one month** (Aug 2026 four-loops post).
- On track to **double**; Pt. 1 says the system enabled **~2,000 PRs/month** to production with high confidence.
- Compile London talk title (scheduled **16 Sep 2026**): “I Shipped 2,000 PRs Last Month” — upcoming as of 2 Sep; not published evidence yet.

At 1,000 PRs / 30 days ≈ **33/day** (one every ~43 minutes around the clock). At 2,000 ≈ **67/day** (~every 22 minutes). That cannot be a sequential one-human-one-terminal workflow. It implies many small units moving concurrently through automation.

**Not publicly verified:** complete PR history, authorship split (Lauren / agent / team / migration / maintenance), revert rate, unique-change count, exact definition of “shipped,” cloud spend, peak concurrency.

The factory is still worth copying under a **conservative** reading of the count. Copy the inspectable mechanisms ([nine-layers.md](nine-layers.md)), not the number.

## What is never inventable

Desk hardware, private repo names, production branch rules, exact monthly cloud cost, every internal `/lauren-mode` skill, unpublished pstack guide parts after Pt. 1, audited acceptance/escape-defect rates.

The documented “workspace” is digital: Cursor, Cloud Agent VMs, Grok Bot, GitHub PRs, repo-local skills/hooks, control tools, CI, issue channels, artifacts, ledgers.
