'use server';

import { PhotographerList } from '@/types/photographer';
import { PhotoSpotListProps } from '@/types/photoSpot';
import { PostUploadContainerProps } from '@/types/post';
import { cookies } from 'next/headers';
import refreshAccessToken from '@/lib/refreshToken';

export async function getActivePhotographer(): Promise<PhotographerList> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer/active`,
  );

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
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || '문제가 발생했습니다.');
  }

  return res.json(); // 성공적인 JSON 데이터 반환
}

export async function postNewContent(newContent: PostUploadContainerProps) {
  // 데이터를 FormData로 전송해야 한다.
  const formData = new FormData();

  // JSON 데이터를 Blob으로 추가
  const postInfoBlob = new Blob([JSON.stringify(newContent.postInfo)], {
    type: 'application/json',
  });
  formData.append('postInfo', postInfoBlob);

  // 사진 파일 추가
  newContent.photos.forEach((photo) => {
    formData.append('photos', photo);
  });

  // 기본 헤더 구성
  const getHeaders = (token: string) => ({
    Authorization: `${token}`,
  });

  // 요청할 주소
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`;

  try {
    // 1. Access Token 가져오기
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    if (!accessToken) {
      throw new Error('Access token이 존재하지 않습니다.');
    }

    // 2. 첫 번째 요청 시도
    const response = await fetch(url, {
      method: 'POST',
      headers: getHeaders(accessToken),
      body: formData,
    });

    if (response.ok) {
      return await response.json(); // 성공적인 요청
    }

    // 3. 401 오류 발생 시 토큰 갱신 및 재요청
    if (response.status === 401) {
      console.warn('401 오류: 토큰 갱신 시도 중...');
      const newAccessToken = await refreshAccessToken();

      // 갱신된 토큰으로 재요청
      const retryResponse = await fetch(url, {
        method: 'POST',
        headers: getHeaders(newAccessToken),
        body: formData,
      });

      if (retryResponse.ok) {
        return await retryResponse.json(); // 재요청 성공
      }

      throw new Error(
        `재요청 실패: ${retryResponse.status} ${retryResponse.statusText}`,
      );
    }

    throw new Error(`요청 실패: ${response.status} ${response.statusText}`);
  } catch (error) {
    console.error('요청 오류:', error);
    throw error;
  }
}
