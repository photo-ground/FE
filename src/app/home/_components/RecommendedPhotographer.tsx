/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import Card from '@/components/Card';
import { useQuery } from '@tanstack/react-query';
import { PhotographerProps } from '@/types/photographer';
import { getActivePhotographer } from '../_services/getActivePhotographer';

const CardContainerX = styled.div`
  display: flex;
  overflow-y: scroll;
  gap: 1rem;
  margin: 0 auto 0 20px;
  height: 114px;
`;
const CardTitle = styled.div`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[200]};
  text-align: center;
  text: ${({ theme }) => theme.typography.body3};
`;

export default function RecommendedPhotographer() {
  const { isPending, isError, data, error } = useQuery<PhotographerProps>({
    queryKey: ['photographerList', 'hasNext'],
    queryFn: getActivePhotographer,
    // staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    // gcTime: 300 * 1000,
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
    <CardContainerX>
      {data?.photographerList.map((card) => (
        <Card
          key={card.photographerId}
          size="round"
          src={card.profileUrl}
          etc={<CardTitle>{card.photographerName}</CardTitle>}
        />
      ))}
    </CardContainerX>
  );
}
