export interface ReviewData {
  count: number;
  averageScore: number;
  reviews: {
    reviewId: number;
    reservationId: number;
    photographerProfile: string;
    photographerName: string;
    content: string;
    score: number;
    createdAt: string;
  }[];
}
export default async function getReviewData(id: string) {
  try {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer/${id}/review`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
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
