'use client';

import styled from 'styled-components';

import { COLOR } from '@/constants';

import TNB from '@/components/TNB';
import Text from '@/components/atoms/Text';
import Spacer from '@/components/Spacer';
import { convertToViewportHeight } from '@/styles/convertSize';
import { UNIV_ONBOARDING_LIST } from '@/types/university';
import { ScreenWithBottomButton } from '../splash/styles';
import UnivCard from './UnivCard';

const Container = styled(ScreenWithBottomButton)`
  gap: ${convertToViewportHeight(36)};
`;

const Caption = styled(Text)`
  text-align: center;
`;

export default function OnboardingPage() {
  return (
    <main>
      <TNB.Main />

      <Container>
        <header>
          {/* TODO : 현재 사용자 이름으로 업데이트 */}
          <Text variant="title1_rg">안녕하세요.</Text>
          <Text variant="title1_rg">어떤 장소를 둘러볼까요?</Text>
        </header>

        <div>
          {/* 학교 버튼 리스트 */}
          {UNIV_ONBOARDING_LIST.map((university) => (
            <UnivCard key={university.title} data={university} />
          ))}

          <Spacer size="12px" />

          <Caption variant="caption1_rg" color={COLOR.GRAY[400]}>
            더 많은 장소를 기록할 수 있도록 포그가 달리고 있어요!
          </Caption>
        </div>
      </Container>
    </main>
  );
}
