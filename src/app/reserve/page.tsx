'use client';

import useUserStore from '@/store/useUserStore';
import ReserveScreen from './screen';
import TemporaryScreen from './test';

export default function ReservePage() {
  const role = useUserStore((state) => state.role);

  if (role === 'ROLE_CUSTOMER') return <ReserveScreen />;

  return <TemporaryScreen />;
}

export const runtime = 'edge';
