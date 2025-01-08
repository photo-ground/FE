'use client';

import styled from 'styled-components';
import ReviewItem from '../_component/ReviewItem';

const ReviewPageWrapper = styled.div`
  background-color: #121212;
  min-height: 100vh;
  color: white;
  padding: 1rem;
`;

const Header = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 1rem;

  .count {
    font-size: 1rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
  }

  .averageScore {
    font-size: 1.2rem;
    font-weight: bold;
    color: orange;
  }
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
        content:
          '작가님 보정 너무 마음에 들었습니다. 좋은 추억 만들어주셔서 감사합니다',
        score: 5,
        createdAt: '2025-01-06T03:04:50',
      },
      {
        reviewId: 1,
        reservationId: 6,
        photographerName: '뚱이',
        content:
          '작가님 보정 너무 마음에 들었습니다. 좋은 추억 만들어주셔서 감사합니다',
        score: 4,
        createdAt: '2025-01-06T02:58:16',
      },
    ],
  };

  return (
    <ReviewPageWrapper>
      {/* 상단 헤더 */}
      <Header>내가 쓴 리뷰</Header>

      {/* 리뷰 통계 */}
      <StatsWrapper>
        <span className="count">리뷰 {data.count}개</span>
        <span className="averageScore">평균 ★ {data.averageScore}</span>
      </StatsWrapper>

      {/* 리뷰 목록 */}
      {data.reviews.map((review) => (
        <ReviewItem
          key={review.reviewId}
          photographerName={review.photographerName}
          createdAt={new Date(review.createdAt).toLocaleDateString('ko-KR')}
          score={review.score}
          content={review.content}
        />
      ))}
    </ReviewPageWrapper>
  );
}
