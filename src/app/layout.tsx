import React, { ReactNode } from 'react';

import StyledComponentsRegistry from '@/lib/registry';
import ScreenWrapper from '@components/ScreenWrapper';
import Providers from './Providers';

export { default as metadata } from './metadata';

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
