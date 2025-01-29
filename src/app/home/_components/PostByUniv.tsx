/* eslint-disable import/no-extraneous-dependencies */
import { useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Card from '@/components/Card';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { getPostByUniv } from '../_services/getActivePhotographer';

const CardContainerY = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 20px;
  width: inherit;
`;
const CardWrapper = styled(Link)`
  text-decoration: none;
`;

export default function PostByUniv({ univ }: { univ: string }) {
  const { ref, inView } = useInView();
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['photographerList', univ],
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
    <CardContainerY>
      {data?.pages.map((page) =>
        page.postList.map((card) => (
          <CardWrapper
            key={card.createdAt}
            href={`/post/${card.photographerId}`}
          >
            <Card
              key={card.id}
              content={card.firstImageSpot}
              size="medium"
              src={card.firstImageUrl}
              title={card.photographerName}
            />
          </CardWrapper>
        )),
      )}
      <div ref={ref} />
    </CardContainerY>
  );
}
