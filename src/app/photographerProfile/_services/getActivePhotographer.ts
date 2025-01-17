/* eslint-disable import/no-extraneous-dependencies */

import { PhotographerProps } from '@/types/photographer';
import { PhotoSpotListProps } from '@/types/photoSpot';

export async function getActivePhotographer(): Promise<PhotographerProps> {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer/active`,
  );
  console.log(res.ok);
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || '문제가 발생했습니다.');
  }

  return res.json(); // 성공적인 JSON 데이터 반환
}

export async function getUnivSpotList(
  univ: string,
): Promise<PhotoSpotListProps[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/spot?univ=${univ}
`,
    {
      next: {
        tags: [univ],
      },
    },
  );
  console.log(res);
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || '문제가 발생했습니다.');
  }

  return res.json(); // 성공적인 JSON 데이터 반환
}
