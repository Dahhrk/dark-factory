#!/usr/bin/env node
/**
 * Accessibility check: axe-core against a live page. Fail on critical/serious.
 *
 * PRODUCT_GENERIC_A11Y
 *
 * Launch (optional): CONTROL_CLI, or the first .cursor/skills/verify-*/control-*.mjs
 * Base URL: APP_BASE (default http://127.0.0.1:5173)
 *
 * Does not invent visual-parity. Does not call a product control CLI by name.
 */
import { readdirSync, existsSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const ROOT = process.cwd();
const BASE = process.env.APP_BASE || "http://127.0.0.1:5173";

function findControlCli() {
  if (process.env.CONTROL_CLI) return process.env.CONTROL_CLI;
  const skills = path.join(ROOT, ".cursor", "skills");
  if (!existsSync(skills)) return null;
  for (const name of readdirSync(skills)) {
    if (!name.startsWith("verify-")) continue;
    const dir = path.join(skills, name);
    if (!statSync(dir).isDirectory()) continue;
    for (const file of readdirSync(dir)) {
      if (/^control-.*\.mjs$/.test(file)) {
        return path.join(dir, file);
      }
    }
  }
  return null;
}

function ctrl(cli, args) {
  const r = spawnSync(process.execPath, [cli, ...args], {
    cwd: ROOT,
    encoding: "utf8",
    env: process.env,
  });
  if (r.status !== 0) {
    const out = `${r.stdout || ""}${r.stderr || ""}`.trim();
    if (out) console.log(out);
    console.error(`control CLI ${args.join(" ")} failed (${r.status})`);
    process.exit(r.status ?? 1);
  }
}

const CTRL = findControlCli();
let launched = false;

try {
  if (CTRL) {
    ctrl(CTRL, ["launch"]);
    ctrl(CTRL, ["wait-settle"]);
    launched = true;
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    await page.goto(BASE, { waitUntil: "networkidle" });
  } catch (err) {
    await browser.close();
    console.error(
      `a11y: could not open ${BASE}. Set CONTROL_CLI or APP_BASE and start the app. ${err}`,
    );
    process.exit(1);
  }

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "best-practice"])
    .analyze();

  await browser.close();

  const serious = results.violations.filter(
    (v) => v.impact === "critical" || v.impact === "serious",
  );

  if (results.violations.length > 0) {
    console.log(`a11y: ${results.violations.length} total violations found`);
    for (const v of results.violations) {
      const nodes = v.nodes.map((n) => n.target.join(" > ")).join(", ");
      console.log(`  [${v.impact}] ${v.id}: ${v.help} (${nodes})`);
    }
  }

  if (serious.length > 0) {
    console.error(
      `\na11y FAIL: ${serious.length} critical/serious violations. Fix before merge.`,
    );
    process.exit(1);
  }

  console.log(
    `a11y: ok (${results.passes.length} rules passed, ${results.violations.length} minor violations)`,
  );
} finally {
  if (launched) ctrl(CTRL, ["cleanup"]);
}
