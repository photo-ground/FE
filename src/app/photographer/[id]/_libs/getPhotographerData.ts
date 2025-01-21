import { cookies } from 'next/headers';

export interface PhotographerDetail {
  profileUrl: string;
  photographerName: string;
  followerNum: number;
  gender: 'MALE' | 'FEMALE';
  age: number;
  univ: string[];
  price: number;
  addPrice: number;
  introduction: string;
  styleList: string[];
  following: boolean;
}

export default async function getPhotographerData(id: string) {
  try {
    // eslint-disable-next-line
    const headers: any = { 'Content-Type': 'application/json' };
    const cookieStore = await cookies();
    if (cookieStore.get('accessToken')?.value) {
      headers.Authorization = cookieStore.get('accessToken')!.value;
    }

    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer/${id}/intro`,
      {
        method: 'GET',
        headers: headers,
      },
    );

    if (!rawResponse.ok) {
      const response = await rawResponse.json();
      throw new Error(response.message);
    }

    const response = await rawResponse.json();
    console.log(response);
    return response;
  } catch (error: unknown) {
    console.error(error);

    return null;
  }
}
