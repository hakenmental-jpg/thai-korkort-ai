import fs from "fs";
import path from "path";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

const ROOT = path.join(
  process.cwd(),
  "knowledge-core",
  "03-signs"
);

async function main() {
  const category = await ask("Category : ");
  const code = await ask("Code : ");
  const nameSv = await ask("Swedish : ");
  const nameTh = await ask("Thai : ");
  const description = await ask("Description : ");

  const folder = path.join(ROOT, category);

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, {
      recursive: true,
    });
  }

  const files = fs
    .readdirSync(folder)
    .filter((f) => f.endsWith(".json"));

  const id = String(files.length + 1).padStart(4, "0");

  const fileName = `SIGN-${id}.json`;

  const data = {
    id: `SIGN-${id}`,
    code,
    category,
    name_sv: nameSv,
    name_th: nameTh,
    description_sv: "",
    description_th: description,
    legal_reference: "Transportstyrelsen",
    tags: [category],
    version: "1.0.0",
  };

  fs.writeFileSync(
    path.join(folder, fileName),
    JSON.stringify(data, null, 2),
    "utf8"
  );

  console.log("");

  console.log("✅ Created");

  console.log(fileName);

  rl.close();
}

main();