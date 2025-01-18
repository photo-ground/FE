import { cookies } from 'next/headers';
import fetchWithAuth from '@/lib/fetchWithAuth';

export interface PhotographerReserve {
  nickname: string;
  price: number;
  addPrice: number;
  availableUniv: string[];
  availableDate: string[];
  schedule: { weekDay: string; timeSlot: number[] }[];
}

export default async function getPhotographerData(id: string) {
  const cookieStore = await cookies();

  try {
    const rawResponse = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer/${id}/reservation`,
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
