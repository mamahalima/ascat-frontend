const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Liste des actualités
export async function getActualities() {
  const res = await fetch(
    `${API_URL}/api/actualities?populate=*`
  );

  if (!res.ok) {
    throw new Error(
      "Erreur lors du chargement des actualités"
    );
  }

  const data = await res.json();

  return data.data;
}

// Un article par slug
export async function getActualityBySlug(
  slug
) {
  const res = await fetch(
    `${API_URL}/api/actualities?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }
  console.log("SEARCHING SLUG:", slug);
  const data = await res.json();
  console.log("STRAPI DATA:", data);
  return data.data?.[0] || null;
}