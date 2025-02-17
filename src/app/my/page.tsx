'use client';

import { Role } from '@/types/user';
import useUserStore from '@/store/useUserStore';
import UserPage from './UserPage';
import PhotographerProfile from './PhotographerPage';

export default function PhotographerPage() {
  const { role } = useUserStore();

  if (role === Role.Customer) {
    return <UserPage />;
  }

  if (role === Role.Photographer) {
    return <PhotographerProfile />;
  }
}
