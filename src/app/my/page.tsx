'use client';

import useUserStore from '@/store/useUserStore';
import UserPage from './UserPage';
import PhotographerProfile from './PhotographerPage';

export default function PhotographerPage() {
  const role = useUserStore((state) => state.role);

  if (role === 'ROLE_CUSTOMER') {
    return <UserPage />;
  }

  if (role === 'ROLE_PHOTOGRAPHER') {
    return <PhotographerProfile />;
  }
}
