#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function empty() {
  process.stdout.write("{}");
}

function readInput() {
  try {
    const raw = readFileSync(0, "utf8");
    return JSON.parse(raw || "{}");
  } catch {
    return {};
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

function hasRepeats(factoryRoot) {
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
    .some((line) => line.startsWith("REPEAT"));
}

try {
  const input = readInput();
  if (input.status === "aborted") {
    empty();
    process.exit(0);
  }
  const loopCount = Number(input.loop_count ?? 0);
  if (loopCount >= 1) {
    empty();
    process.exit(0);
  }
  const root = findFactoryRoot();
  if (!root || !hasRepeats(root)) {
    empty();
    process.exit(0);
  }
  process.stdout.write(
    JSON.stringify({
      followup_message:
        "close-loop: encode open repeats in audit/smells.tsv this turn (lint/CI/hook/Feature Map). Do not add a reminder. If already encoded, run encode on those rows.",
    }),
  );
} catch {
  empty();
}
