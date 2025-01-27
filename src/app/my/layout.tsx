'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import checkAuth from '@/lib/checkAuth';
import AlertModal from '@/components/modals/AlertModal';
import CheckIcon from '@/assets/CheckIcon';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function authenticate() {
      const authResult = await checkAuth(); // 분리된 함수 호출
      setIsAuthenticated(authResult);
      setIsLoading(false);
    }

    authenticate();
  }, []);

  // Show loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return (
      <AlertModal
        icon={<CheckIcon />}
        title="로그인 후 이용해주세요!"
        content="예약 및 작가 탐색을 더 쉽게 할 수 있어요"
        confirmText="로그인"
        onConfirm={() => router.replace('/signin')}
      />
    );
  }

  return <div>{children}</div>;
}

export const runtime = 'edge';
