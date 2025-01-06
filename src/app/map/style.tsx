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
  display: flex;
  padding: 1rem 1.25rem;
  flex-wrap: wrap;
  overflow-y: scroll;
  gap: 10px;
  margin: 0 auto;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  margin-bottom: 3rem;
  .text-pre {
    white-space: pre-line;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
