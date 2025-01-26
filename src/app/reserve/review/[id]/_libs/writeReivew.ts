import fetchWithAuth from '@/lib/fetchWithAuth';

export default async function writeReview(
  reservationId: string,
  data: {
    content: string;
    score: number;
  },
) {
  try {
    const rawResponse = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/review/${reservationId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('accessToken')!,
        },
        body: JSON.stringify({ ...data }),
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
