'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isUserAuthenticated } from '@/lib/authentication';
import Modal from './_component/Modal';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        // Call the server-side function to check authentication
        const authResult = await isUserAuthenticated();

        setIsAuthenticated(authResult);
        setIsLoading(false);
      } catch (error) {
        console.error('Authentication check failed', error);
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    }

    checkAuth();
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

  return <div>{children}</div>;
}

export const runtime = 'edge';
