import fs from "fs";
import path from "path";

const KNOWLEDGE_CORE = path.join(
  process.cwd(),
  "..",
  "knowledge-core"
);

function getAllJsonFiles(dir) {
  let files = [];

  const items = fs.readdirSync(dir, {
    withFileTypes: true,
  });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      files = files.concat(getAllJsonFiles(fullPath));
    } else if (
      item.isFile() &&
      item.name.endsWith(".json")
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

export function loadFolder(folderName) {
  const folderPath = path.join(
    KNOWLEDGE_CORE,
    folderName
  );

  try {
    const files = getAllJsonFiles(folderPath);

    return files
      .map((file) => {
        const content = fs.readFileSync(
          file,
          "utf8"
        );

        return JSON.parse(content);
      })
      .sort((a, b) =>
        (a.id || "").localeCompare(b.id || "")
      );
  } catch (err) {
    console.error(err);
    return [];
  }
}

export function loadKnowledgeRepository() {
  return loadFolder("02-rules");
}