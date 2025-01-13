import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('isVisited')?.value;
  const isVisited = request.cookies.get('isVisited')?.value === 'true';

  // 로그인한 경우, 어느 페이지든 이동 가능
  if (accessToken) {
    return NextResponse.next();
  }

  // 방문 기록이 없고, /splash 페이지가 아니라면 리디렉션
  if (!isVisited && !(request.nextUrl.pathname === '/splash')) {
    const url = request.nextUrl.clone();
    url.pathname = '/splash';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!splash|api|_next|favicon.ico).*)'],
};
