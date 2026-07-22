import fs from "fs";
import path from "path";

const KNOWLEDGE_PATH = path.join(
  process.cwd(),
  "..",
  "knowledge-core",
  "02-rules",
  "general"
);

export function loadKnowledge() {
  try {
    const files = fs
      .readdirSync(KNOWLEDGE_PATH)
      .filter(file => file.endsWith(".json"));

    const data = files.map(file => {
      const content = fs.readFileSync(
        path.join(KNOWLEDGE_PATH, file),
        "utf8"
      );

      return JSON.parse(content);
    });

    return data;
  } catch (err) {
    console.error(err);

    return [];
  }
}