'use client';

import Link from 'next/link';
import styled from 'styled-components';
import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100dvh;
  padding: 40% 1.25rem 10% 1.25rem;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

export default function SplashPage() {
  return (
    <Container>
      <Text variant="header1">Photo Ground</Text>

      <ButtonArea>
        <Link href="/">
          <CTAButton text="둘러보기" variant="secondary" />
        </Link>
        <Link href="/login">
          <CTAButton text="로그인" />
        </Link>
      </ButtonArea>
    </Container>
  );
}
