'use client';

import { useState } from 'react';
import styled from 'styled-components';
import TNB from '@/components/TNB';
import { PostDetail } from './getPostData';
import PostInfo from './_components/PostInfo';
import Photo from './_components/Photo';

const Container = styled.div``;

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
    </Container>
  );
}
