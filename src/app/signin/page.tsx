'use client';

import styled from 'styled-components';

import Text from '@/components/atoms/Text';
import { convertToViewportHeight } from '@/styles/convertSize';
import { ScreenWithBottomButton } from '../splash/styles';
import Tabs from './Tabs';

const Container = styled(ScreenWithBottomButton)`
  gap: ${convertToViewportHeight(160)};
`;

const SloganArea = styled.header`
  padding: 0 1.25rem;
`;

const SloganText = styled(Text)`
  font-family: Inter;
`;

export default function SignInPage() {
  return (
    <Container>
      <SloganArea>
        <SloganText variant="title1_rg">Snap Your Day,</SloganText>
        <SloganText variant="title1_rg">Cherish Your Life</SloganText>
      </SloganArea>

      <Tabs />
    </Container>
  );
}
