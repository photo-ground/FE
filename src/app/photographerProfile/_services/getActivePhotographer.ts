/* eslint-disable import/no-extraneous-dependencies */

import refreshAccessToken from '@/lib/refreshToken';
import { PhotographerProps } from '@/types/photographer';
import { PhotoSpotListProps } from '@/types/photoSpot';
import { PostUploadContainerProps } from '@/types/post';
import axios from 'axios';

export async function getActivePhotographer(): Promise<PhotographerProps> {
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

export async function postNewContent(
  photographerId: number,
  newContent: PostUploadContainerProps,
) {
  const formData = new FormData();

  // JSON 데이터를 FormData에 추가
  // formData.append('jsonData', JSON.stringify(newContent.postInfo));

  // JSON 데이터를 Blob으로 추가
  const postInfoBlob = new Blob([JSON.stringify(newContent.postInfo)], {
    type: 'application/json',
  });
  formData.append('postInfo', postInfoBlob);

  // 사진 파일 추가
  newContent.photos.forEach((photo, index) => {
    formData.append(`photos`, photo);
  });
  // FormData 데이터 확인
  // for (const [key, value] of formData.entries()) {
  //   if (value instanceof Blob) {
  //     console.log(`Key: ${key}, Value: [Blob], Type: ${value.type}`);
  //   } else {
  //     console.log(`Key: ${key}, Value: ${value}`);
  //   }
  // }
  // 기본 헤더 구성
  const getHeaders = (token: string) => ({
    Authorization: `${token}`,
    'Content-Type': 'multipart/form-data',
  });

  // const getHeaders = () => ({
  //   'Content-Type': 'multipart/form-data',
  // });

  // 요청할 주소
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${photographerId}`;

  try {
    // 1. Access Token 가져오기
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    console.log(formData);

    // 2. 첫 번째 요청 시도
    const response = await axios.post(url, formData, {
      headers: getHeaders(accessToken || ''),
    });
    console.log(response);

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // 3. 401 오류 발생 시 토큰 갱신
    if (error.response?.status === 401) {
      const newAccessToken = await refreshAccessToken();
      console.log(newAccessToken);
      localStorage.setItem('accessToken', newAccessToken); // 갱신된 토큰 저장

      // 4. 갱신된 토큰으로 재요청
      const retryResponse = await axios.post(url, formData, {
        headers: getHeaders(newAccessToken),
      });

      console.log(retryResponse);
      return retryResponse.data;
    }

    // 5. 기타 오류 처리
    console.error('Error uploading content:', error);
    throw error;
  }
}
