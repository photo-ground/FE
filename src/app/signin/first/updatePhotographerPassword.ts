/* eslint-disable import/no-extraneous-dependencies */
import getAccessToken from '@/lib/getAccessToken';
import refreshAccessToken from '@/lib/refreshToken';
import axios from 'axios';

// my : 고객 정보 수정
export default async function updatePhotographerPassword(password: string) {
  // 요청할 주소
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer/password`;

  try {
    // 2. 첫 번째 요청 시도
    const response = await axios.patch(url, password, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAccessToken(),
      },
    });

    if (response.status === 200) {
      return response.data;
    }

    return response.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // 3. 401 오류 발생 시 토큰 갱신
    if (error.response?.status === 401) {
      const newAccessToken = await refreshAccessToken();
      localStorage.setItem('accessToken', newAccessToken); // 갱신된 토큰 저장

      // 4. 갱신된 토큰으로 재요청
      const retryResponse = await axios.patch(url, password, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: getAccessToken(),
        },
      });

      if (retryResponse.status === 200) {
        return retryResponse.data;
      }

      return retryResponse.data;
    }

    // 5. 기타 오류 처리
    console.error('Error uploading content:', error);
    throw error;
  }
}
