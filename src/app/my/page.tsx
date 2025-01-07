'use client';

// TODO : 이 페이지 담는 폴더 이름 [customerId] 로 수정해야함
// import Text from '@/components/atoms/Text';
import TNB from '@/components/TNB';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import UserInfo from './_component/UserInfo';
import ListItem from './_component/ListItem';

const Container = styled.div`
  position: relative;
  height: 100dvh;
`;
const Background = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

const SloganArea = styled.header`
  padding: 0 1.25rem;
`;

export default function PhotographerPage() {
  const router = useRouter();

  const handleEdit = () => {
    router.push('/edit-profile', { query: { userName: '김사진' } }); // 데이터 전달
  };

  return (
    <Container>
      <Background src="/images/background1.webp" alt="background" />

      <TNB.Title text="마이페이지" />

      <UserInfo userName="김사진" onEdit={handleEdit} />
      <ListItem
        text="팔로우 목록"
        onClick={() => router.push('/follow-list')}
      />
      <ListItem
        text="내가 쓴 리뷰"
        onClick={() => router.push('/my-reviews')}
      />
      <ListItem
        text="고객센터"
        onClick={() => router.push('/customer-center')}
      />
    </Container>
  );
}
