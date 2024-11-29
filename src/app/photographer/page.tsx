'use client';

import TNB from '@/components/TNB';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100dvh;
`;
const Background = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
`;

export default function PhotographerPage() {
  return (
    <Container>
      <Background src="/images/background1.webp" alt="background" />
      <TNB.Title text="사진작가" />
    </Container>
  );
}
