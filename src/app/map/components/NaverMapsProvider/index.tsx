import { ReactNode } from 'react';

import { NaverMapsContext } from '@/contexts/naverMapsContext';
import useNaverMap from '@/hooks/useNaverMap';

export default function NaverMapsProvider({
  children,
}: {
  children: ReactNode;
}) {
  // naver에서 제공하는 maps 객체입니다.
  // maps의 위도와 경도, 마커, 이벤트 등의 속성에 접근할 수 있습니다.
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
