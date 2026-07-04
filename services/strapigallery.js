const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getGallery() {
  const res = await fetch(
    `${API_URL}/api/galeries?populate=*`
  );
  if (!res.ok) {
    throw new Error(
      "Erreur lors du chargement de la galerie"
    );
  }
  const data = await res.json();
  return data.data;
}