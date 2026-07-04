const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProjectKST() {
  const res = await fetch(
    `${API_URL}/api/projet-ksts?populate=*&sort=Order:asc`,
  );
  if (!res.ok) {
    throw new Error(
      "Erreur lors du chargement du projet KST"
    );
  }
  const data = await res.json();
  return data.data;
}