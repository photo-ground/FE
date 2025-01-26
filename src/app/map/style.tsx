import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 76px);
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
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
