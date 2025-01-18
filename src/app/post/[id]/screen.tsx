'use client';

import styled from 'styled-components';
import TNB from '@/components/TNB';
import { PostDetail } from './getPostData';
import PostInfo from './_components/PostInfo';

const Container = styled.div``;

const ImageArea = styled.div`
  width: 100%;
  aspect-ratio: 390 / 520;
`;

export default function PostScreen({ postData }: { postData: PostDetail }) {
  const { id, photographerId, photographerName, content, univName } = postData;

  return (
    <Container>
      <TNB.Back text="게시글" />

      <ImageArea />

      <PostInfo
        photographerId={photographerId}
        photographerName={photographerName}
        content={content}
      />
    </Container>
  );
}
