export const fetchBuilds = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/builds`);
  const data = await res.json();
  return data;
};
