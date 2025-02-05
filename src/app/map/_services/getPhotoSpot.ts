/* eslint-disable import/no-extraneous-dependencies */

import { PhotoSpotListProps, PhotoSpotProps } from '@/types/photoSpot';

export async function getPhotoSpotByUniv(
  univ: string,
): Promise<PhotoSpotListProps[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/spot?univ=${univ}
`,
    {
      next: {
        tags: ['photoSpot', univ],
      },
    },
  );
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || '문제가 발생했습니다.');
  }

  return res.json(); // 성공적인 JSON 데이터 반환
}

export async function getSelectedSpotInfo(
  photoSpotId: number,
  cursor?: number, // Optional parameter
): Promise<PhotoSpotProps> {
  const params = new URLSearchParams();

  // Base URL
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/spot/${photoSpotId}`,
  );

  // Append cursor query parameter only if lastImageId is provided
  if (cursor) {
    params.append('cursor', cursor.toString());
  }

  url.search = params.toString();

  const res = await fetch(url.toString(), {
    next: {
      tags: ['selectedSpotInfo'],
    },
  });

  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || '문제가 발생했습니다.');
  }

  return res.json(); // 성공적인 JSON 데이터 반환
}
