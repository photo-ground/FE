'use server';

import { cookies } from 'next/headers';
import axios from 'axios';
import refreshAccessToken from '@/lib/refreshToken';

// 기본 헤더 구성
const getHeaders = (token: string, cookieString?: string) => ({
  Authorization: `Bearer ${token}`,
  Cookie: cookieString || '', // 쿠키를 헤더에 포함
  'Content-Type': 'application/json',
});

// my : 고객 회원 탈퇴
export default async function deleteUser() {
  const cookieStore = cookies();

  // 요청할 주소
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer/delete`;

  try {
    // 1. Access Token 가져오기
    const accessToken = (await cookieStore).get('accessToken')?.value;
    const cookieString = (await cookieStore)
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join('; ');

    if (!accessToken) {
      throw new Error('Access token is missing');
    }

    console.log(accessToken);
    // 2. 첫 번째 요청 시도
    const response = await axios.patch(
      url,
      {},
      {
        headers: getHeaders(accessToken, cookieString),
        withCredentials: true, // 서버와 쿠키 공유
      },
    );

    if (response.status === 200) {
      return response.data;
    }

    return '회원 탈퇴에 실패했습니다.';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // 3. 401 오류 발생 시 토큰 갱신
    if (error.response?.status === 401) {
      const newAccessToken = await refreshAccessToken();

      // 4. 갱신된 토큰으로 재요청
      const retryResponse = await axios.patch(
        url,
        {},
        {
          headers: getHeaders(newAccessToken),
          withCredentials: true,
        },
      );

      if (retryResponse.status === 200) {
        return retryResponse.data;
      }

      return '회원 탈퇴에 실패했습니다.';
    }

    // 5. 기타 오류 처리
    console.error('Error uploading content:', error);
    throw error;
  }
}
