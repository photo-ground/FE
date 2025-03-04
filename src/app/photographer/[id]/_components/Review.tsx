import Link from 'next/link';
import styled from 'styled-components';

import { PhotographerId } from '@/types/photographer';
import { COLOR } from '@/constants';
import RightChevronIcon from '@/assets/RightChevronIcon';
import SmallStarIcon from '@/assets/SmallStarIcon';
import Text from '@/components/atoms/Text';
import SmallEmptyStarIcon from '@/assets/SmallEmptyStarIcon';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.75rem 1.25rem;
`;

const ScoreArea = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ScoreText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary[500]};
`;

const DetailLink = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
`;

const LinkText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export default function Review({
  photographerId,
  score,
}: {
  photographerId: PhotographerId;
  score: number;
}) {
  const floatScore = score.toFixed(1);

  const filledStars = Math.floor(score);
  const emptyStars = 5 - filledStars;
  return (
    <Container>
      <ScoreArea>
        <div>
          {/* 채워진 별 렌더링 */}
          {Array.from({ length: filledStars }).map((_, index) => (
            <SmallStarIcon key={`filled-${index}`} />
          ))}
          {/* 비어있는 별 렌더링 */}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <SmallEmptyStarIcon key={`empty-${index}`} />
          ))}
        </div>
        <ScoreText variant="body1_md">{floatScore}</ScoreText>
      </ScoreArea>

      <DetailLink href={`/photographer/${photographerId}/review`}>
        <LinkText variant="caption1_rg">리뷰 보기</LinkText>
        <RightChevronIcon size="1.25rem" color={COLOR.GRAY[400]} />
      </DetailLink>
    </Container>
  );
}
