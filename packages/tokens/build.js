import fs from "fs";
import path from "path";

const tokensPath = path.resolve(process.cwd(), "packages/tokens/tokens.json");
const cssOutPath = path.resolve(process.cwd(), "packages/tokens/tokens.css");

const tokens = JSON.parse(fs.readFileSync(tokensPath, "utf8"));

function toCssVars(obj, prefix = []) {
  let lines = [];
  for (const [key, value] of Object.entries(obj)) {
    const next = [...prefix, key];
    if (typeof value === "object" && value !== null) {
      lines = lines.concat(toCssVars(value, next));
    } else {
      lines.push(`  --${next.join("-")}: ${value};`);
    }
  }
  return lines;
}

const lines = toCssVars(tokens);
const css = [":root {", ...lines, "}", ""].join("\n");

fs.writeFileSync(cssOutPath, css);
console.log("✅ Built", path.relative(process.cwd(), cssOutPath));
