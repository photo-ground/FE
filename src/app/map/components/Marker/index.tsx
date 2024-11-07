import { useLayoutEffect, useRef } from 'react';

import { Position } from '@/constants/map';
import { useNaverMapContext } from '@/contexts/naverMapContext';
import { useNaverMapsContext } from '@/contexts/naverMapsContext';
import { MARKER_HEIGHT, MARKER_WIDTH } from './style';

export default function Marker({ position }: { position: Position }) {
  const naverMaps = useNaverMapsContext();
  const mapContext = useNaverMapContext();

  useLayoutEffect(() => {
    if (!mapContext) return;

    // MarkerItem을 스타일을 가진 HTMLDivElement로 생성
    const markerItem = document.createElement('div');
    markerItem.style.width = `${MARKER_WIDTH}px`;
    markerItem.style.height = `${MARKER_HEIGHT}px`;
    markerItem.style.border = '2px solid red';
    markerItem.style.borderRadius = '100%';

    // 네이버 맵 Marker 생성
    const marker = new naverMaps.Marker({
      position: new naverMaps.LatLng(position.lat, position.lng),
      map: mapContext.map,
      icon: {
        content: markerItem,
        size: new naverMaps.Size(MARKER_WIDTH, MARKER_HEIGHT),
        anchor: new naverMaps.Point(MARKER_WIDTH / 2, MARKER_HEIGHT),
      },
    });

    // 컴포넌트 언마운트 시 Marker 제거
    return () => {
      marker.setMap(null);
    };
  }, [mapContext, naverMaps, position]);

  return null; // MarkerItem을 직접 렌더링하지 않음
}
