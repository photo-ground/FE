'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import AlertModal from '@/components/modals/AlertModal';
import CheckIcon from '@/assets/CheckIcon';
import useUserStore from '@/store/useUserStore';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const router = useRouter();

  // Redirect if not authenticated
  if (!isLoggedIn) {
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
