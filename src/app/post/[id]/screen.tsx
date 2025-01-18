'use client';

import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import TNB from '@/components/TNB';
import CTAButton from '@/components/atoms/CTAButton';
import BREAK_POINT from '@/styles/constants';
import { PostDetail } from './getPostData';
import PostInfo from './_components/PostInfo';
import Photo from './_components/Photo';

const Container = styled.div`
  padding-bottom: 7rem; // todo
`;

const ButtonWrapper = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.625rem;
  bottom: 2rem;

  width: 100%;
  max-width: ${BREAK_POINT}px;
  padding: 0 1.25rem;
`;

export default function PostScreen({ postData }: { postData: PostDetail }) {
  const [currentPage, setCurrentPage] = useState(0);
  const { photographerId, photographerName, content, univName, imageList } =
    postData;

  const onChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <Container>
      <TNB.Back text="게시글" />

      <Photo
        imageList={imageList}
        onChange={onChangePage}
        univName={univName}
        currentPage={currentPage}
      />

      <PostInfo
        photographerId={photographerId}
        photographerName={photographerName}
        content={content}
      />

      <ButtonWrapper>
        <Link href={`/photographer/${photographerId}`}>
          <CTAButton text="작가 프로필 보기" variant="tertiary" />
        </Link>
        <Link href={`/photographer/${photographerId}/reserve`}>
          <CTAButton text="예약하기" />
        </Link>
      </ButtonWrapper>
    </Container>
  );
}
