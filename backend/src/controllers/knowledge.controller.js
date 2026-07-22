import { loadKnowledge } from "../services/knowledge.service.js";

export const getKnowledge = (req, res) => {
  const rules = loadKnowledge();

  const q = (req.query.q || "").toLowerCase().trim();

  if (!q) {
    return res.json({
      success: true,
      total: rules.length,
      data: rules,
    });
  }

  const filtered = rules.filter((rule) =>
    [
      rule.id,
      rule.name_sv,
      rule.name_th,
      rule.description_sv,
      rule.description_th,
      rule.category,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(q)
  );

  res.json({
    success: true,
    total: filtered.length,
    data: filtered,
  });
};