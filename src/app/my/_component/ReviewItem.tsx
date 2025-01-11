import SmallStarIcon from '@/assets/SmallStarIcon';
import Text from '@/components/atoms/Text';
import Image from 'next/image';
import styled from 'styled-components';

const ReviewItemWrapper = styled.div`
  padding: 1.25rem;
  color: white;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray[900]};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
`;

const Date = styled.span`
  display: block;
  margin-top: 0.3rem;
  font-size: 0.8rem;

  color: rgba(255, 255, 255, 0.6);
`;
const ProfileImage = styled(Image)`
  border-radius: 3rem;
`;
const ReviewMain = styled.div`
  display: flex;
  flex-direction: column;
`;
const ScoreBox = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: auto;
`;

export default function ReviewItem({
  photographerName,
  photographerProfileUrl,
  createdAt,
  score,
  content,
}: {
  photographerName: string;
  photographerProfileUrl: string;
  createdAt: string;
  score: number;
  content: string;
}) {
  const date = createdAt;
  return (
    <ReviewItemWrapper>
      <Header>
        <ProfileImage
          width={48} // 숫자로 전달 (3rem = 48px)
          height={48}
          alt={photographerName}
          src={photographerProfileUrl}
        />
        <ReviewMain>
          <Text variant="title2_sb">{photographerName}</Text>
          <Date>{date}</Date>
        </ReviewMain>
        <ScoreBox>
          <SmallStarIcon />
          <Text variant="title2_sb" color="#FF4F15">
            {score}
          </Text>
        </ScoreBox>
      </Header>
      <Text variant="body2_rg">{content}</Text>
    </ReviewItemWrapper>
  );
}
