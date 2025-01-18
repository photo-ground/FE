'use client';

import SmallStarIcon from '@/assets/SmallStarIcon';
import Text from '@/components/atoms/Text';
import TNB from '@/components/TNB';
import styled from 'styled-components';
import { ReviewData } from './getReviewData';

const Container = styled.div`
  margin-bottom: 5rem;
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

const ListArea = styled.div`
  padding: 1rem 1.25rem;
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SortText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

const ListContent = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 1rem;
`;

const ReviewCard = styled.li`
  padding: 1.25rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;
`;

export default function PhotographerReviewScreen({
  data,
}: {
  data: ReviewData;
}) {
  const { averageScore, count, reviews } = data;

  return (
    <Container>
      <TNB.Back text="리뷰 보기" />

      <SummaryArea>
        <Text variant="title2_sb">리뷰 평점</Text>

        <ScoreWrapper>
          <SmallStarIcon size="24" />
          <SummaryText variant="title2_sb">{averageScore}</SummaryText>
        </ScoreWrapper>
      </SummaryArea>

      <ListArea>
        <ListHeader>
          <Text variant="title3">상세 후기 ({count})</Text>
          <SortText variant="caption1_rg">최신순</SortText>
        </ListHeader>

        {reviews && (
          <ListContent>
            {reviews.map((review) => (
              <ReviewCard key={review.reviewId}>
                <Text variant="body2_rg">{review.content}</Text>
              </ReviewCard>
            ))}
          </ListContent>
        )}
      </ListArea>
    </Container>
  );
}
