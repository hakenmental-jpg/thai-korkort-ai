import os
import csv
import json

CSV_FILE = "knowledge-core/data/rules.csv"
OUTPUT_DIR = "knowledge-core/02-rules"

os.makedirs(OUTPUT_DIR, exist_ok=True)

with open(CSV_FILE, "r", encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)

    for row in reader:
        category = row["category"].strip()

        folder = os.path.join(OUTPUT_DIR, category)
        os.makedirs(folder, exist_ok=True)

        filename = os.path.join(folder, f'{row["id"]}.json')

        data = {
            "id": row["id"],
            "name_sv": row["name_sv"],
            "name_th": row["name_th"],
            "category": category,
            "description_sv": row["description_sv"],
            "description_th": row["description_th"],
            "legal_reference": row["legal_reference"],
            "examples": [],
            "exceptions": [],
            "penalty": row["penalty"],
            "version": "1.0"
        }

        with open(filename, "w", encoding="utf-8") as out:
            json.dump(data, out, indent=2, ensure_ascii=False)

print("Done!")