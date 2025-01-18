'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';

import CTAButton from '@/components/atoms/CTAButton';
import BREAK_POINT from '@/styles/constants';

import PhotographerProfile from './_components/PhotographerProfile';
import Price from './_components/Price';
import Message from './_components/Message';
import Review from './_components/Review';
import Feed from './_components/Feed';
import { PhotographerDetail } from './getPhotographerData';
import getPhotographerPosts, { PostSummary } from './getPhotographerPosts';

const Container = styled.div`
  padding-bottom: 6.125rem;
`;

const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
`;

const ButtonWrapper = styled(Link)`
  position: fixed;
  bottom: 2rem;

  width: 100%;
  max-width: ${BREAK_POINT}px;
  padding: 0 1.25rem;
`;

export default function PhotographerDetailScreen({
  photographerId,
  data,
}: {
  photographerId: string;
  data: PhotographerDetail;
}) {
  const {
    profileUrl,
    photographerName,
    followerNum,
    gender,
    age,
    univ,
    price,
    introduction,
    styleList,
  } = data;
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

    setPostList([
      ...postList,
      ...pages[pages.length - 1].profilePostResponseDTOList,
    ]);

    setHasNext(postData?.pages[0].hasNext);
  }, [postData]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <Container>
      <PhotographerProfile
        profileUrl={profileUrl}
        photographerName={photographerName}
        followerNum={followerNum}
        gender={gender}
        age={age}
        univ={univ}
      />

      <DivideLine />

      <Price price={price} />

      <DivideLine />

      <Message introduction={introduction} />

      <DivideLine />

      <Review photographerId={photographerId} />

      <DivideLine />

      <Feed styleList={styleList} postList={postList || []} />
      <div ref={ref} />

      <ButtonWrapper href={`/photographer/${photographerId}/reserve`}>
        <CTAButton text="예약하기" />
      </ButtonWrapper>
    </Container>
  );
}
