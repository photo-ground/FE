'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import { ROLE, User } from '@/types/user';
import useUserStore from '@/store/useUserStore';

import TNB from '@/components/TNB';
import Background from '@/components/Background';
import UserInfo from './_component/UserInfo';
import ListItem from './_component/ListItem';

import { getUserInfo } from './_libs/getUserInfo';

const Container = styled.div`
  position: relative;
  height: 100dvh;
`;

export default function UserPage() {
  const { role } = useUserStore();
  const router = useRouter();

  const { data: userInfo } = useQuery<User>({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

  const handleEdit = () => {
    router.push('/my/editinfo');
  };

  const handleKakaoChat = () => {
    const kakaoWebLink = 'https://open.kakao.com/o/sSt4vndh';

    // 새 탭에서 링크 열기
    window.open(kakaoWebLink, '_blank');
  };
  return (
    <Container>
      <Background type={1} />

      {role === ROLE.CUSTOMER && (
        <>
          <TNB.Title text="마이페이지" />

          <UserInfo userName={userInfo?.name || ''} onEdit={handleEdit} />
          <ListItem
            text="팔로우 목록"
            onClick={() => router.push('/my/followlist')}
          />
          <ListItem
            text="내가 쓴 리뷰"
            onClick={() => router.push('/my/reviews')}
          />
          <ListItem text="고객센터" onClick={() => handleKakaoChat()} />
        </>
      )}
    </Container>
  );
}
