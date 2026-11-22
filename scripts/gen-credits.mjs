// Regenerates src/lib/credits.json, the open-source attribution list shown on
// /credits, from the installed production dependency tree.
// Run with: npm run credits
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const raw = execFileSync(
  "npx",
  ["-y", "license-checker-rseidelsohn@4", "--production", "--json", "--excludePrivatePackages"],
  { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }
);

const packages = Object.entries(JSON.parse(raw))
  .map(([id, info]) => {
    const at = id.lastIndexOf("@");
    return {
      name: id.slice(0, at),
      version: id.slice(at + 1),
      license: String(info.licenses ?? "UNKNOWN"),
      repository: info.repository ?? null,
      publisher: info.publisher ?? null,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

writeFileSync("src/lib/credits.json", JSON.stringify(packages, null, 2) + "\n");
console.log(`Wrote ${packages.length} packages to src/lib/credits.json`);
