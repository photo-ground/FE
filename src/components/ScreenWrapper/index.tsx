'use client';

import { ReactNode } from 'react';

import BottomNavigationBar from '@/components/BNB';
import { Container, Content, FullPage } from './styles';

export default function ScreenWrapper({ children }: { children: ReactNode }) {
  return (
    <FullPage>
      <Container>
        <Content>{children}</Content>
        <BottomNavigationBar />
      </Container>
    </FullPage>
  );
}
