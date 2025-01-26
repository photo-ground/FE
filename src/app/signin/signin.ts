/* eslint-disable import/no-extraneous-dependencies */
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  user_id?: string; // JWT에 저장된 키에 따라 맞게 수정
  username?: string;
  role?: string;
  exp?: number; // 토큰 만료 시간
}

export default async function signin(
  formData: FormData,
): Promise<Response | Error> {
  try {
    console.log(formData.get('email'));
    console.log(formData.get('password'));
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
    localStorage.setItem('accessToken', accessToken);
    document.cookie = `accessToken=${accessToken}; Path=/;`;
    // console.log(accessToken.split(' ')[1]);
    const decoded: DecodedToken = jwtDecode(accessToken.split(' ')[1]);
    // console.log(decoded); // 디코드된 전체 정보 출력
    localStorage.setItem('role', decoded.role as string);

    if (!rawResponse.ok) {
      const response = await rawResponse.json();
      throw new Error(response);
    }
    return rawResponse;
  } catch (error: unknown) {
    console.error(error);
    console.error((error as Error).message || '문제가 발생했습니다.');
    return error as Error;
  }
}
