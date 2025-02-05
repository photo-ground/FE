import { useQuery } from '@tanstack/react-query';

import { PhotographerProps } from '@/types/photographer';
import { getActivePhotographer } from '../../_services/getActivePhotographer';
import {
  CardContainer,
  CardTitle,
  PhotographerItem,
  ProfileImage,
} from './styles';
import Skeleton from './Skeleton';

export default function RecommendedPhotographer() {
  const { isPending, isError, data } = useQuery<PhotographerProps>({
    queryKey: ['photographerList', 'hasNext'],
    queryFn: getActivePhotographer,
  });

  if (isPending || isError) {
    return <Skeleton />;
  }

  return (
    <CardContainer>
      {data?.photographerList.map((card) => (
        <PhotographerItem
          href={`/photographer/${card.photographerId}`}
          key={card.photographerId}
        >
          <ProfileImage
            src={card.profileUrl}
            alt={card.photographerName}
            width={80}
            height={80}
          />
          <CardTitle variant="body2_rg">{card.photographerName}</CardTitle>
        </PhotographerItem>
      ))}
    </CardContainer>
  );
}
