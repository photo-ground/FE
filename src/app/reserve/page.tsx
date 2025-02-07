'use client';

import { ROLE } from '@/types/user';
import useUserStore from '@/store/useUserStore';
import ReserveScreen from './screen';
import TemporaryScreen from './test';

export default function ReservePage() {
  const { role } = useUserStore();

  if (role === ROLE.CUSTOMER) return <ReserveScreen />;

  return <TemporaryScreen />;
}

export const runtime = 'edge';
