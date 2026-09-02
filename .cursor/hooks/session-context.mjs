import { readFileSync } from "node:fs";

const raw = readFileSync(0, "utf8");
let input = {};
try {
  input = JSON.parse(raw || "{}");
} catch {
  input = {};
}

const ctx = [
  "Kitchen repo (dark-factory). Product work → ~/Projects/Control-Glass or scripts/new-product.ps1.",
  "Entry: /poteto-mode. Done means checkable. Keep invariants.",
  "No Autopilot here. No /create-verification-skill for a real app here.",
  "Storage: docs/storage-layout.md. Naming: docs/naming.md. Guardrails always on.",
].join(" ");

process.stdout.write(
  JSON.stringify({
    additional_context: ctx,
    env: { FACTORY_ROLE: "kitchen" },
  }),
);
