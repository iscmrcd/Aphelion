import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import ts from "typescript";

// Compile isolated tests with the project's existing TypeScript dependency.
// No extra test runner, network requests or live submissions are needed.
const root = fileURLToPath(new URL("../", import.meta.url));
const dir = mkdtempSync(join(tmpdir(), "aphelion-pixel-"));
try {
  for (const name of ["meta-permission", "pixel", "pixel.test"]) {
    const source = readFileSync(join(root, "src/lib", `${name}.ts`), "utf8");
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
    });
    const output = outputText.replace(/from "\.\/(meta-permission|pixel)"/g, 'from "./$1.mjs"');
    writeFileSync(join(dir, `${name}.mjs`), output);
  }
  const result = spawnSync(process.execPath, ["--test", join(dir, "pixel.test.mjs")], {
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
} finally {
  rmSync(dir, { recursive: true, force: true });
}
