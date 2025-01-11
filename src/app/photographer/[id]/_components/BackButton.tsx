'use client';

import styled from 'styled-components';
import LeftChevronLargeIcon from '@/assets/LeftChevronLargeIcon';
import { useRouter } from 'next/navigation';

const Container = styled.button`
  position: absolute;
  top: 0.75rem;
  left: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;
  background: #0e0e0e59;

  border: none;
  outline: none;
  border-radius: 100%;
`;

export default function BackButton() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <Container onClick={goBack}>
      <LeftChevronLargeIcon />
    </Container>
  );
}
