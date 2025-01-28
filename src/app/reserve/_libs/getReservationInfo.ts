import fetchWithAuth from '@/lib/fetchWithAuth';
import getAccessToken from '@/lib/getAccessToken';

export default async function getReservationInfo() {
  try {
    const rawResponse = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservation/info`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getAccessToken(),
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
