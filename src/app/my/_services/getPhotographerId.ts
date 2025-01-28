import refreshAccessToken from '@/lib/refreshToken';
import axios from 'axios';

// 기본 헤더 구성
const getHeaders = (token: string) => ({
  Authorization: `${token}`,
});

// my : 고객 정보 조회
export default async function getPhotographerId(token: string) {
  // 요청할 주소
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer/myId`;

  try {
    // 2. 첫 번째 요청 시도
    const response = await axios.get(url, {
      headers: { Authorization: token },
    });

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // 3. 401 오류 발생 시 토큰 갱신
    if (error.response?.status === 401) {
      const newAccessToken = await refreshAccessToken();
      localStorage.setItem('accessToken', newAccessToken); // 갱신된 토큰 저장

      // 4. 갱신된 토큰으로 재요청
      const retryResponse = await axios.get(url, {
        headers: getHeaders(newAccessToken),
      });

      return retryResponse.data;
    }
    if (error.response?.status === 403) {
      // alert('재로그인이 필요합니다.');
      throw error;
    }

    // 5. 기타 오류 처리
    console.error('Error uploading content:', error);
    throw error;
  }
}
