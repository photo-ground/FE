import { NaverMapType } from '@/contexts/naverMapsContext';
import { useEffect, useState } from 'react';

export default function useNaverMap() {
  const [naverMaps, setNaverMaps] = useState<NaverMapType | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.naver.maps) {
      return undefined;
    }

    const script = document.createElement('script');
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}&submodules=panorama,geocoder,drawing`;
    script.async = true;

    script.onload = () => {
      setNaverMaps(window.naver.maps);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return naverMaps;
}
