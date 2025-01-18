import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import ScreenWrapper from '@components/ScreenWrapper';
import Providers from './Providers';

// [todo] description 등 meta data 변경
export const metadata: Metadata = {
  title: 'Photo Ground',
  description: '행복한 순간을 사진으로',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <StyledComponentsRegistry>
            <ScreenWrapper>{children}</ScreenWrapper>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
