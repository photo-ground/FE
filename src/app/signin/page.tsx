'use client';

import styled from 'styled-components';

import Text from '@/components/atoms/Text';
import CTAButton from '@/components/atoms/CTAButton';
import { ScreenWithBottomButton } from '../splash/styles';

export const Container = styled(ScreenWithBottomButton)`
  justify-content: space-between;
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
