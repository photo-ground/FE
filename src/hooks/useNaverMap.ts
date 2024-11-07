import { NaverMapType } from '@/contexts/naverMapsContext';
import { useEffect, useState } from 'react';
/**
 * 네이버 지도를 로드하고 naverMaps 객체를 반환하는 커스텀 훅입니다.
 *
 * - 최초 로드 시 스크립트를 동적으로 추가하여 네이버 지도 API를 로드합니다.
 * - 이후 `naverMaps` 객체를 상태로 설정해 필요한 컴포넌트에서 사용할 수 있도록 합니다.
 *
 * @returns {NaverMapType | null} - 네이버 지도 API가 로드되면 `naverMaps` 객체를 반환하고, 로드되지 않았으면 `null`을 반환합니다.
 */
export default function useNaverMap() {
  const [naverMaps, setNaverMaps] = useState<NaverMapType | null>(null);

  useEffect(() => {
    if (naverMaps) {
      return undefined;
    }

    if (typeof window !== 'undefined' && window.naver?.maps) {
      setNaverMaps(window.naver.maps);
      return undefined;
    }

    const script = document.createElement('script');
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`;
    script.async = true;

    script.onload = () => {
      setNaverMaps(window.naver.maps);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [naverMaps]);

  return naverMaps;
}
