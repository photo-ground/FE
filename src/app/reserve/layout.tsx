'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import checkAuth from '@/lib/checkAuth';
import Modal from '../my/_component/Modal';

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
      <Modal
        onClose={() => router.replace('/signin')}
        buttonValue="로그인 하기"
        modalTitle="잠깐!"
        modalText="로그인 후 시용할 수 있어요!"
      />
    );
  }

  return children;
}

export const runtime = 'edge';
