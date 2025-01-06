'use client';

import SmallStarIcon from '@/assets/SmallStarIcon';
import Text from '@/components/atoms/Text';
import TNB from '@/components/TNB';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100dvh;
`;

const SummaryArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  padding: 1rem 1.25rem;
`;

const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const SummaryText = styled(Text)`
  color: ${({ theme }) => theme.colors.orange[500]};
`;

export default function PhotographerReviewScreen() {
  return (
    <Container>
      <TNB.Back text="리뷰 보기" />

      <SummaryArea>
        <Text variant="title2_sb">리뷰 평점</Text>

        <ScoreWrapper>
          <SmallStarIcon size="24" />
          <SummaryText variant="title2_sb">4.2</SummaryText>
        </ScoreWrapper>
      </SummaryArea>
    </Container>
  );
}
