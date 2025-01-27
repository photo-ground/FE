/* eslint-disable import/no-extraneous-dependencies */

import refreshAccessToken from '@/lib/refreshToken';
import { UpdateUserInfoProps } from '@/types/user';
import axios from 'axios';

// 기본 헤더 구성
const getHeaders = (token: string) => ({
  Authorization: `${token}`,
});

// my : 고객 정보 조회
export async function getReviews() {
  // 요청할 주소
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/review`;

  try {
    // 1. Access Token 가져오기
    const accessToken = localStorage.getItem('accessToken');

    // 2. 첫 번째 요청 시도
    const response = await axios.get(url, {
      headers: getHeaders(accessToken || ''),
    });

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // 3. 401 오류 발생 시 토큰 갱신
    if (error.response?.status === 401) {
      const newAccessToken = await refreshAccessToken();
      localStorage.setItem('accessToken', newAccessToken); // 갱신된 토큰 저장

      // 4. 갱신된 토큰으로 재요청
      const retryResponse = await axios.post(url, {
        headers: getHeaders(newAccessToken),
      });

      return retryResponse.data;
    }

    // 5. 기타 오류 처리
    console.error('Error uploading content:', error);
    throw error;
  }
}

// my : 고객 정보 수정
export async function updateUserInfo(userUpdateInfo: UpdateUserInfoProps) {
  // 요청할 주소
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer`;

  // console.log(userUpdateInfo);
  try {
    // 1. Access Token 가져오기
    const accessToken = localStorage.getItem('accessToken');

    // 2. 첫 번째 요청 시도
    const response = await axios.patch(url, userUpdateInfo, {
      headers: getHeaders(accessToken || ''),
    });

    if (response.status === 200) {
      return response.data;
    }

    return '회원정보 수정에 실패했습니다.';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // 3. 401 오류 발생 시 토큰 갱신
    if (error.response?.status === 401) {
      const newAccessToken = await refreshAccessToken();
      localStorage.setItem('accessToken', newAccessToken); // 갱신된 토큰 저장

      // 4. 갱신된 토큰으로 재요청
      const retryResponse = await axios.patch(url, userUpdateInfo, {
        headers: getHeaders(newAccessToken),
      });

      if (retryResponse.status === 200) {
        return retryResponse.data;
      }

      return '회원정보 수정에 실패했습니다.';
    }

    // 5. 기타 오류 처리
    console.error('Error uploading content:', error);
    throw error;
  }
}

// my : 고객 비밀번호 변경
export async function updateUserPassword({ password }: { password: string }) {
  // 요청할 주소
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer/password`;
  const passwordInfo = { password };
  try {
    // 1. Access Token 가져오기
    const accessToken = localStorage.getItem('accessToken');

    // 2. 첫 번째 요청 시도
    const response = await axios.patch(url, passwordInfo, {
      headers: getHeaders(accessToken || ''),
    });

    if (response.status === 200) {
      return response;
    }

    return '회원정보 수정에 실패했습니다.';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // 3. 401 오류 발생 시 토큰 갱신
    if (error.response?.status === 401) {
      const newAccessToken = await refreshAccessToken();
      localStorage.setItem('accessToken', newAccessToken); // 갱신된 토큰 저장

      // 4. 갱신된 토큰으로 재요청
      const retryResponse = await axios.patch(url, passwordInfo, {
        headers: getHeaders(newAccessToken),
      });

      if (retryResponse.status === 200) {
        return retryResponse;
      }

      return '회원정보 수정에 실패했습니다.';
    }

    // 5. 기타 오류 처리
    console.error('Error uploading content:', error);
    throw error;
  }
}

// my : 고객 회원 탈퇴퇴
export async function deleteUser() {
  // 요청할 주소
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer/delete`;

  try {
    // 1. Access Token 가져오기
    const accessToken = localStorage.getItem('accessToken');

    // 2. 첫 번째 요청 시도
    const response = await axios.patch(url, {
      headers: getHeaders(accessToken || ''),
    });

    if (response.status === 200) {
      return response;
    }

    return '회원정보 수정에 실패했습니다.';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // 3. 401 오류 발생 시 토큰 갱신
    if (error.response?.status === 401) {
      const newAccessToken = await refreshAccessToken();
      localStorage.setItem('accessToken', newAccessToken); // 갱신된 토큰 저장

      // 4. 갱신된 토큰으로 재요청
      const retryResponse = await axios.patch(url, {
        headers: getHeaders(newAccessToken),
      });

      if (retryResponse.status === 200) {
        return retryResponse;
      }

      return '회원 탈퇴에 실패했습니다.';
    }

    // 5. 기타 오류 처리
    console.error('Error uploading content:', error);
    throw error;
  }
}
