import { mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import ts from "typescript";
const root = fileURLToPath(new URL("../", import.meta.url));
const directory = mkdtempSync(join(tmpdir(), "aphelion-hubspot-"));
try {
  const modules = ["hubspot-client.server", "hubspot-sync.server", "notify-server", "hubspot.test"];
  for (const name of modules) {
    let source = readFileSync(join(root, "src/lib", name + ".ts"), "utf8");
    if (name === "notify-server") {
      source = source.replace(
        /import \{ createServerFn \} from "@tanstack\/react-start";/,
        "const createServerFn=()=>({validator(validate){this.validate=validate;return this},handler(run){return async(input)=>run({data:this.validate(input.data)})}});",
      );
      source = source.replace(
        /import \{ getRequestIP \} from "@tanstack\/react-start\/server";/,
        "const getRequestIP=()=>undefined;",
      );
    }
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
    });
    const output = outputText.replace(
      /from (["'])\.\/(hubspot-client\.server|hubspot-sync\.server|notify-server)\1/g,
      'from "./$2.mjs"',
    );
    writeFileSync(join(directory, name + ".mjs"), output);
  }
  const result = spawnSync(process.execPath, ["--test", join(directory, "hubspot.test.mjs")], {
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
} finally {
  rmSync(directory, { recursive: true, force: true });
}
