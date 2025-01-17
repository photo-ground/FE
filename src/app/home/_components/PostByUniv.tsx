/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Card from '@/components/Card';
import { PostProps } from '@/types/post';
import { getPostByUniv } from '../_services/getActivePhotographer';

const CardContainerY = styled.div`
  display: grid;
  grid: 1fr 1fr / auto-flow;
  flex-wrap: wrap;
  overflow-y: scroll;
  gap: 10px;
  margin: 0 20px;
`;

export default function PostByUniv({ univ }: { univ: string }) {
  //   const { univ } = useUnivStore();
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
  if (data) {
    console.log(data);
  }
  return (
    <CardContainerY>
      {data?.postList.map((card) => (
        <Card
          key={card.id}
          content={card.firstImageSpot}
          size="medium"
          src={card.firstImageUrl}
          title={card.photographerName}
        />
      ))}
    </CardContainerY>
  );
}
