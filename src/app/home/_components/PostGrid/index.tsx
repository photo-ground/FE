import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

import { getPostByUniv } from '../../_services/getActivePhotographer';
import {
  CardContainer,
  CardWrapper,
  ImageWrapper,
  PhotographerName,
  PostImage,
  SpotName,
} from './styles';

function Item({
  data,
}: {
  // todo: type data
  data: {
    id: number;
    firstImageUrl: string;
    photographerName: string;
    firstImageSpot: string;
  };
}) {
  const { id, firstImageUrl, photographerName, firstImageSpot } = data;

  return (
    <CardWrapper href={`/post/${id}`}>
      <ImageWrapper>
        <PostImage src={firstImageUrl} alt={photographerName} fill />
      </ImageWrapper>
      <PhotographerName variant="body1_md">
        {photographerName} 작가
      </PhotographerName>
      <SpotName variant="body3">{firstImageSpot}</SpotName>
    </CardWrapper>
  );
}

export default function PostGrid({ univ }: { univ: string }) {
  const { ref, inView } = useInView();
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['mainPost', univ],
    queryFn: ({ pageParam }) => getPostByUniv(univ, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.hasNext) {
        return null;
      }
      return lastPage.postList.at(-1)?.id ?? null;
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <CardContainer>
      {data?.pages.map((page) =>
        page.postList.map((card) => <Item key={card.id} data={card} />),
      )}
      <div ref={ref} />
    </CardContainer>
  );
}
