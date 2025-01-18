'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import CTAButton from '@/components/atoms/CTAButton';
import BREAK_POINT from '@/styles/constants';
import PhotographerProfile from './_components/PhotographerProfile';
import Price from './_components/Price';
import Message from './_components/Message';
import Review from './_components/Review';
import Feed from './_components/Feed';
import { PhotographerDetail } from './getPhotographerData';
import getPhotographerPosts from './getPhotographerPosts';

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
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getPhotographerPosts(photographerId).then((response) => {
      setPostList(response.posts.profilePostResponseDTOList || []);
    });
  }, [photographerId]);

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

      <Feed styleList={styleList} postList={postList} />

      <ButtonWrapper href={`/photographer/${photographerId}/reserve`}>
        <CTAButton text="예약하기" />
      </ButtonWrapper>
    </Container>
  );
}
