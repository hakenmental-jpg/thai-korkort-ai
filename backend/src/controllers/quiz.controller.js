import { loadQuestions } from "../services/quiz.service.js";

export function getQuestions(req, res) {
  try {
    const { search = "" } = req.query;

    const data = loadQuestions(search);

    res.json({
      success: true,
      total: data.length,
      data,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to load questions",
    });
  }
}