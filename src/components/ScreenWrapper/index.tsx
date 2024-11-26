'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import BottomNavigationBar from '@/components/BNB';
import TopNavigationBar from '@components/TopNavigationBar';
import theme from '@/styles/theme';
import { Container, Content, FullPage } from './styles';

export default function ScreenWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <FullPage>
        <Container>
          <TopNavigationBar />
          <Content>{children}</Content>
          <BottomNavigationBar />
        </Container>
      </FullPage>
    </ThemeProvider>
  );
}
