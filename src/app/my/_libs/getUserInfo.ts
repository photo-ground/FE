/* eslint-disable import/no-extraneous-dependencies */

import fetchWithAuth from '@/lib/fetchWithAuth';
import getAccessToken from '@/lib/getAccessToken';
import refreshAccessToken from '@/lib/refreshToken';
import { UpdateUserInfoProps } from '@/types/user';
import axios from 'axios';

// my : 고객 정보 조회
export async function getUserInfo() {
  try {
    const rawResponse = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getAccessToken(),
        },
      },
    );

    const response = await rawResponse.json();
    return response;
  } catch {
    return null;
  }
}

// my : 고객 정보 수정
export async function updateUserInfo(userUpdateInfo: UpdateUserInfoProps) {
  // 요청할 주소
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer`;

  try {
    // 2. 첫 번째 요청 시도
    const response = await axios.patch(url, userUpdateInfo, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAccessToken(),
      },
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
        headers: {
          'Content-Type': 'application/json',
          Authorization: getAccessToken(),
        },
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
    // 2. 첫 번째 요청 시도
    const response = await axios.patch(url, passwordInfo, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAccessToken(),
      },
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
        headers: {
          'Content-Type': 'application/json',
          Authorization: getAccessToken(),
        },
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

// my : 고객 회원 탈퇴
export async function deleteUser() {
  // 요청할 주소
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer/delete`;

  try {
    // 2. 첫 번째 요청 시도
    const response = await axios.patch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAccessToken(),
      },
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
        headers: {
          'Content-Type': 'application/json',
          Authorization: getAccessToken(),
        },
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
