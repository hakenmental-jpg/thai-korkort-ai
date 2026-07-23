const API_URL = "http://localhost:3000/api";

export async function getQuestions(search = "") {
  const response = await fetch(
    `${API_URL}/quiz?search=${encodeURIComponent(search)}`
  );

  if (!response.ok) {
    throw new Error("Failed to load questions");
  }

  return response.json();
}