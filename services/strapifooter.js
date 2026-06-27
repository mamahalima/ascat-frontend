const API_URL = "http://localhost:1337";

export async function getFooter() {
  const res = await fetch(
    `${API_URL}/api/footers?populate=*`
  );

  if (!res.ok) {
    throw new Error(
      "Erreur lors du chargement du footer"
    );
  }

  const data = await res.json();

  return data.data[0];
  
}