'use client';

import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
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

// TODO : card 활용
export default function Overview({ school }: { school: string }) {
  function onClick() {
    alert('heelo');
  }
  return (
    <Container>
      <Back text={school} />
      {/* 칩 버튼 */}
      <CardContainerY>
        {data.map((spot) => (
          <Card size="small" src={spot.src} onClick={() => onClick()} />
        ))}
      </CardContainerY>
    </Container>
  );
}
