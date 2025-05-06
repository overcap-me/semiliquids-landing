export const getNavFooter = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_HOST}/navigation/footer`, {
    headers: {
      Accept: 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch footer navigation');
  }
  const data = await response.json();
  return data;
}