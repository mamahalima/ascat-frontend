const API_URL = "http://localhost:1337";

export async function getActivities() {
  const res = await fetch(
    `${API_URL}/api/activities?populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(
      "Erreur lors du chargement des activités"
    );
  }

  const data = await res.json();

  return data.data;
}