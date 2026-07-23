import fs from "fs";
import path from "path";

const ROOT = path.join(
  process.cwd(),
  "knowledge-core",
  "03-signs"
);

const folders = [
  "warning",
  "priority",
  "prohibition",
  "mandatory",
  "information",
  "local"
];

for (const folder of folders) {
  const dir = path.join(ROOT, folder);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log("✅ Created:", dir);
  } else {
    console.log("📁 Exists:", dir);
  }
}

console.log("\n🎉 Road Signs structure ready.");