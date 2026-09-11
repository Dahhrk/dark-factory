# SiteCMD / Brambleworks bar — deterministic rails (encode only)

Source (public): [sitecmd.com](https://sitecmd.com) · [brambleworks/SiteCMD](https://github.com/brambleworks/SiteCMD) (→ SiteCMD-app) · blog [A Senior Software Engineers perspective on building with AI](https://sitecmd.com/blog/senior-software-engineers-perspective-on-building-with-ai) (Kyle Piontek / u/Brambleworks) · friend agent test/notify/auto-commit pattern (Dark, 2026-09-10).

This recipe **encodes process + local tooling patterns**. Complementary to stop-ai-ui / visual-parity. **Not** Autopilot unlock, **not** a hire of their SaaS, **not** a second verify loop that replaces Riddler/Gordon.

## Thesis

AI speed without **deterministic fail-build rails** ships slop. Steal: tiny guardrails, hook ladder, friend-style agent test+notify, optional local SiteCMD CLI. Skip: connected SaaS until local gates prove value; auto-merge to main.

## When to invoke

| Use | Skip |
|-----|------|
| Raising Control-Glass gates after AI edits | Greening TRUST-NEXT / overnight Autopilot |
| Adding fail-build scripts for a repeated AI smell | Replacing Walter taste or Riddler proof |
| Wiring `pnpm test` / agent notify / branch auto-push | Treating PRs as required for solo feature branches |
| Adopting `@sitecmd/cli audit` locally | Requiring SiteCMD connected `gate` / hosted scans |
| Polish / AI-copy signals as gate fuel | Reimplementing all 420 SiteCMD checks in-house |

Owners: **Stewie** (harness/gates), **Tony** (Control-Glass wire), **Walter** (banned UI list for guardrails), **Harvey** (notify route + kitchen). Human plates merges to main.

## Steal (encode these)

| Pattern | What it is | Where it lands | When |
|---------|------------|----------------|------|
| **Guardrail bank** | Each repeated AI mistake → `grep` bad pattern → print `path:line` → exit 1 | Control-Glass `pnpm guardrails`; pre-push + CI | Smell appears twice |
| **Hook ladder** | Pre-commit = seconds (format, typecheck, lint, secrets). Pre-push = heavy (tests, guardrails, sitecmd audit). CI mirrors pre-push | Control-Glass hooks + Actions | Always for product |
| **Friend verify loop** | One `test` entry importing suites; agent runs it; notify pass/fail with pointers; on green may commit+push **feature branch** | Cloud Agents / Cursor Automation + Harvey notify | Day-to-day agent builds |
| **Claims → SoT** | User-facing claims must match a pinned source-of-truth file | Registry copy-contract / feature copy; guardrail fails on drift | Any marketing or UI string AI might invent |
| **Local SiteCMD CLI** | `npx @sitecmd/cli audit . --format github --fail-on high` (free, no account) | Control-Glass CI / pre-push heavy lane; `.sitecmd/config.json` suppressions | After baseline green |
| **Polish signals** | em-dash / buzzwords / gradients / glass / glow / div soup / default favicon-title | Fuel for Stewie guardrails + stop-ai-ui; optional `sitecmd scan --type polish` | ui:yes surfaces |
| **MCP fix→verify** | Finding → fix brief → apply → re-run check → SiteCMD/agent verify | Optional desktop+MCP; factory-native: Riddler “re-run gate X” | After P0 local rails |

## Local vs connected (do not blur)

| Local (adopt) | Connected (defer) |
|---------------|-------------------|
| Desktop / CLI / MCP on your machine | Hosted scheduled scans |
| Code Scan + Web Scan + Polish inventories | Baseline-aware SaaS `gate` |
| Suppressions + local baseline JSON | Deploy correlation / alert email |
| Apache-2.0 engines in public repo | SiteCMD-Web / service impl (private) |

Counts for orientation only (their `product-facts.json`): web 157, polish 30, codeScan 170, axe 55, total 420.

## Already covered — do not duplicate

| Their idea | Ours |
|------------|------|
| Anti AI UI aesthetic | stop-ai-ui + Walter ONE-SHOT / chrome rules |
| Visual proof | visual-parity + Riddler |
| Frontend authority | Walter (ui:yes) |
| PR review before main | Gordon; authors never merge on own verdict |
| Daily verify | Cursor Automation maintain-verify-glass |

## Skip forever

- Auto-merge to **main** (friend auto-push ≠ plate)
- Replacing Gordon / Riddler with SiteCMD alone
- Reimplementing all 420 checks in kitchen
- Product Feature Maps or secrets in dark-factory
- Greening Autopilot / TRUST-NEXT via this recipe
- Paying for connected SiteCMD before local P0 proves value

## P0 (factory — in flight when seated)

1. Friend-style verify+notify loop on Control-Glass (Stewie harness + Tony wire; Harvey notify)
2. Guardrail bank with path:line (Stewie; Walter names bans)
3. Claims ↔ SoT guardrail (Stewie + Harvey SoT path)
4. `@sitecmd/cli` local audit in CI — no connected SaaS (Stewie/Tony)

**Keep:** main still human-plated; kitchen PRs for public recipes; Autopilot blocked.

## Decision

| Need | Reach for |
|------|-----------|
| Agent test + notify + branch push | This recipe § Friend verify loop |
| Fail-build AI smell | Guardrail bank + Walter list |
| Deterministic code audit | `@sitecmd/cli audit` local |
| Studio chrome density | [kargul-craft-bar.md](kargul-craft-bar.md) |
| Landing anti-template | Elaya ([adjacent-taste.md](adjacent-taste.md)) |
| Overnight / Autopilot | [TRUST-NEXT.md](TRUST-NEXT.md) only |

## Related

- [adjacent-taste.md](adjacent-taste.md)
- [visual-parity.md](visual-parity.md)
- [kargul-craft-bar.md](kargul-craft-bar.md)
- [public-inventory.md](public-inventory.md)

## Source archive

- https://sitecmd.com
- https://sitecmd.com/blog/senior-software-engineers-perspective-on-building-with-ai
- https://sitecmd.com/docs/cli
- https://sitecmd.com/trust
- https://github.com/brambleworks/SiteCMD
- https://www.npmjs.com/package/@sitecmd/cli
