import { useLayoutEffect } from 'react';

import { Position } from '@/constants/map';
import { useNaverMapContext } from '@/contexts/naverMapContext';
import { useNaverMapsContext } from '@/contexts/naverMapsContext';
import { MARKER_HEIGHT, MARKER_WIDTH } from './style';

/**
 * 네이버 지도에 마커를 생성하고 표시합니다.
 * @param position - 마커가 표시될 좌표 (위도 및 경도)
 * @returns null / 화면에 아무 것도 렌더링하지 않으며, 지도에 마커를 설정합니다.
 */
export default function Marker({ position }: { position: Position }) {
  const naverMaps = useNaverMapsContext();
  const mapContext = useNaverMapContext();

  useLayoutEffect(() => {
    if (!mapContext) return;

    // MarkerItem HTMLDivElement로 생성
    // 스타일링은 임시로 두었습니다.
    const markerItem = document.createElement('div');
    markerItem.style.width = `${MARKER_WIDTH}px`;
    markerItem.style.height = `${MARKER_HEIGHT}px`;
    markerItem.style.border = '2px solid red';
    markerItem.style.borderRadius = '100%';

    // [error] naver 예제에서는 new를 사용하던데 no-new 에러가 뜹니다
    // 다른 해결 방법을 못찾겠어요
    // eslint-disable-next-line no-new
    new naverMaps.Marker({
      position: new naverMaps.LatLng(position.lat, position.lng),
      map: mapContext.map,
      icon: {
        content: markerItem,
        size: new naverMaps.Size(MARKER_WIDTH, MARKER_HEIGHT),
        anchor: new naverMaps.Point(MARKER_WIDTH / 2, MARKER_HEIGHT),
      },
    });
  }, [mapContext, naverMaps, position]);

  return null;
}
