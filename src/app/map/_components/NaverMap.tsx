// /* eslint-disable no-undef */
// // components/NaverMap.js
// // TODO : 이 파일이 필요한 파일인지 판단
// import { useEffect, useRef, useState } from 'react';
// import styled from 'styled-components';
// import { loadNaverMap } from '../_util/naverMaps';
// import makeMarker from '../_util/makeMarker';
// import Chip from './Chip';
// // import CTAButton from '@/components/atoms/CTAButton';

// type School = {
//   name: string;
//   lat: number;
//   lng: number;
// };

// const Container = styled.div`
//   position: relative;
//   width: 100%;
//   height: calc(100vh - 76px);
//   overflow: hidden;
//   -ms-overflow-style: none;
//   ::-webkit-scrollbar {
//     display: none;
//   }
// `;
// const MapContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1;
// `;

// // 칩 버튼들을 담을 컨테이너 스타일
// const ChipContainer = styled.div`
//   width: 100%;
//   max-width: 100vw;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 2;
//   gap: 0.5rem;
//   display: flex;
//   overflow-x: scroll;
//   margin: 0 auto 0 1.25rem;
//   padding: 1.25rem;
//   padding-left: 0;
//   padding-right: 1.75rem;
// `;
// const AbsContainer = styled.div`
//   position: absolute;
//   bottom: 1.25rem;
//   left: calc(50% - 6rem);
//   width: 12rem;
//   z-index: 2;
// `;
// // 포토스팟 데이터 배열
// const photoSpot = [
//   {
//     lat: 37.5511,
//     lng: 126.9407,
//     title: '포토스팟 1',
//     src: '/images/ewha.jpg',
//   },
//   {
//     lat: 37.5647,
//     lng: 126.9386,
//     title: '포토스팟 2',
//     src: '/images/ewha.jpg',
//   },
//   {
//     lat: 37.5617,
//     lng: 126.9468,
//     title: '포토스팟 3',
//     src: '/images/ewha.jpg',
//   },
//   {
//     lat: 37.5519,
//     lng: 126.9246,
//     title: '포토스팟 4',
//     src: '/images/ewha.jpg',
//   },
// ];
// const schoolList = [
//   {
//     name: '서강대학교',
//     lat: 37.5511,
//     lng: 126.9407,
//   },
//   {
//     name: '연세대학교',
//     lat: 37.5647,
//     lng: 126.9386,
//   },
//   {
//     name: '이화여자대학교',
//     lat: 37.5617,
//     lng: 126.9468,
//   },
//   {
//     name: '홍익대학교',
//     lat: 37.5519,
//     lng: 126.9246,
//   },
// ];

// // naver.maps.*은 네이버 지도 API 스크립트가 로드된 후에만 사용할 수 있다.
// export default function NaverMap() {
//   const mapElement = useRef<HTMLDivElement>(null);
//   const mapInstance = useRef<naver.maps.Map>();
//   const [schools, setSchools] = useState<School[]>([]);
//   const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

//   const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '';

//   useEffect(() => {
//     loadNaverMap(clientId, () => {
//       if (!mapElement.current) return;

//       // 지도 객체 생성
//       mapInstance.current = new naver.maps.Map(mapElement.current, {
//         center: new naver.maps.LatLng(37.5511, 126.9407),
//         zoom: 18,
//       });

//       // 포토스팟 로드
//       photoSpot.forEach((spot, idx) => {
//         makeMarker(
//           mapInstance.current!,
//           new naver.maps.LatLng(spot.lat, spot.lng),
//           spot.title,
//           idx,
//           spot.src,
//         );
//       });

//       // 학교 로드
//       setSchools(schoolList);
//     });
//   }, [clientId]);

//   // 학교 위치로 이동하는 함수
//   const moveToSchool = (school: School) => {
//     if (mapInstance.current) {
//       mapInstance.current.setCenter(
//         new naver.maps.LatLng(school.lat, school.lng),
//       );
//       setSelectedSchool(school.name);
//     }
//   };

//   return (
//     <Container>
//       <MapContainer ref={mapElement} />
//       {/* 칩 버튼 */}
//       <ChipContainer>
//         {/* <div className="scroller"> */}
//         {schools.map((school) => (
//           <Chip
//             active={selectedSchool !== null && selectedSchool !== school.name}
//             key={school.name}
//             text={school.name}
//             variant="secondary"
//             onClick={() => moveToSchool(school)}
//           />
//         ))}
//         {/* </div> */}
//       </ChipContainer>
//       <AbsContainer>
//         <Chip text="스냅 전체보기" variant="primary" />
//       </AbsContainer>
//     </Container>
//   );
// }
