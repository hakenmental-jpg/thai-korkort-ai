const API_URL = "http://localhost:3000/api";

export async function getSigns(search = "") {
  const response = await fetch(
    `${API_URL}/signs?search=${encodeURIComponent(search)}`
  );

  if (!response.ok) {
    throw new Error("Failed to load signs");
  }

  return response.json();
}