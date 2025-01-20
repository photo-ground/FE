import fetchWithAuth from '@/lib/fetchWithAuth';
import { cookies } from 'next/headers';

export default async function getReservationDetail(reservationId: string) {
  const cookieStore = await cookies();

  try {
    const rawResponse = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservation/${reservationId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: cookieStore.get('accessToken')!.value,
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
