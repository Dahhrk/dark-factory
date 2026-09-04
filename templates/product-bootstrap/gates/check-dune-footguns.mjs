#!/usr/bin/env node
/**
 * Dune footguns for product src/ only (.cursor/skills stay out of this scan).
 *
 * Bans:
 * 1. useEffect import or call in src/
 * 2. Line (//) and block comments in src ts/tsx files
 *    (strings, templates, and JSX text are not comments — TypeScript ranges.)
 * 3. TODO/FIXME/HACK without a ticket reference (e.g. TODO(ARCH-123))
 *
 * Escape hatch: architecture PR + add a relative path under ALLOWLIST with a
 * ticket id in the comment on that line. Do not widen quietly.
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";
import * as ts from "typescript";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");

/** Paths exempt only after an architecture PR; ticket must sit on the entry. */
const ALLOWLIST = [
  // Example: { path: "src/features/foo/legacy.ts", ticket: "ARCH-123" },
];

const violations = [];

function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "node_modules" || name === "dist") continue;
      walk(p, files);
    } else if (/\.tsx?$/.test(name)) {
      files.push(p);
    }
  }
  return files;
}

function relPosix(abs) {
  return path.relative(ROOT, abs).replace(/\\/g, "/");
}

function lineOf(text, pos) {
  return text.slice(0, pos).split(/\r?\n/).length;
}

function isAllowlisted(rel) {
  return ALLOWLIST.some((e) => e.path === rel);
}

function collectCommentRanges(sf) {
  const text = sf.text;
  const seen = new Set();
  const out = [];
  function add(ranges) {
    if (!ranges) return;
    for (const r of ranges) {
      const key = `${r.pos}:${r.end}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(r);
    }
  }
  add(ts.getLeadingCommentRanges(text, 0));
  function visit(node) {
    add(ts.getLeadingCommentRanges(text, node.pos));
    add(ts.getTrailingCommentRanges(text, node.end));
    for (const child of node.getChildren(sf)) {
      visit(child);
    }
  }
  visit(sf);
  return out;
}

function checkUseEffect(sf, rel) {
  const localNames = new Set(["useEffect"]);
  function visit(node) {
    if (ts.isImportDeclaration(node) && node.importClause) {
      const clause = node.importClause;
      if (clause.name?.text === "useEffect") {
        violations.push(
          `${rel}:${lineOf(sf.text, node.getStart(sf))}: banned useEffect default import`,
        );
      }
      const bindings = clause.namedBindings;
      if (bindings && ts.isNamedImports(bindings)) {
        for (const el of bindings.elements) {
          const originalName = (el.propertyName ?? el.name).text;
          if (originalName === "useEffect") {
            localNames.add(el.name.text);
            violations.push(
              `${rel}:${lineOf(sf.text, el.getStart(sf))}: banned useEffect named import`,
            );
          }
        }
      }
    }
    if (ts.isCallExpression(node)) {
      const expr = node.expression;
      if (ts.isIdentifier(expr) && localNames.has(expr.text)) {
        violations.push(
          `${rel}:${lineOf(sf.text, expr.getStart(sf))}: banned useEffect call`,
        );
      }
      if (
        ts.isPropertyAccessExpression(expr) &&
        expr.name.text === "useEffect"
      ) {
        violations.push(
          `${rel}:${lineOf(sf.text, expr.name.getStart(sf))}: banned useEffect call`,
        );
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
}

function scanFile(abs) {
  const rel = relPosix(abs);
  if (isAllowlisted(rel)) return;
  const text = readFileSync(abs, "utf8");
  const kind = rel.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
  const sf = ts.createSourceFile(rel, text, ts.ScriptTarget.Latest, true, kind);

  for (const r of collectCommentRanges(sf)) {
    const preview = text.slice(r.pos, Math.min(r.end, r.pos + 48)).replace(/\s+/g, " ");
    const kindLabel =
      r.kind === ts.SyntaxKind.SingleLineCommentTrivia
        ? "// comment"
        : "/* comment */";
    violations.push(
      `${rel}:${lineOf(text, r.pos)}: banned ${kindLabel} — ${preview}`,
    );
  }

  checkUseEffect(sf, rel);
  checkTodoWithoutTicket(text, rel);
}

const TODO_RE = /\b(TODO|FIXME|HACK|XXX)\b/g;
const TICKET_RE = /\b(TODO|FIXME|HACK|XXX)\s*\([A-Z]+-\d+\)/;

function checkTodoWithoutTicket(text, rel) {
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (TODO_RE.test(line) && !TICKET_RE.test(line)) {
      violations.push(
        `${rel}:${i + 1}: TODO/FIXME without ticket — add (TICKET-123) or fix it now`,
      );
    }
    TODO_RE.lastIndex = 0;
  }
}

for (const file of walk(SRC)) {
  scanFile(file);
}

if (violations.length) {
  console.error("dune-footguns failed:\n" + violations.map((v) => `  ${v}`).join("\n"));
  process.exit(1);
}

console.log("dune-footguns: ok");
