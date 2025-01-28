'use client';

import useUserStore from '@/store/useUserStore';
import UserPage from './UserPage';

export default function PhotographerPage() {
  const role = useUserStore((state) => state.role);

  if (role === 'ROLE_CUSTOMER') {
    return <UserPage />;
  }
}
