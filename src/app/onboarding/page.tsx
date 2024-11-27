'use client';

import Link from 'next/link';
import styled from 'styled-components';
import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';

const Container = styled.main`
  display: flex;
  justify-content: center;

  margin-top: 40%;
`;

const ButtonArea = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100vw;
  margin: 0 1rem;
  bottom: 10%;
`;

export default function OnboardingPage() {
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
