'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';

import CTAButton from '@/components/atoms/CTAButton';
import FloatingButton from '@/components/FloatingButton';
import useUserStore from '@/store/useUserStore';

import PhotographerProfile from './_components/PhotographerProfile';
import Price from './_components/Price';
import Message from './_components/Message';
import Review from './_components/Review';
import Feed from './_components/Feed';
import { PhotographerDetail } from './_libs/getPhotographerData';
import getPhotographerPosts, {
  PostSummary,
} from './_libs/getPhotographerPosts';

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
  photographerId: string;
  data: PhotographerDetail;
}) {
  const { price, introduction, styleList } = data;
  const [postList, setPostList] = useState<PostSummary[]>([]);
  const [hasNext, setHasNext] = useState(true);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

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

      <FloatingButton>
        <Link href={`/photographer/${photographerId}/reserve`}>
          <CTAButton text="예약하기" disabled={!isLoggedIn} />
        </Link>
      </FloatingButton>
    </Container>
  );
}
