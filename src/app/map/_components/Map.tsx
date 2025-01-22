import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { NaverMap } from '../_types/NaverMap';

type MapOptions = {
  mapId: string; // 필수
  center?: [number, number]; // 선택
  zoom?: number; // 선택
  onLoad?: (map: NaverMap) => void; // 선택
};

const MapComponent = ({
  mapId,
  center = [37.5665, 126.978], // 기본 중심 좌표
  zoom = 10, // 기본 줌 레벨
  onLoad,
}: MapOptions) => {
  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(...center),
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
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
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
};

export default MapComponent;
