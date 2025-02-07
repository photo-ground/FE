import { jwtDecode } from 'jwt-decode';
import { ROLE } from '@/types/user';
import getPhotographerId from '../my/_libs/getPhotographerId';

interface DecodedToken {
  user_id?: string; // JWT에 저장된 키에 따라 맞게 수정
  username?: string;
  role?: string;
  exp?: number; // 토큰 만료 시간
}

export async function getUserInfo(token: string) {
  try {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );

    const response = await rawResponse.json();
    return response;
  } catch {
    return null;
  }
}

export default async function signin(formData: FormData) {
  try {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
      {
        method: 'POST',
        body: JSON.stringify({
          email: formData.get('email'),
          password: formData.get('password'),
        }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      },
    );

    const accessToken = rawResponse.headers.get('Authorization')!;
    document.cookie = `accessToken=${accessToken}; Path=/;`;
    const decoded: DecodedToken = jwtDecode(accessToken.split(' ')[1]);
    const { role } = decoded;

    if (role === ROLE.CUSTOMER) {
      const user = await getUserInfo(accessToken);
      return {
        ok: true,
        data: { accessToken, role, univ: user?.univ },
      };
    }

    if (role === ROLE.PHOTOGRAPHER) {
      const { photographerId } = await getPhotographerId(accessToken);
      return { ok: true, data: { accessToken, role, photographerId } };
    }

    return { ok: true, data: { accessToken, role } };
  } catch (error: unknown) {
    console.error((error as Error).message || '문제가 발생했습니다.');
    return { ok: false };
  }
}
