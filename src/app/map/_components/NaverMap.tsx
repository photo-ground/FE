// components/NaverMap.js
import { useEffect, useRef } from 'react';
import { loadNaverMap } from '../public/naver-maps';

export default function NaverMap() {
  const mapElement = useRef(null);
  const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '';

  useEffect(() => {
    loadNaverMap(clientId, () => {
      if (mapElement.current) {
        loadNaverMap(clientId, () => {
          if (mapElement.current) {
            const map = new naver.maps.Map(mapElement.current, {
              center: new naver.maps.LatLng(37.3595704, 127.105399),
              zoom: 10,
            });
          }
        });
      }
    });
  }, []);

  return <div ref={mapElement} style={{ width: '100%', height: '500px' }} />;
}
