'use client';

// TODO : 페이지 접근할 때, 사용자의 학교 가져와야 함 -> 상단 chip에 적용

// components/NaverMap.js
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useTheme } from 'styled-components';
import { Drawer } from '@mui/material';

import { PhotoSpotListProps, PhotoSpotProps } from '@/types/photoSpot';

import useUnivStore from '@/store/useUnivStore';

import AlertModal from '@/components/modals/AlertModal';
import MediumButton from '@/components/atoms/MediumButton';
import SmallButton from '@/components/atoms/SmallButton';
import CheckIcon from '@/assets/modal/CheckIcon';
import BREAK_POINT from '@/styles/constants';

import { School } from './types';

import makeMarker from './_util/makeMarker';
import { BottomButtonWrapper, ChipContainer, Container } from './style';
import MapComponent from './_components/Map';

import schoolList from './_data/schoolList'; // 더미 데이터
import {
  getPhotoSpotByUniv,
  getSelectedSpotInfo,
} from './_services/getPhotoSpot';
import DrawerContent from './_components/DrawerContent';
import { NaverMap } from './_types/NaverMap';
import useMapStore from './_store/mapStore';
import { SliderData } from './_components/Slider';
import SpotModal from './_components/SpotModal';

// naver.maps.*은 네이버 지도 API 스크립트가 로드된 후에만 사용할 수 있다.
export default function MapPage() {
  const theme = useTheme();
  const router = useRouter();
  const [univSettingModal, setUnivSettingModal] = useState<boolean>(false);

  // 서랍 내용 관리
  const drawerContainerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false); // Drawer 열림 상태
  const [selectedSpotInfo, setSelectedSpotInfo] =
    useState<PhotoSpotProps | null>(null);
  const [modalState, setModalState] = useState<boolean>(false);

  // 지도 객체 관리
  const mapInstance = useRef<NaverMap | null>(null); // 지도 인스턴스
  const markersRef = useRef<naver.maps.Marker[]>([]); // 현재 활성화된 지도
  const [isMapReady, setIsMapReady] = useState<boolean>(false); // 지도 준비 상태

  // zustand상태관리
  const { center, zoom, setMarkers } = useMapStore();
  const setCenter = useCallback((mapCenter: [number, number]) => {
    useMapStore.getState().setCenter(mapCenter); // Zustand의 상태를 안정화
  }, []);
  const { univ, setUniv } = useUnivStore();

  const [schoolArr] = useState<School[]>(schoolList);
  // useState<PhotoSpotProps | null>(null);

  // spot data 가져오기
  const { data: photoSpots, isSuccess } = useQuery<PhotoSpotListProps[]>({
    queryKey: ['photoSpotList', univ],
    queryFn: () => getPhotoSpotByUniv(univ),
  });

  const [modalData, setModalData] = useState<SliderData[]>([]);

  useEffect(() => {
    if (!univ) {
      setUnivSettingModal(true);
    } else {
      const school = schoolList.find(
        (element: School) => element.name === univ,
      );
      if (school) {
        // console.log(school);
        setCenter([school.lat, school.lng]);
      }
    }
  }, [setUnivSettingModal, univ, setCenter]);

  // 드로어 열기/닫기 및 마커 정보 설정
  const toggleDrawer = useCallback(
    async (
      isOpen: boolean,
      markerInfo?: { title: string; src: string; spotId: number },
    ) => {
      setOpen(isOpen);

      if (isOpen && markerInfo) {
        try {
          const spotInfo = await getSelectedSpotInfo(markerInfo.spotId);
          setSelectedSpotInfo(spotInfo);
          const data = spotInfo.imageInfo.spotPostImageList.map((postData) => ({
            imageUrl: postData.imageUrl,
            univ,
            spotName: spotInfo.spotName,
            photographerName: postData.photographerName,
            postId: postData.postId,
          }));
          setModalData(data);
        } catch (error) {
          console.error('Failed to fetch spot info:', error);
        }
      } else {
        setSelectedSpotInfo(null);
      }
    },
    [setOpen, setSelectedSpotInfo, setModalData, univ], // Dependencies
  );

  // 특정 학교로 이동 및 마커 로드
  const moveToSchool = (school: School) => {
    if (!isMapReady || !mapInstance.current) {
      console.warn('Map instance is not ready yet.');
      return;
    }

    // 지도 중심 이동
    mapInstance.current.setCenter(
      new naver.maps.LatLng(school.lat, school.lng),
    );
    setUniv(school.name);
    setCenter([school.lat, school.lng]);

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
      setMarkers(newMarkers); // Zustand에 마커 저장
    }
  };

  // 지도 로드 시 초기 설정
  const onMapLoad = useCallback(
    (map: NaverMap) => {
      mapInstance.current = map;

      const school = schoolList.find(
        (element: School) => element.name === univ,
      );
      if (school) {
        // Zustand에 저장된 상태 복원
        map.setCenter(new naver.maps.LatLng(...[school.lat, school.lng]));
        map.setZoom(zoom);

        setIsMapReady(true); // 지도 준비 상태 업데이트
      }
    },
    [zoom, setIsMapReady, univ], // 의존성 배열에 필요한 값만 추가
  );

  // 지도 상태 확인 및 초기화
  useEffect(() => {
    if (!isMapReady) {
      // 네이버 지도 스크립트 추가
      const script = document.createElement('script');
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // 스크립트가 로드된 후 `naver` 객체를 안전하게 사용
        if (typeof naver !== 'undefined') {
          const mapElement = document.getElementById('naverMap');
          if (mapElement && !mapInstance.current) {
            const map = new naver.maps.Map(mapElement, {
              center: new naver.maps.LatLng(...center),
              zoom,
            });
            // console.log(map);
            onMapLoad(map); // 지도가 준비되지 않았다면 직접 초기화 호출
          }
        } else {
          console.error('Naver Maps API 로드 실패');
        }
      };
    }
  }, [isMapReady, center, zoom, onMapLoad]);

  // `photoSpots`가 업데이트될 때 마커 갱신
  useEffect(() => {
    if (!isMapReady || !mapInstance.current) {
      return;
    }
    // 기존 마커를 다시 렌더링
    if (photoSpots) {
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];

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
      markersRef.current = newMarkers;
    }
  }, [photoSpots, isMapReady, toggleDrawer]);

  return (
    <Container>
      {univSettingModal && (
        <AlertModal
          icon={<CheckIcon />}
          title="잠깐!"
          content="학교 선택이 안되어있어요!"
          confirmText="학교 선택하기"
          onConfirm={() => router.replace('/onboarding')}
        />
      )}

      {/* 네이버 맵 컴포넌트 */}
      <MapComponent mapId="naverMap" onLoad={onMapLoad} />

      {/* 칩 버튼 */}
      <ChipContainer>
        {schoolArr.map((element) => (
          <SmallButton.Secondary
            text={element.name}
            key={element.name}
            //  active={univ !== null && univ !== element.name}
            onClick={() => moveToSchool(element)}
          />
        ))}
      </ChipContainer>

      {/* 스냅 전체보기 버튼 */}
      <BottomButtonWrapper>
        <Link href={`/map/overview/${univ}`}>
          <MediumButton.Primary text="스냅 전체보기" />
        </Link>
      </BottomButtonWrapper>

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
              bottom: '76px', // 네비게이션 메뉴 높이를 고려하여 위치 조정
              maxWidth: BREAK_POINT,
              margin: '0 auto',
            },
          }}
        >
          <DrawerContent
            photoSpotData={selectedSpotInfo}
            toggleDrawer={() => toggleDrawer(false)}
            toggleModal={(index) => setModalState(index)}
          />
        </Drawer>
      </div>

      {modalState && (
        <SpotModal setModalState={setModalState} sliderData={modalData} />
      )}
    </Container>
  );
}
