import { ReactNode } from 'react';

import { NaverMapsContext } from '@/contexts/naverMapsContext';
import useNaverMap from '@/hooks/useNaverMap';

export default function NaverMapsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const naverMaps = useNaverMap();

  if (!naverMaps) {
    return null;
  }

  return (
    <NaverMapsContext.Provider value={naverMaps}>
      {children}
    </NaverMapsContext.Provider>
  );
}
