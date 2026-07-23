import { loadSigns } from "../services/sign.service.js";

export function getSigns(req, res) {

  const search =
    (req.query.search || "").toLowerCase();

  let data = loadSigns();

  if (search) {
    data = data.filter(sign =>
      JSON.stringify(sign)
        .toLowerCase()
        .includes(search)
    );
  }

  res.json({
    success: true,
    total: data.length,
    data,
  });
}