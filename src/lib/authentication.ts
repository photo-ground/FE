'use server';

import { cookies } from 'next/headers';

export async function isUserAuthenticated() {
  const token = (await cookies()).get('accessToken');
  // console.log(token);
  return !!token;
}

export async function saveAccessToken(token: string) {
  (await cookies()).set('accessToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
}

export async function removeAccessToken() {
  (await cookies()).delete('accessToken');
}
