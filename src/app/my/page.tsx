'use client';

// TODO : 이 페이지 담는 폴더 이름 [customerId] 로 수정해야함
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import TNB from '@/components/TNB';
import { UserInfoProps } from '@/types/user';
import { useQuery } from '@tanstack/react-query';

import UserInfo from './_component/UserInfo';
import ListItem from './_component/ListItem';

import { getUserInfo } from './_services/getUserInfo';
import Modal from './_component/Modal';

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
  const [isLoading, setIsLoading] = useState(true);

  // const { refetch: fetchUserInfo } = useQuery<UserInfoProps>({
  //   queryKey: ['user'],
  //   queryFn: getUserInfo,
  //   enabled: false, // 인증된 상태에서만 호출
  // });

  const {
    refetch: fetchUserInfo,
    data: userInfo,
    isError,
    isSuccess,
  } = useQuery<UserInfoProps>({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
    enabled: false,
  });

  // On initial load, set the university if not logged in
  useEffect(() => {
    async function authenticate() {
      // 1. 고객이 경우, 데이터 가져오기기
      if (localStorage.getItem('role') === 'ROLE_CUSTOMER') {
        // 인증된 상태에서 사용자 정보 가져오기
        await fetchUserInfo(); // 데이터 가져와
        // 2. 작가인 경우, 작가 마이페이지로 이동
      } else if (localStorage.getItem('role') === 'ROLE_PHOTOGRAPHER') {
        router.push(`/photographerProfile/14`);
      }
      setIsLoading(false);
    }
    authenticate();
  });

  useEffect(() => {
    if (isError) {
      router.push('/signin');
    }
  }, [isError, router, isSuccess, userInfo]);

  // Show loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

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

      {userInfo?.role === 'ROLE_CUSTOMER' && (
        <>
          <TNB.Title text="마이페이지" />
          {userInfo.role}
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
