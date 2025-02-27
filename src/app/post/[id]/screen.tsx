'use client';

import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import TNB from '@/components/TNB';
import CTAButton from '@/components/atoms/CTAButton';
import FloatingButton from '@/components/FloatingButton';
import useUserStore from '@/store/useUserStore';
import { PostDetail } from './getPostData';
import PostInfo from './_components/PostInfo';
import Photo from './_components/Photo';

const Container = styled.div`
  padding-bottom: 7rem; // todo
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.625rem;

  width: 100%;
`;

export default function PostScreen({ postData }: { postData: PostDetail }) {
  const { isLoggedIn } = useUserStore();
  const [currentPage, setCurrentPage] = useState(0);
  const {
    photographerId,
    photographerName,
    profileUrl,
    content,
    univName,
    imageList,
    createdAt,
  } = postData;

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
        profileUrl={profileUrl}
        createdAt={createdAt}
        content={content}
      />

      <FloatingButton>
        <ButtonWrapper>
          <Link href={`/photographer/${photographerId}`}>
            <CTAButton.Tertiary text="작가 프로필 보기" />
          </Link>
          {isLoggedIn ? (
            <Link href={`/photographer/${photographerId}/reserve`}>
              <CTAButton.Primary text="예약하기" />
            </Link>
          ) : (
            <CTAButton.Primary text="예약하기" disabled />
          )}
        </ButtonWrapper>
      </FloatingButton>
    </Container>
  );
}
