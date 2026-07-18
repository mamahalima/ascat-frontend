const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getFooter() {
  const res = await fetch(
    `${API_URL}/api/footers?populate=*`,
    {
    cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(
      "Erreur lors du chargement du footer"
    );
  }

  const data = await res.json();

  return data.data[0];
  
}