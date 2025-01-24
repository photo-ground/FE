export default async function getSearchResult({ name }: { name: string }) {
  try {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer/search?name=${name}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!rawResponse.ok) {
      const response = await rawResponse.json();
      throw new Error(response.message);
    }

    const response = await rawResponse.json();
    return response;
  } catch (error: unknown) {
    console.error(error);

    return null;
  }
}
