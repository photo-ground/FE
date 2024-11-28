'use client';

import styled from 'styled-components';

import Text from '@/components/atoms/Text';
import CTAButton from '@/components/atoms/CTAButton';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding: 1.5rem ${({ theme }) => theme.spacing.padding.horizontal}
    ${({ theme }) => theme.spacing.fixedButtonBottom}
    ${({ theme }) => theme.spacing.padding.horizontal};
`;

export default function SignInPage() {
  return (
    <Container>
      <header>
        <Text variant="title1">여기 위치에</Text>
        <Text variant="title1">슬로건을 적어볼까요</Text>
      </header>

      <CTAButton text="로그인" />
    </Container>
  );
}
