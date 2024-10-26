import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';

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
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
