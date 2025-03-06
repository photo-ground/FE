import React, { ReactNode } from 'react';
import Head from 'next/head';

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
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
        </Head>
        <Providers>
          <StyledComponentsRegistry>
            <ScreenWrapper>{children}</ScreenWrapper>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
