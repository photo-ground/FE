import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: blue;
  height: calc(100vh - 76px);
  // overflow: hidden;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CardContainerY = styled.div`
  display: grid;

  background-color: red;
  height: 500px;
  height: calc(100% - 112px);
  overflow: auto;
  grid-template-columns: 1fr 1fr 1fr; /* 3열 */
  padding: 1rem 1.25rem;

  gap: 10px;
  margin: 0 auto;
  // height: 100%; /* 부모 컨테이너의 전체 높이 차지 */
  // overflow-y: auto; /* 세로 스크롤 활성화 */
  // overflow-x: hidden; /* 가로 스크롤 숨김 */
  img {
    width: 133px;
    height: auto;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

// 칩 버튼들을 담을 컨테이너 스타일
export const ChipContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  gap: 0.5rem;
  display: flex;
  overflow-x: scroll;
  padding: 1.25rem 20px;
`;
export const AbsContainer = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: calc(50% - 75px);
  width: 150px;
  z-index: 2;
`;
