import { loadKnowledgeRepository } from "../repositories/knowledge.repository.js";

export function loadKnowledge(search = "") {
  const rules = loadKnowledgeRepository();

  if (!search) {
    return rules;
  }

  const keyword = search.toLowerCase();

  return rules.filter((rule) =>
    (rule.id || "").toLowerCase().includes(keyword) ||
    (rule.name_sv || "").toLowerCase().includes(keyword) ||
    (rule.name_th || "").includes(search) ||
    (rule.category || "").toLowerCase().includes(keyword) ||
    (rule.description_sv || "").toLowerCase().includes(keyword) ||
    (rule.description_th || "").includes(search)
  );
}