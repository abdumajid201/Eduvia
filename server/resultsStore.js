import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RESULTS_FILE = process.env.RESULTS_FILE || join(__dirname, "data", "results.json");

function ensureFile() {
  const dir = dirname(RESULTS_FILE);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  if (!existsSync(RESULTS_FILE)) writeFileSync(RESULTS_FILE, "[]", "utf-8");
}

export function readResults() {
  ensureFile();
  try {
    const raw = readFileSync(RESULTS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function appendResult(record) {
  const results = readResults();
  const entry = { id: randomUUID(), ...record };
  results.push(entry);
  ensureFile();
  writeFileSync(RESULTS_FILE, JSON.stringify(results, null, 2), "utf-8");
  return entry;
}
