import Link from 'next/link';
import styled from 'styled-components';
import Text from '@/components/atoms/Text';

import { PhotographerDetail } from '../_libs/getPhotographerData';
import { PostSummary } from '../_libs/getPhotographerPosts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.5rem 1.25rem;
`;

const TagArea = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Tag = styled(Text)`
  padding: 0.375rem 1rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.gray[200]};
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 0.125rem;
  object-fit: cover;
`;

export default function Feed({
  styleList,
  postList,
}: {
  styleList: PhotographerDetail['styleList'];
  postList: PostSummary[];
}) {
  return (
    <Container>
      <TagArea>
        {styleList.map((tag) => (
          <Tag key={tag} variant="body3">
            {tag}
          </Tag>
        ))}
      </TagArea>

      <Images>
        {postList.map((post) => (
          <Link key={post.postId} href={`/post/${post.postId}`}>
            <Image src={post.firstImageUrl} />
          </Link>
        ))}
      </Images>
    </Container>
  );
}
