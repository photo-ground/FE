/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import generateCustomMarkerHTML from '../_components/generateCustomMapMarker';

/**
 * 마커를 생성하는 함수
 * @param map - 네이버 맵 인스턴스
 * @param position - 마커의 위치 (LatLng 객체)
 * @param index - 마커의 인덱스
 * @returns 생성된 Marker 객체
 */

export default function makeMarker(
  map: naver.maps.Map,
  position: naver.maps.LatLng,
  title: string,
  spotId: number,
  src: string,
  toggleDrawer: (
    open: boolean,
    markerInfo: { title: string; src: string; spotId: number },
  ) => void,
): naver.maps.Marker {
  const marker = new naver.maps.Marker({
    map,
    position,
    icon: {
      content: generateCustomMarkerHTML({
        src,
        title,
      }), // React 컴포넌트가 렌더링된 DOM 요소
      size: new naver.maps.Size(72, 64),
      anchor: new naver.maps.Point(36, 64), // 마커의 중앙 하단으로 위치 조정
    },
  });

  marker.addListener('click', () => {
    // console.log('Marker clicked');
    toggleDrawer(true, { title, src, spotId });
  });

  return marker;
}
