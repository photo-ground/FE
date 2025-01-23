'use client';

// TODO : 이 페이지 담는 폴더 이름 [customerId] 로 수정해야함
import TNB from '@/components/TNB';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import UserInfo from './_component/UserInfo';
import ListItem from './_component/ListItem';

import { useQuery } from '@tanstack/react-query';
import { UserInfoProps } from '@/types/user';
import { getUserInfo } from './_services/getUserInfo';
import { useState } from 'react';
import Modal from './_component/Modal';
import { GetServerSideProps } from 'next';

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
export default function PhotographerPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const { data: userInfo } = useQuery<UserInfoProps>({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });
  // TODO : 수정로직 구현
  const handleEdit = () => {
    router.push('/my/editinfo');
  };

  return (
    <Container>
      <Background src="/images/background1.webp" alt="background" />
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            router.push('/signin'); // 로그인 페이지로 이동
          }}
        />
      )}

      {userInfo && (
        <>
          <TNB.Title text="마이페이지" />
          <UserInfo userName={userInfo.name} onEdit={handleEdit} />
          <ListItem
            text="팔로우 목록"
            onClick={() => router.push('/my/followlist')}
          />
          <ListItem
            text="내가 쓴 리뷰"
            onClick={() => router.push('/my/reviews')}
          />
          <ListItem text="고객센터" />
        </>
      )}
    </Container>
  );
}
