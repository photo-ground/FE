import { useNaverMapContext } from '@/contexts/naverMapContext';
import { useNaverMapsContext } from '@/contexts/naverMapsContext';
import { useLayoutEffect } from 'react';

/**
 * 지정된 이벤트 유형에 대한 이벤트 리스너를 네이버 지도 인스턴스에 추가합니다.
 * @param eventType - 리스너를 추가할 이벤트 유형 (ex. "click", "zoom_changed")
 * @param callback - 이벤트를 처리할 콜백 함수
 * @returns null / 화면에 출력되지 않으며, 지도에 이벤트 리스너만 설정합니다.
 */
export default function MapEvent({
  eventType,
  callback,
}: {
  eventType: string;
  callback: (event: Event) => void;
}) {
  const naverMaps = useNaverMapsContext();
  const mapContext = useNaverMapContext();

  useLayoutEffect(() => {
    if (!naverMaps || !mapContext?.map) {
      return;
    }

    naverMaps.Event.addListener(mapContext.map, eventType, callback);
  }, [naverMaps, mapContext, eventType, callback]);

  return null;
}
