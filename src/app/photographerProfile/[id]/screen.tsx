'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import { PhotographerDetail, PhotographerId } from '@/types/photographer';
import { PostSummary } from '@/types/post';

import PhotographerProfile from '@/app/photographer/[id]/_components/PhotographerProfile';
import Price from '@/app/photographer/[id]/_components/Price';
import Message from '@/app/photographer/[id]/_components/Message';
import Review from '@/app/photographer/[id]/_components/Review';
import Feed from '@/app/photographer/[id]/_components/Feed';
import getPhotographerPosts from '@/app/photographer/[id]/_libs/getPhotographerPosts';

const Container = styled.div`
  padding-bottom: 6.125rem;
`;

const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
`;

export default function PhotographerDetailScreen({
  photographerId,
  data,
}: {
  photographerId: PhotographerId;
  data: PhotographerDetail;
}) {
  const { price, introduction, styleList } = data;
  const [postList, setPostList] = useState<PostSummary[]>([]);
  const [hasNext, setHasNext] = useState(true);

  const { ref, inView } = useInView();
  const { data: postData, fetchNextPage } = useInfiniteQuery({
    queryKey: ['posts', photographerId],
    queryFn: ({ pageParam }) => getPhotographerPosts(photographerId, pageParam),
    initialPageParam: null,
    getNextPageParam: () => {
      if (!postList || postList.length === 0) {
        return null;
      }

      if (hasNext) {
        return postList[postList.length - 1].postId;
      }

      return null;
    },
  });

  useEffect(() => {
    const pages = postData?.pages;
    if (!pages || !pages?.length) return;

    setPostList(pages.flatMap((page) => page.profilePostResponseDTOList));
    setHasNext(postData?.pages[pages.length - 1].hasNext);
  }, [postData]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  return (
    <Container>
      <PhotographerProfile data={data} photographerId={photographerId} />

      <DivideLine />

      <Price price={price} />

      <DivideLine />

      <Message introduction={introduction} />

      <DivideLine />

      <Review photographerId={photographerId} />

      <DivideLine />

      <Feed styleList={styleList} postList={postList || []} />
      <div ref={ref} />
    </Container>
  );
}
