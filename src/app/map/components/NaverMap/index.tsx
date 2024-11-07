import { useLayoutEffect, useRef, useState, ReactNode, useMemo } from 'react';

import { useNaverMapsContext } from '@/contexts/naverMapsContext';
import { NaverMapContext } from '@/contexts/naverMapContext';
import { Position } from '@/constants/map';
import MapContainer from './style';

const ZOOM_LEVEL = 17;

/**
 * 네이버 지도 컴포넌트입니다.
 *
 * - 상위에 NaverMapsProvider가 존재해야 합니다.
 * @param children - Marker 및 MapEvent 컴포넌트들
 * @param position - 지도의 초기 중심 좌표
 * @returns 지도를 담고 있는 div element
 */
export default function NaverMap({
  children,
  position,
}: {
  children: ReactNode;
  position: Position;
}) {
  const naverMaps = useNaverMapsContext();
  const ref = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<typeof naverMaps.Map | undefined>();

  useLayoutEffect(() => {
    if (!naverMaps) {
      return;
    }

    const newMap = new naverMaps.Map(ref.current as HTMLDivElement, {
      center: new naverMaps.LatLng(position.lat, position.lng),
      zoom: ZOOM_LEVEL,
    });

    setMap(newMap);
  }, [naverMaps, position.lat, position.lng]);

  const providerValue = useMemo(() => ({ map }), [map]);

  return (
    <NaverMapContext.Provider value={providerValue}>
      <MapContainer ref={ref} />
      {children}
    </NaverMapContext.Provider>
  );
}
