'use client';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

// TODO : 페이지 접근할 때, 사용자의 학교 가져와야 함 -> 상단 chip에 적용

// components/NaverMap.js
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styled, { useTheme } from 'styled-components';
import useUnivStore from '@/store/useUnivStore';
import { Drawer } from '@mui/material';
import { loadNaverMap } from './_util/naverMaps';
import makeMarker from './_util/makeMarker';
import Chip from './_components/Chip';

import photoSpots from './_data/photoSpots'; // dummy data
import DrawerContent from './_components/DrawerContent';
import { AbsContainer, ChipContainer, Container, MapContainer } from './style';
import { School } from './types';

import schoolList from './_data/schoolList'; // 더미 데이터
import Modal from './_components/Modal';
import photoSpotData from './_data/photoSpotData';
import useSpotStore from './_store';

// naver.maps.*은 네이버 지도 API 스크립트가 로드된 후에만 사용할 수 있다.
export default function MapPage() {
  const theme = useTheme();

  const mapElement = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<naver.maps.Map>();
  const [schoolArr, setSchoolArr] = useState<School[]>([]);
  // zustand상태관리

  const { univ, setUniv } = useUnivStore();
  const drawerContainerRef = useRef<HTMLDivElement>(null);

  const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '';
  // 상태: 드로어 열림 여부 및 마커 정보
  const [, setSelectedMarker] = useState<{
    title: string;
    src: string;
  } | null>(null);

  const [open, setOpen] = useState(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const setCurrPostIdIndex = useSpotStore((state) => state.setCurrPostIdIndex);

  const currPostIdIndex = useSpotStore((state) => state.currPostIdIndex);

  function toggleModal(index: number) {
    setCurrPostIdIndex(index); // 상태 저장
    setModalState(true); // 모달 열기
  }

  // 드로어 열기/닫기 및 마커 정보 설정
  const toggleDrawer = (
    newOpen: boolean,
    markerInfo?: { title: string; src: string },
  ) => {
    setOpen(newOpen);
    if (markerInfo) {
      setSelectedMarker(markerInfo); // 클릭한 마커 정보 저장
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
          new naver.maps.LatLng(spot.latitude, spot.longitude),
          spot.spotName,
          idx,
          spot.spotImageUrl,
          toggleDrawer,
        );
      });

      // 학교 로드
      setSchoolArr(schoolList);
    });
  }, [clientId]);

  // 학교 위치로 이동하는 함수
  const moveToSchool = (school: School) => {
    if (mapInstance.current) {
      mapInstance.current.setCenter(
        new naver.maps.LatLng(school.lat, school.lng),
      );
      setUniv(school.name); // TODO : zustand적용
    }
  };

  return (
    <Container>
      <MapContainer ref={mapElement} />
      {/* 칩 버튼 */}
      <ChipContainer>
        {schoolArr.map((element) => (
          <Chip
            active={univ !== null && univ !== element.name}
            key={element.name}
            text={element.name}
            variant="secondary"
            onClick={() => moveToSchool(element)}
          />
        ))}
      </ChipContainer>
      <AbsContainer>
        <Link
          href={{
            pathname: '/map/overview/school',
            query: { univ },
          }}
        >
          <Chip size="dynamic" text="스냅 전체보기" variant="primary" />
        </Link>
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
              backgroundColor: theme.colors.black,
              top: '32%',
              position: 'absolute',
              bottom: '76px', // 네비게이션 메뉴 높이를 고려하여 위치 조정
              width: 'calc(100%-2rem)',
              margin: '0 auto',
              maxWidth: '786px',
            },
          }}
        >
          <DrawerContent
            toggleDrawer={() => toggleDrawer(false)}
            toggleModal={(index) => toggleModal(index)}
          />
        </Drawer>
      </div>

      {modalState && currPostIdIndex !== null && (
        <Modal
          // currIndex={currPostIdIndex}
          setModalState={setModalState}
          photoSpot={photoSpotData}
        />
      )}
    </Container>
  );
}
