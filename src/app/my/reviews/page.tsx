'use client';

import styled from 'styled-components';
import TNB from '@/components/TNB';
import Text from '@/components/atoms/Text';
import ReviewItem from '../_component/ReviewItem';

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
    margin 12px 20px;

`;

export default function Reviews() {
  const data = {
    count: 2,
    averageScore: 4.5,
    reviews: [
      {
        reviewId: 4,
        reservationId: 9,
        photographerName: '뚱이',
        photographerProfileUrl: '/images/ewha.jpg',
        content:
          '작가님 보정 너무 마음에 들었습니다. 좋은 추억 만들어주셔서 감사합니다',
        score: 5,
        createdAt: '2025-01-06T03:04:50',
      },
      {
        reviewId: 1,
        reservationId: 6,
        photographerName: '뚱이',
        photographerProfileUrl: '/images/ewha.jpg',

        content:
          '작가님 보정 너무 마음에 들었습니다. 좋은 추억 만들어주셔서 감사합니다',
        score: 4,
        createdAt: '2025-01-06T02:58:16',
      },
    ],
  };

  return (
    <Container>
      {/* 상단 헤더 */}
      <TNB.Back text="내가 쓴 리뷰" />

      {/* 리뷰 통계 */}
      <StatsWrapper>
        <Text variant="caption1_md" color="#a6a6a6">
          리뷰 {data.count}개
        </Text>
        <Text variant="caption1_md" color="#a6a6a6">
          최신순
        </Text>
      </StatsWrapper>

      <ReviewItemContainer>
        {/* 리뷰 목록 */}
        {data.reviews.map((review) => (
          <ReviewItem
            key={review.reviewId}
            photographerName={review.photographerName}
            photographerProfileUrl={review.photographerProfileUrl}
            createdAt={new Date(review.createdAt).toLocaleDateString('ko-KR')}
            score={review.score}
            content={review.content}
          />
        ))}
      </ReviewItemContainer>
    </Container>
  );
}
