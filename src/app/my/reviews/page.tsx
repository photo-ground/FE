'use client';

import styled from 'styled-components';
import TNB from '@/components/TNB';
import Text from '@/components/atoms/Text';
import { useQuery } from '@tanstack/react-query';
import { ReviewList } from '@/types/reviews';
import ReviewItem from '../_component/ReviewItem';
import { getReviews } from '../_libs/getReviews';

const Container = styled.div`
  position: relative;
  height: 100dvh;
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 1.25rem;
  margin-bottom: 0;
`;

const ReviewItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 12px 20px;
`;

export default function Reviews() {
  const { data: reviewData } = useQuery<ReviewList>({
    queryKey: ['userReview'],
    queryFn: getReviews,
  });

  return (
    <Container>
      {/* 상단 헤더 */}
      <TNB.Back text="내가 쓴 리뷰" />

      {/* 리뷰 통계 */}
      {reviewData && (
        <StatsWrapper>
          <Text variant="caption1_md" color="#a6a6a6">
            리뷰 {reviewData.count}개
          </Text>
          <Text variant="caption1_md" color="#a6a6a6">
            최신순
          </Text>
        </StatsWrapper>
      )}

      <ReviewItemContainer>
        {/* 리뷰 목록 */}
        {reviewData &&
          reviewData.reviews.length !== 0 &&
          reviewData.reviews.map((review) => (
            <ReviewItem
              key={review.reviewId}
              photographerName={review.photographerName}
              photographerProfileUrl={review.photographerProfile}
              createdAt={new Date(review.createdAt).toLocaleDateString('ko-KR')}
              score={review.score}
              content={review.content}
            />
          ))}
      </ReviewItemContainer>
    </Container>
  );
}
