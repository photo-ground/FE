// eslint-disable-next-line import/prefer-default-export
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
