import { readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const LIMIT = 300 * 1024;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else if (stat.size > LIMIT) {
      console.error(
        `OVER BUDGET: ${full} is ${(stat.size / 1024).toFixed(0)}KB (limit 300KB)`,
      );
      process.exitCode = 1;
    }
  }
}

walk(ROOT);
if (!process.exitCode) console.log("All public assets within 300KB.");
