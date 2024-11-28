'use client';

import styled from 'styled-components';

import Text from '@/components/atoms/Text';
import { convertToViewportHeight } from '@/styles/convertSize';
import { ScreenWithBottomButton } from '../splash/styles';
import Tabs from './Tabs';

export const Container = styled(ScreenWithBottomButton)`
  gap: ${convertToViewportHeight(160)};
`;

export default function SignInPage() {
  return (
    <Container>
      <header>
        <Text variant="title1">여기 위치에</Text>
        <Text variant="title1">슬로건을 적어볼까요</Text>
      </header>

      <Tabs />
    </Container>
  );
}
