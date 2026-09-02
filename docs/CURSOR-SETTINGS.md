# Cursor app + web settings (this factory)

Agent can stage repo config. **You** flip app/web toggles (billing login). Work the list top to bottom once.

## Web dashboard (cursor.com)

| # | Where | Set to | Done means |
|---|--------|--------|------------|
| 1 | [Spending](https://cursor.com/dashboard?tab=spending) | On-demand **ON** + monthly **spend cap** (your number — do not copy lab spend) | Cap shows a dollar amount, not “No Limit” |
| 2 | [Cloud Agents](https://cursor.com/agents) / Settings → Cloud Agents | **ON**; first Build for Control-Glass | A cloud run can `npm ci` + Playwright + `control-glass` |
| 3 | [Bugbot / Integrations](https://cursor.com/dashboard?tab=bugbot) | `Dahhrk/Control-Glass` enabled | Bugbot comments appear on PRs |
| 4 | [Usage](https://cursor.com/dashboard?tab=usage) | Glance after first overnight | You know Cloud vs client burn |
| 5 | Automations (app Glass UI) | Saved **and schedule Enabled** | maintain workspace = Control-Glass; not paused |

## Cloud snapshot (Control-Glass) — how

You do **not** upload a zip. “Snapshot” = Cursor’s **Build**: a prepared Linux VM for that repo.

1. Land `.cursor/environment.json` on Control-Glass (`install` only: `npm ci` + Playwright chromium — **no** auto `npm run dev`; agents use `control-glass launch`).
2. Open [cursor.com/agents](https://cursor.com/agents) → Environments / setup for `Dahhrk/Control-Glass`  
   **or** in Cursor: Agents window → Cloud → guided setup for that repo.
3. Connect GitHub if asked. Pick **Control-Glass** only (not the kitchen) for product work.
4. Let agent-driven setup run once (or trigger a Build). Watch the shared terminal until install finishes.
5. Done means: Build **succeeded** / environment shows ready. Later Cloud Agents + Automations reuse it.
6. Smoke: one Cloud Agent on Control-Glass runs `npm run control -- doctor` then `npm run ci:drive`.

Docs: [Cloud environment setup](https://cursor.com/docs/cloud-agent/setup).

## Cursor app (Ctrl+, or Cursor Settings)

| # | Pane | Set to | Done means |
|---|------|--------|------------|
| 1 | **Rules** → User Rules | Factory OS rule present (already) | Matches kitchen intent |
| 2 | **Plugins** | `pstack` + `cursor-team-kit` enabled for open workspace | Skills `/how`, `/poteto-mode`, team-kit available |
| 3 | Chat → Custom Modes | Pin **`/poteto-mode`** (type skill → **Alt+Enter** / Opt+Enter) | Mode sticky on new chats |
| 4 | **Agents / Cloud** | Prefer Cloud for heavy maintain; laptop closed overnight | Matches spend-and-cloud.md |
| 5 | **Attribution** (Agent) | Attribute commits/PRs to agent | Already true in CLI; confirm in IDE |
| 6 | Editor `settings.json` | Leave sparse — factory does not need theme/font “AI” tweaks | OK empty except personal prefs |

## Do not enable yet

- Benny / Slack-wired Autopilot  
- Fleet Autopilot / Orchestrate  
- “Run everything” / unbounded auto-approve  

## Repo side (agent-maintained)

| Repo | File | Expect |
|------|------|--------|
| dark-factory | `.cursor/settings.json` | `pstack` + `cursor-team-kit` |
| Control-Glass | `.cursor/settings.json` | same |
| Control-Glass | `.cursor/environment.json` | install only (`npm ci` + Playwright) |
| Control-Glass | `npm run anti-ai-ui` / `visual-parity` | mechanical UI trust (after PR lands) |
| both | `.cursor/hooks.json` + hooks | secrets-scan, shell-guard, session-context |
| user | `~/.cursor/rules/pstack-models.mdc` | Lauren/jacobgold map |
| user | `~/.cursor/rules/poteto-factory-os.mdc` | always-on OS |

## Related

- [STILL-YOU.md](STILL-YOU.md) — short 5-minute list  
- [spend-and-cloud.md](spend-and-cloud.md)  
- [cloud-bot-setup.md](cloud-bot-setup.md)  
- [TRUST-NEXT.md](TRUST-NEXT.md) — first overnight after this list  
