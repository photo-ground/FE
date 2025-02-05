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

// 칩 버튼들을 담을 컨테이너 스타일
export const ChipContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  gap: 0.5rem;

  width: 100%;
  padding: 0.5rem 1.25rem; // 0.5는 임의값

  overflow-x: scroll;
  z-index: 1;
`;
export const BottomButtonWrapper = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: calc(50% - 75px);
  width: 150px;
  z-index: 1;
`;
