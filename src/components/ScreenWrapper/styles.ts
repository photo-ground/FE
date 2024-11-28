import BREAK_POINT from '@/styles/constants';
import styled from 'styled-components';

export const FullPage = styled.div`
  min-height: 100dvh;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${BREAK_POINT}px;
  margin: auto;
  overflow: auto;
`;
