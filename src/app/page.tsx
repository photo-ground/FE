'use client';

import { redirect } from 'next/navigation';

// TODO : 로그인 여부에 따른 예외처리
export default function Home() {
  // const session = await auth(); // auth확인해서 ()
  // // 사용자가 존재하면
  // if (session?.user) {
  //   redirect('/home'); // 홈으로
  //   return null; // 아니면 null (예외)
  // }
  // return <Main />; // 사용자가 없으면 splash(?)

  redirect('/home');
}
