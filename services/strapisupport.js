const API_URL = "http://localhost:1337";

export async function getSupport() {
  const res = await fetch(
    `${API_URL}/api/soutiens?populate=*`
  );

  const data = await res.json();

  return data.data[0];
}