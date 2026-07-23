import fs from "fs";
import path from "path";

const SIGNS_PATH = path.join(
  process.cwd(),
  "..",
  "knowledge-core",
  "03-signs"
);

function getAllJsonFiles(dir) {
  let results = [];

  const list = fs.readdirSync(dir, {
    withFileTypes: true,
  });

  for (const file of list) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      results = results.concat(
        getAllJsonFiles(fullPath)
      );
    } else if (file.name.endsWith(".json")) {
      results.push(fullPath);
    }
  }

  return results;
}

export function loadSigns() {
  try {
    const files = getAllJsonFiles(SIGNS_PATH);

    return files.map((file) =>
      JSON.parse(
        fs.readFileSync(file, "utf8")
      )
    );
  } catch {
    return [];
  }
}