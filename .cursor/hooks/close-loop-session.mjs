#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function failOpen(context) {
  process.stdout.write(JSON.stringify({ additional_context: context }));
}

function readStdin() {
  try {
    const raw = readFileSync(0, "utf8");
    JSON.parse(raw || "{}");
  } catch {
  }
}

function findFactoryRoot() {
  let dir = dirname(fileURLToPath(import.meta.url));
  while (true) {
    if (
      existsSync(join(dir, "audit")) &&
      existsSync(join(dir, "docs", "SELF-IMPROVE.md"))
    ) {
      return dir;
    }
    const parent = dirname(dir);
    if (parent === dir) {
      return null;
    }
    dir = parent;
  }
}

function statusRepeats(factoryRoot) {
  const out = execFileSync(
    process.execPath,
    ["scripts/close-loop.mjs", "status"],
    {
      cwd: factoryRoot,
      encoding: "utf8",
      timeout: 15000,
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  return String(out)
    .split(/\r?\n/)
    .filter((line) => line.startsWith("REPEAT"));
}

try {
  readStdin();
  const root = findFactoryRoot();
  if (!root) {
    failOpen("close-loop: clean");
    process.exit(0);
  }
  const repeats = statusRepeats(root);
  if (repeats.length === 0) {
    failOpen("close-loop: clean");
    process.exit(0);
  }
  const extra = [
    "close-loop: open REPEATs in audit/smells.tsv. Encode this turn (lint/CI/hook/Feature Map), then run encode. Do not add a reminder.",
    ...repeats,
  ].join("\n");
  process.stdout.write(JSON.stringify({ additional_context: extra }));
} catch {
  failOpen("close-loop: clean");
}
