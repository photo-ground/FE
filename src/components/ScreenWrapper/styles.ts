import BREAK_POINT from '@/styles/constants';
import styled from 'styled-components';

export const FullPage = styled.div`
  height: 100dvh;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${BREAK_POINT}px;
  height: 100dvh;
  margin: auto;
  overflow: auto;
`;
