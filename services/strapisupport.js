const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getSupport() {
  const res = await fetch(
    `${API_URL}/api/soutiens?populate=*`
  );

  const data = await res.json();

  return data.data[0];
}