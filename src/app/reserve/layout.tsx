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
        title="잠깐!"
        content="변경해주신 회원정보를 반영했어요"
        confirmText="로그인 후 시용할 수 있어요!"
        onConfirm={() => router.replace('/signin')}
      />
    );
  }

  return children;
}

export const runtime = 'edge';
