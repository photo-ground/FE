'use client';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

// TODO : 페이지 접근할 때, 사용자의 학교 가져와야 함 -> 상단 chip에 적용

// components/NaverMap.js
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { PhotoSpotListProps, PhotoSpotProps } from '@/types/photoSpot';
import { useTheme } from 'styled-components';
import useUnivStore from '@/store/useUnivStore';
import { useQuery } from '@tanstack/react-query';
import { Drawer } from '@mui/material';

// import { loadNaverMap } from './_util/naverMaps';
import makeMarker from './_util/makeMarker';
import Chip from './_components/Chip';
import { AbsContainer, ChipContainer, Container } from './style';
import MapComponent from './_components/Map';

import { School } from './types';

import schoolList from './_data/schoolList'; // 더미 데이터
// import Modal from './_components/Modal';
import {
  getPhotoSpotByUniv,
  getSelectedSpotInfo,
} from './_services/getPhotoSpot';
import DrawerContent from './_components/DrawerContent';
import { NaverMap } from './_types/NaverMap';

// naver.maps.*은 네이버 지도 API 스크립트가 로드된 후에만 사용할 수 있다.
export default function MapPage() {
  const theme = useTheme();

  const drawerContainerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false); // Drawer 열림 상태
  const [selectedSpotInfo, setSelectedSpotInfo] =
    useState<PhotoSpotProps | null>(null);
  const mapInstance = useRef<NaverMap | null>(null); // `mapInstance` 관리
  const [isMapReady, setIsMapReady] = useState<boolean>(false);
  const markersRef = useRef<naver.maps.Marker[]>([]); // 현재 활성화된 마커 목록

  // zustand상태관리
  const { univ, setUniv } = useUnivStore();
  const [schoolArr] = useState<School[]>(schoolList);
  // useState<PhotoSpotProps | null>(null);

  // spot data 가져오기
  const { data: photoSpots, isSuccess } = useQuery<PhotoSpotListProps[]>({
    queryKey: ['photoSpotList', univ],
    queryFn: () => getPhotoSpotByUniv(univ),
  });

  // 드로어 열기/닫기 및 마커 정보 설정
  const toggleDrawer = async (
    isOpen: boolean,
    markerInfo?: { title: string; src: string; spotId: number },
  ) => {
    setOpen(isOpen);

    if (isOpen && markerInfo) {
      try {
        const spotInfo = await getSelectedSpotInfo(markerInfo.spotId);
        setSelectedSpotInfo(spotInfo);
      } catch (error) {
        console.error('Failed to fetch spot info:', error);
      }
    } else {
      setSelectedSpotInfo(null);
    }
  };

  // 특정 학교로 이동 및 마커 로드
  const moveToSchool = (school: School) => {
    if (!mapInstance.current) {
      console.warn('Map instance is not ready yet.');
      return;
    }

    // 지도 중심 이동
    mapInstance.current.setCenter(
      new naver.maps.LatLng(school.lat, school.lng),
    );
    setUniv(school.name);

    // 기존 마커 제거
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    // 새로운 마커 추가
    if (photoSpots && isSuccess) {
      const newMarkers = photoSpots.map((spot) =>
        makeMarker(
          mapInstance.current!,
          new naver.maps.LatLng(spot.latitude, spot.longitude),
          spot.spotName,
          spot.spotId,
          spot.spotImageUrl,
          toggleDrawer,
        ),
      );
      markersRef.current = newMarkers; // 마커 목록 업데이트
    }
  };

  const onMapLoad = (map: NaverMap) => {
    mapInstance.current = map;
    setIsMapReady(true); // 맵 로드 상태를 업데이트

    // 초기 마커 추가
    if (photoSpots) {
      const initialMarkers = photoSpots.map((spot) =>
        makeMarker(
          map,
          new naver.maps.LatLng(spot.latitude, spot.longitude),
          spot.spotName,
          spot.spotId,
          spot.spotImageUrl,
          toggleDrawer,
        ),
      );
      markersRef.current = initialMarkers;
    }
  };
  // `photoSpots`가 업데이트될 때 마커 갱신
  useEffect(() => {
    if (isMapReady && photoSpots) {
      // 기존 마커를 삭제
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];

      // 새로운 마커 추가
      const newMarkers = photoSpots.map((spot) =>
        makeMarker(
          mapInstance.current!,
          new naver.maps.LatLng(spot.latitude, spot.longitude),
          spot.spotName,
          spot.spotId,
          spot.spotImageUrl,
          toggleDrawer,
        ),
      );
      markersRef.current = newMarkers; // 마커 목록 업데이트
    }
  }, [photoSpots, isMapReady]);

  return (
    <Container>
      {/* 네이버 맵 컴포넌트 */}
      <MapComponent
        mapId="naverMap"
        center={[37.5511, 126.9407]}
        zoom={17}
        onLoad={onMapLoad}
      />{' '}
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
            pathname: `/map/overview/${univ}`,
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
            photoSpotData={selectedSpotInfo}
            toggleDrawer={() => toggleDrawer(false)}
            // toggleModal={(index) => toggleModal(index)}
          />
        </Drawer>
      </div>
      {/* 
      {modalState && currPostIdIndex !== null && (
        <Modal
          setModalState={setModalState}
          photoSpot={photoSpotDataRef.current} // Safely pass the value
        />
      )} */}
    </Container>
  );
}
