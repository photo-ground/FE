'use client';

import { ROLE } from '@/types/user';
import useUserStore from '@/store/useUserStore';
import UserPage from './UserPage';
import PhotographerProfile from './PhotographerPage';

export default function PhotographerPage() {
  const { role } = useUserStore();

  if (role === ROLE.CUSTOMER) {
    return <UserPage />;
  }

  if (role === ROLE.PHOTOGRAPHER) {
    return <PhotographerProfile />;
  }
}
