'use client';

import { ReactNode } from 'react';

import BottomNavigationBar from '@/components/BNB';
import TopNavigationBar from '@components/TopNavigationBar';
import { Container, Content, FullPage } from './styles';

export default function ScreenWrapper({ children }: { children: ReactNode }) {
  return (
    <FullPage>
      <Container>
        <TopNavigationBar />
        <Content>{children}</Content>
        <BottomNavigationBar />
      </Container>
    </FullPage>
  );
}
