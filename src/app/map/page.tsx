'use client';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

// TODO : 페이지 접근할 때, 사용자의 학교 가져와야 함 -> 상단 chip에 적용

// components/NaverMap.js
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Drawer } from '@mui/material';
import { loadNaverMap } from './_util/naverMaps';
import makeMarker from './_util/makeMarker';
import Chip from './_components/Chip';

import photoSpots from './_data/photoSpots';
import schoolList from './_data/schoolList';
import DrawerContent from './_components/DrawerContent';

type School = {
  name: string;
  lat: number;
  lng: number;
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 76px);
  overflow: hidden;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

// 칩 버튼들을 담을 컨테이너 스타일
const ChipContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  gap: 0.5rem;
  display: flex;
  overflow-x: scroll;
  margin: 0 auto 0 1.25rem;
  padding: 1.25rem;
  padding-left: 0;
  padding-right: 1.75rem;
`;
const AbsContainer = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: calc(50% - 6rem);
  width: 12rem;
  z-index: 2;
`;

// naver.maps.*은 네이버 지도 API 스크립트가 로드된 후에만 사용할 수 있다.
export default function MapPage() {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<naver.maps.Map>();
  const [schools, setSchools] = useState<School[]>([]);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const drawerContainerRef = useRef<HTMLDivElement>(null);

  const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '';
  // 상태: 드로어 열림 여부 및 마커 정보
  const [, setSelectedMarker] = useState<{
    title: string;
    src: string;
  } | null>(null);

  const [open, setOpen] = useState(false);

  // 드로어 열기/닫기 및 마커 정보 설정
  const toggleDrawer = (
    newOpen: boolean,
    markerInfo?: { title: string; src: string },
  ) => {
    setOpen(newOpen);
    if (markerInfo) {
      setSelectedMarker(markerInfo); // 클릭한 마커 정보 저장
      // console.log(markerInfo?.title);
    }
  };

  // map/_components/NaverMap.tsx?
  useEffect(() => {
    loadNaverMap(clientId, () => {
      if (!mapElement.current) return;

      // 지도 객체 생성
      mapInstance.current = new naver.maps.Map(mapElement.current, {
        center: new naver.maps.LatLng(37.5511, 126.9407),
        zoom: 18,
      });

      // 포토스팟 로드
      photoSpots.forEach((spot, idx) => {
        makeMarker(
          mapInstance.current!,
          new naver.maps.LatLng(spot.lat, spot.lng),
          spot.title,
          idx,
          spot.src,
          toggleDrawer,
        );
      });

      // 학교 로드
      setSchools(schoolList);
    });
  }, [clientId]);

  // 학교 위치로 이동하는 함수
  const moveToSchool = (school: School) => {
    if (mapInstance.current) {
      mapInstance.current.setCenter(
        new naver.maps.LatLng(school.lat, school.lng),
      );
      setSelectedSchool(school.name);
    }
  };

  return (
    <Container>
      <MapContainer ref={mapElement} />
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
      <div
        ref={drawerContainerRef}
        style={{ position: 'relative', zIndex: 10 }}
      >
        <Drawer
          anchor="bottom"
          open={open}
          onClose={() => toggleDrawer(false)}
          container={drawerContainerRef.current}
          ModalProps={{
            keepMounted: true, // DOM이 언마운트되지 않도록 설정
          }}
          PaperProps={{
            style: {
              borderRadius: '1rem 1rem 0 0',
              backgroundColor: '#000',
              top: '50%',
              position: 'absolute',
              bottom: '76px', // 네비게이션 메뉴 높이를 고려하여 위치 조정              borderRadius: '16px 16px 0 0',
              width: 'calc(100%-2rem)',
              margin: '0 auto',
              maxWidth: '786px',
            },
          }}
        >
          <DrawerContent toggleDrawer={() => toggleDrawer(false)} />
        </Drawer>
      </div>
    </Container>
  );
}
