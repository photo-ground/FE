import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import useUnivStore from '@/store/useUnivStore';
import { NaverMap } from '../_types/NaverMap';
import { School } from '../types';
import schoolList from '../_data/schoolList';

type MapOptions = {
  mapId: string; // 필수
  center?: [number, number]; // 선택
  zoom?: number; // 선택
  onLoad?: (map: NaverMap) => void; // 선택
};

function MapComponent({
  mapId,
  center = [37.5511, 126.9407],
  zoom = 10, // 기본 줌 레벨
  onLoad,
}: MapOptions) {
  const mapRef = useRef<NaverMap | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>(center);
  const { univ } = useUnivStore();

  useEffect(() => {
    const school = schoolList.find((element: School) => element.name === univ);
    if (school) {
      setMapCenter([school.lat, school.lng]);
    }
  }, [setMapCenter, univ]);

  const initializeMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(...mapCenter),
      zoom,
    };
    const mapElement = document.getElementById(mapId);
    if (mapElement) {
      mapRef.current = new naver.maps.Map(mapElement, mapOptions);
      onLoad?.(mapRef.current); // onLoad 콜백 호출
    }
  };

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        onLoad={initializeMap}
      />
      <div
        id={mapId}
        style={{
          zIndex: '1',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      />
    </>
  );
}

export default MapComponent;
