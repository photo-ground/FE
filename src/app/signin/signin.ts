'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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
      },
    );

    if (!rawResponse.ok) {
      const response = await rawResponse.json();
      throw new Error(response.message);
    }

    const accessToken = rawResponse.headers.get('Authorization')!;
    const cookieStore = await cookies();
    cookieStore.set('accessToken', accessToken);
  } catch (error: unknown) {
    console.error(error);
    console.error((error as Error).message || '문제가 발생했습니다.');
    return;
  }

  redirect('/home');
}
