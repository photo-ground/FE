import { useLayoutEffect, useRef } from 'react';

import { Position } from '@/constants/map';
import { useNaverMapContext } from '@/contexts/naverMapContext';
import { useNaverMapsContext } from '@/contexts/naverMapsContext';
import { MARKER_HEIGHT, MARKER_WIDTH, MarkerItem } from './style';

export default function Marker({ position }: { position: Position }) {
  const naverMaps = useNaverMapsContext();
  const mapContext = useNaverMapContext();
  const markerRef = useRef(null);

  useLayoutEffect(() => {
    if (!markerRef.current || !mapContext) {
      return;
    }

    // [error] 네이버 예제에서는 이렇게 하던데(TS가 아니라 JS)
    // no-new 규칙을 지킬 방법을 못찾겠어요
    // eslint-disable-next-line no-new
    new naverMaps.Marker({
      position: new naverMaps.LatLng(position.lat, position.lng),
      map: mapContext.map,
      icon: {
        content: markerRef.current,
        size: new naverMaps.Size(MARKER_WIDTH, MARKER_HEIGHT),
        anchor: new naverMaps.Point(MARKER_WIDTH / 2, MARKER_HEIGHT),
      },
    });
  }, [mapContext, naverMaps, position]);

  return <MarkerItem ref={markerRef} />;
}
