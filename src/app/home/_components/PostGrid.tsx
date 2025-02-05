import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import Text from '@/components/atoms/Text';
import { getPostByUniv } from '../_services/getActivePhotographer';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 0.625rem;

  margin: 0 1.25rem;
`;

const CardWrapper = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
`;

const PostImage = styled(Image)`
  object-fit: cover;
  border-radius: 0.125rem;
`;

const PhotographerName = styled(Text)`
  margin-top: 0.5rem;
`;

const SpotName = styled(Text)`
  margin-top: 0.125rem;
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function PostGrid({ univ }: { univ: string }) {
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
    <CardContainer>
      {data?.pages.map((page) =>
        page.postList.map((card) => (
          <CardWrapper key={card.createdAt} href={`/post/${card.id}`}>
            <ImageWrapper>
              <PostImage
                src={card.firstImageUrl}
                alt={card.photographerName}
                fill
              />
            </ImageWrapper>
            <PhotographerName variant="body1_md">
              {card.photographerName} 작가
            </PhotographerName>
            <SpotName variant="body3">{card.firstImageSpot}</SpotName>
          </CardWrapper>
        )),
      )}
      <div ref={ref} />
    </CardContainer>
  );
}
