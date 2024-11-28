'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function goSignIn() {
  const cookieStore = await cookies();

  const oneDayInSeconds = 24 * 60 * 60;
  cookieStore.set('isVisited', 'true', {
    maxAge: Math.floor(Date.now() / 1000) + oneDayInSeconds,
  });
  redirect('/signin');
}
