/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import Card from '@/components/Card';
import Text from '@/components/atoms/Text';
import { PhotographerProps } from '@/types/photographer';
import { getActivePhotographer } from '../_services/getActivePhotographer';

const CardContainerX = styled.div`
  display: flex;
  justify-content: start;
  // background-color: yellow;
  // overflow-y: scroll;
  gap: 1rem;
  margin: 0 auto 0 20px;
  height: 114px;
  overflow: scroll;
  div {
    max-width: 80px;
  }
`;
const CardTitle = styled(Text)`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[200]};
  text-align: center;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default function RecommendedPhotographer() {
  const router = useRouter();
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

  const handlePhotographerCard = (photographerId: number) => {
    router.push(`/photographer/${photographerId}`);
  };
  return (
    <CardContainerX>
      {data?.photographerList.map((card) => (
        <Card
          onClick={() => handlePhotographerCard(card.photographerId)}
          key={card.photographerId}
          size="round"
          src={card.profileUrl}
          etc={
            <CardTitle variant="body2_rg">{card.photographerName}</CardTitle>
          }
        />
      ))}
    </CardContainerX>
  );
}
