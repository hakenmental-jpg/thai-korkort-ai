import { loadFolder } from "../repositories/knowledge.repository.js";

export function loadQuestions(search = "") {
  const questions = loadFolder("07-questions");

  if (!search) {
    return questions;
  }

  const keyword = search.toLowerCase();

  return questions.filter((question) =>
    (question.id || "").toLowerCase().includes(keyword) ||
    (question.question_sv || "").toLowerCase().includes(keyword) ||
    (question.question_th || "").includes(search) ||
    (question.category || "").toLowerCase().includes(keyword)
  );
}