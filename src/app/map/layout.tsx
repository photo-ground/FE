'use client';

import Script from 'next/script';
import React from 'react';

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="modal-root">
      {/* 네이버 지도 API 스크립트 */}
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
      />
      {children}
    </div>
  );
}
