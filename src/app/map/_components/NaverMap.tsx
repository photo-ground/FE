/* eslint-disable no-undef */
// components/NaverMap.js
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { loadNaverMap } from '../public/naver-maps';
import makeMarker from '../public/makeMarker';
import Chip from './Chip';
// import CTAButton from '@/components/atoms/CTAButton';

type School = {
  name: string;
  position: naver.maps.LatLng;
};

// 칩 버튼들을 담을 컨테이너 스타일
const ChipContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 10px;
  z-index: 1000;
`;
const AbsContainer = styled.div`
  position: absolute;
  bottom: 76px;
  left: calc(50% - 30px);
  width: 12rem;
`;
export default function NaverMap() {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<naver.maps.Map>();
  const [schools, setSchools] = useState<School[]>([]);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

  const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '';

  // const photoSpot = [ {
  //   title: '서강대학교',
  //   position: new naver.maps.LatLng(37.5511, 126.9407),
  // },]

  useEffect(() => {
    loadNaverMap(clientId, () => {
      if (!mapElement.current) return;

      // 지도 객체 생성
      mapInstance.current = new naver.maps.Map(mapElement.current, {
        center: new naver.maps.LatLng(37.5511, 126.9407),
        zoom: 18,
      });
      const viewportWidth = window.innerWidth;

      // TODO 마커 추가 w/ for loop
      makeMarker(
        mapInstance.current,
        new naver.maps.LatLng(37.563625, 126.942826),
        '마커1',
        0,
        viewportWidth,
        '/images/ewha.jpg',
      );
      makeMarker(
        mapInstance.current,
        new naver.maps.LatLng(37.564685, 126.943826),
        '마커2',
        1,
        viewportWidth,
        '/images/ewha.jpg',
      );
      makeMarker(
        mapInstance.current,
        new naver.maps.LatLng(37.56285, 126.944826),
        '마커3',
        2,
        viewportWidth,
        '/images/ewha.jpg',
      );
      // 학교 데이터 로드
      const loadedSchools: School[] = [
        {
          name: '서강대학교',
          position: new naver.maps.LatLng(37.5511, 126.9407),
        },
        {
          name: '연세대학교',
          position: new naver.maps.LatLng(37.5647, 126.9386),
        },
        {
          name: '이화여자대학교',
          position: new naver.maps.LatLng(37.5617, 126.9468),
        },
        {
          name: '홍익대학교',
          position: new naver.maps.LatLng(37.5519, 126.9246),
        },
      ];

      setSchools(loadedSchools);
    });
  }, [clientId]);

  // 학교 위치로 이동하는 함수
  const moveToSchool = (school: School) => {
    if (mapInstance.current) {
      mapInstance.current.setCenter(school.position);
      setSelectedSchool(school.name);
    }
  };

  return (
    <>
      <div
        ref={mapElement}
        style={{ width: '100%', height: 'calc(100vh - 76px)' }}
      />
      {/* 칩 버튼 */}
      <ChipContainer>
        {schools.map((school) => (
          <Chip
            active={selectedSchool !== null && selectedSchool !== school.name}
            key={school.name}
            text={school.name}
            variant="secondary"
            onClick={() => moveToSchool(school)}
          />
        ))}
      </ChipContainer>
      <AbsContainer>
        <Chip text="스냅 전체보기" variant="primary" />
      </AbsContainer>
    </>
  );
}
