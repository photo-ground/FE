import { useEffect, useState } from 'react';
import useUserStore from '@/store/useUserStore';
import getAccessToken from '@/lib/getAccessToken';
import PhotographerDetailScreen from './screen';

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

async function getPhotographerData(id: number) {
  try {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer/${id}/intro`,
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

    console.log(rawResponse);

    const response = await rawResponse.json();
    return response;
  } catch (error: unknown) {
    console.error(error);

    return null;
  }
}

export default function PhotographerProfile() {
  const photographerId = useUserStore((state) => state.photographerId);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (photographerId) {
      getPhotographerData(photographerId).then((response) => setData(response));
    }
  }, [photographerId]);

  if (!photographerId) return null;

  if (!data) {
    return null;
  }

  return (
    <PhotographerDetailScreen photographerId={photographerId} data={data!} />
  );
}

export const runtime = 'edge';
