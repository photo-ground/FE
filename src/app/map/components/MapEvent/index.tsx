import { useNaverMapContext } from '@/contexts/naverMapContext';
import { useNaverMapsContext } from '@/contexts/naverMapsContext';
import { useLayoutEffect } from 'react';

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
