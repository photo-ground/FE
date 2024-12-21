'use client';

import { ReactNode } from 'react';

import BottomNavigationBar from '@/components/BNB';
import { Container, FullPage } from './styles';

export default function ScreenWrapper({ children }: { children: ReactNode }) {
  return (
    <FullPage>
      <Container>
        {children}
        <BottomNavigationBar />
      </Container>
    </FullPage>
  );
}
