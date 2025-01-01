'use client';

import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import { useSearchParams } from 'next/navigation';
// import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 76px);
  overflow: hidden;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CardContainerY = styled.div`
  display: flex;
  padding: 1rem 1.25rem;
  flex-wrap: wrap;
  overflow-y: scroll;
  gap: 10px;
  margin: 0 auto;
`;

const data = [
  { src: '/images/ewha.jpg', id: 'aaa' },
  { src: '/images/sogang.jpg', id: 'aaa' },
  { src: '/images/yonsei.jpg', id: 'aaa' },
  { src: '/images/ewha.jpg', id: 'aaa' },
  { src: '/images/sogang.jpg', id: 'aaa' },
  { src: '/images/yonsei.jpg', id: 'aaa' },
  { src: '/images/ewha.jpg', id: 'aaa' },
  { src: '/images/sogang.jpg', id: 'aaa' },
  { src: '/images/yonsei.jpg', id: 'aaa' },
  { src: '/images/ewha.jpg', id: 'aaa' },
  { src: '/images/sogang.jpg', id: 'aaa' },
  { src: '/images/yonsei.jpg', id: 'aaa' },
  { src: '/images/ewha.jpg', id: 'aaa' },
  { src: '/images/sogang.jpg', id: 'aaa' },
  { src: '/images/yonsei.jpg', id: 'aaa' },
];

// school을 URL 매개변수로 전달
export default function Overview() {
  const searchParams = useSearchParams();
  const school = searchParams.get('school'); // 쿼리 파라미터에서 'school' 값 가져옴

  function onClick() {
    console.log('clicked');
  }
  return (
    <Container>
      <Back text={`${school}`} />
      {/* 칩 버튼 */}
      <CardContainerY>
        {data.map((spot) => (
          <Card size="small" src={spot.src} onClick={() => onClick()} />
        ))}
      </CardContainerY>
    </Container>
  );
}
