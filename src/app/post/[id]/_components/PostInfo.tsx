import Link from 'next/link';
import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import { PostDetail } from '../getPostData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 3rem;
  padding: 0 1.25rem;
`;

const Profile = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray[900]};
`;

const PhotographerInfoArea = styled(Link)`
  display: flex;
  gap: 1rem;

  width: fit-content;
  text-decoration: none;
`;

const PhotographerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DateText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

const ContentText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function PostInfo({
  photographerId,
  photographerName,
  profileUrl,
  content,
}: {
  photographerId: PostDetail['photographerId'];
  photographerName: PostDetail['photographerName'];
  profileUrl: PostDetail['profileUrl'];
  content: PostDetail['content'];
}) {
  return (
    <Container>
      <PhotographerInfoArea href={`/photographer/${photographerId}`}>
        <Profile src={profileUrl} alt={photographerName} />
        <PhotographerInfo>
          <Text variant="title2_sb">{photographerName} 작가</Text>
          <DateText variant="caption1_rg">{photographerName}</DateText>
        </PhotographerInfo>
      </PhotographerInfoArea>

      <ContentText variant="body2_rg">{content}</ContentText>
    </Container>
  );
}
