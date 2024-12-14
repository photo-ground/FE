import { redirect } from 'next/navigation';

export default async function goOnboarding() {
  document.cookie = `isVisited=true; path=/;`;
  redirect('/onboarding');
}
