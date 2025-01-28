import RightChevronIcon from '@/assets/RightChevronIcon';
import SmallStarIcon from '@/assets/SmallStarIcon';
import Text from '@/components/atoms/Text';
import { COLORS } from '@/styles/theme';
import Link from 'next/link';
import styled from 'styled-components';

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
  color: ${({ theme }) => theme.colors.primary[100]};
`;

const DetailLink = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
`;

const LinkText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export default function Review({ photographerId }: { photographerId: number }) {
  return (
    <Container>
      <ScoreArea>
        <div>
          <SmallStarIcon />
          <SmallStarIcon />
          <SmallStarIcon />
          <SmallStarIcon />
          <SmallStarIcon />
        </div>
        <ScoreText variant="body1_md">5.0</ScoreText>
      </ScoreArea>

      <DetailLink href={`/photographer/${photographerId}/review`}>
        <LinkText variant="caption1_rg">리뷰 보기</LinkText>
        <RightChevronIcon size="20px" color={COLORS.GRAY[400]} />
      </DetailLink>
    </Container>
  );
}
