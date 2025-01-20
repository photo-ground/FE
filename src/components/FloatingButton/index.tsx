import { ReactNode } from 'react';
import styled from 'styled-components';
import BREAK_POINT from '@/styles/constants';

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  padding: 0 1.25rem;
  padding-bottom: 2rem;

  width: 100%;
  max-width: ${BREAK_POINT}px;

  z-index: 2;
`;

const Overlay = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 5.625rem;

  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({ theme }) => theme.colors.background.primary} 100%
  );

  z-index: 1;
`;

export default function FloatingButton({ children }: { children: ReactNode }) {
  return (
    <>
      <Overlay />
      <ButtonWrapper>{children}</ButtonWrapper>
    </>
  );
}
