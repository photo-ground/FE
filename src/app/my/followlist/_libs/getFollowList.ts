import { cookies } from 'next/headers';

export interface Follow {
  photographerName: string;
  profileUrl: string;
  photographerId: number;
}

export default async function getFollowList() {
  try {
    const cookieStore = await cookies();

    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/follow`,
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
