# Routes — Chief of Staff handoffs

Do this **before** you give Chief a design or product task. Otherwise Chief invents a specialist or does the work himself.

## Who talks to whom

```text
You (Grok Bot chat)
  → Chief of Staff
      → Figma Engineer     designs in Figma: real components, layout, motion
      → Engineer           verify + Cloud Agent on Control-Glass
      → Prune              Friday hygiene
```

Cursor chat is **not** on this map until a webhook routine exists.

## Create order (once)

1. Chief of Staff (you already have this).
2. Engineer (you already have this).
3. **Figma Engineer** — paste charter from [BOTS.md](./BOTS.md) §7. Do this before any Glass look task.
4. Update Chief's specialist list if the live charter is the old one (no Figma Engineer line).
5. Optional later. Webhook routine on Chief so Cursor can POST a ticket. Recipe: [make-bot-ui.md](../../docs/make-bot-ui.md).

## Ticket shape

Same fields in chat, queue rows, and webhooks. Keep it this small.

```json
{
  "objective": "unique Glass-inspired Control-Glass home, not AI slop",
  "done_means": "named direction + DESIGN.md + control-glass idle then ready + anti-ai-ui green",
  "keep": "testids and copy; no nightglass; no Lauren clone; do not merge",
  "owner": "Figma Engineer",
  "product": "Control-Glass"
}
```

Chief rewrites that into a specialist handoff with Done means + Keep. Chief does not draw. Figma Engineer does not implement. Engineer does not invent the look.

## After Figma Engineer is created

Give Chief the Glass task in the Grok Bot thread. Example:

```text
Route this. Do not design it yourself.
Ticket: unique Glass-inspired home for Control-Glass. Not AI slop. Not a clone of Lauren's private Glass.
Owner: Figma Engineer.
Done means: named direction, tokens, type, layout, idle vs ready, motion, anti-slop rejections. Spec implementable in CSS if Figma MCP is off.
Keep: home-root home-brand home-cta home-status. Copy stays Control-Glass / Mark ready / idle|ready. No text-transform on those nodes. No Inter, purple, 3-card grid, cream+terracotta+serif, nightglass.
Already rejected: night kiln, daylight Syne/Figtree, paddock/broadsheet/amber, empty Mantine chrome.
When the spec exists, hand Engineer a Cloud Agent on ~/Projects/Control-Glass. Do not merge.
```

## Webhook (this computer → Chief)

Poster and server: [cursor-handoff/](./cursor-handoff/). Mesh map: [INTEGRATIONS.md](../../docs/INTEGRATIONS.md).

1. Create routine `cursor-handoff` on Chief. Prompt: [cursor-handoff/ROUTINE.md](./cursor-handoff/ROUTINE.md).
2. Paste the webhook URL in chat. Do not paste the sender key.
3. Ask the agent for the secret-request card.
4. `node automations/grok-bot/cursor-handoff/server.mjs` → `http://127.0.0.1:8788/`
5. Click Ping. HTTP 200 and Chief stays silent. Then send a real ticket.
