import fetchWithAuth from '@/lib/fetchWithAuth';
import { ReserveData } from './type';

export default async function reserve(
  photographerId: string,
  data: ReserveData,
) {
  try {
    const rawResponse = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservation/${photographerId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('accessToken')!,
        },
        body: JSON.stringify({
          ...data,
          date: data.date!.toISOString().split('T')[0],
          startTime: `${data.startTime}:00`,
        }),
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
