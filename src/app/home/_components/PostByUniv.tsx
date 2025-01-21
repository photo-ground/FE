/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Card from '@/components/Card';
import { PostProps } from '@/types/post';
import Link from 'next/link';
import { getPostByUniv } from '../_services/getActivePhotographer';

const CardContainerY = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 20px;
`;
const CardWrapper = styled(Link)`
  text-decoration: none;
`;

export default function PostByUniv({ univ }: { univ: string }) {
  const { isPending, isError, data, error } = useQuery<PostProps>({
    queryKey: ['postList', 'hasNext', univ],
    queryFn: () => getPostByUniv(univ),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <CardContainerY>
      {data?.postList.map((card) => (
        <CardWrapper key={card.createdAt} href={`/post/${card.photographerId}`}>
          <Card
            key={card.id}
            content={card.firstImageSpot}
            size="medium"
            src={card.firstImageUrl}
            title={card.photographerName}
          />
        </CardWrapper>
      ))}
    </CardContainerY>
  );
}
