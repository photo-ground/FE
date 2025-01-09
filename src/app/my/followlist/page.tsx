'use client';

import styled from 'styled-components';
import TNB from '@/components/TNB';
import FollowItem from '../_component/FollowItem';

const FollowPageWrapper = styled.div`
  background-color: #121212;
  min-height: 100vh;
  color: white;
  padding: 1rem;
`;

export default function FollowPage() {
  const followList = [
    { id: 1, name: '조은준 작가', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: '이현준 작가', avatar: '/path/to/avatar2.jpg' },
    { id: 3, name: '김수연 작가', avatar: '/path/to/avatar3.jpg' },
  ];

  return (
    <FollowPageWrapper>
      <TNB.Back text="팔로우 목록" />
      {followList.map((user) => (
        <FollowItem
          key={user.id}
          avatar={user.avatar}
          name={user.name}
          buttonText="팔로잉"
          onButtonClick={() => alert(`${user.name}의 팔로우를 취소합니다.`)}
        />
      ))}
    </FollowPageWrapper>
  );
}
