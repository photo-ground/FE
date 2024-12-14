import { redirect } from 'next/navigation';

export default async function goSignIn() {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 1); // 쿠키를 1일 뒤 만료로 설정

  document.cookie = `isVisited=true; path=/; expires=${expiryDate.toUTCString()}`;

  redirect('/signin');
}
