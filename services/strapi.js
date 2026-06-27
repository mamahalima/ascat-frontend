const API_URL = "http://localhost:1337";

export async function getEvents() {
  const res = await fetch(`${API_URL}/api/evenements?populate=*`);
  if (!res.ok) {
    throw new Error("Erreur lors du chargement des events");
  }
  const data = await res.json();
  return data.data;

}