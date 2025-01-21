import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 76px);
  overflow: hidden;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CardContainerY = styled.div`
  display: grid;
  // grid로 수정
  grid: auto-flow / 1fr 1fr 1fr;
  // grid: repeat(3, 110px) / auto-flow 110px;
  padding: 1rem 1.25rem;
  overflow-y: scroll;
  gap: 10px;
  margin: 0 auto;
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
export const AbsContainer = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: calc(50% - 75px);
  width: 150px;
  z-index: 2;
`;
