const API_URL = "http://localhost:3000/api";

export async function getRules(search = "") {
  const url = search
    ? `${API_URL}/knowledge?q=${encodeURIComponent(search)}`
    : `${API_URL}/knowledge`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Cannot load rules");
  }

  return response.json();
}