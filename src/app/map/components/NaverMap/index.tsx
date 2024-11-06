import { useLayoutEffect, useRef, useState, ReactNode, useMemo } from 'react';

import { useNaverMapsContext } from '@/contexts/naverMapsContext';
import { NaverMapContext } from '@/contexts/naverMapContext';
import { Position } from '@/constants/map';

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

  // make map object
  useLayoutEffect(() => {
    if (!naverMaps) {
      return;
    }

    const newMap = new naverMaps.Map(ref.current as HTMLDivElement, {
      center: new naverMaps.LatLng(position.lat, position.lng),
      zoom: 17,
    });

    setMap(newMap);
  }, [naverMaps, position.lat, position.lng]);

  const providerValue = useMemo(() => ({ map }), [map]);

  return (
    <NaverMapContext.Provider value={providerValue}>
      <div ref={ref} style={{ width: '100%', height: '100%' }} />
      {children}
    </NaverMapContext.Provider>
  );
}
