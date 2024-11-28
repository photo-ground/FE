'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function goOnboarding() {
  const cookieStore = await cookies();
  cookieStore.set('isVisited', 'true');
  redirect('/onboarding');
}
