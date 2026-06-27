const API_URL = "http://localhost:1337";

export async function getAbout() {
  const res = await fetch(
    `${API_URL}/api/abouts?populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(
      "Erreur lors du chargement de la page About"
    );
  }

  const data = await res.json();

  return data.data;
}