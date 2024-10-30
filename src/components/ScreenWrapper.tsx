'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

const FullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100dvh;
`;

const Container = styled.div`
  width: 100%;
  max-width: 26rem;
  height: 100dvh;

  box-shadow: 0 1rem 2rem -1rem gray;
`;

export default function ScreenWrapper({ children }: { children: ReactNode }) {
  return (
    <FullPage>
      <Container>{children}</Container>
    </FullPage>
  );
}
