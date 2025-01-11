'use client';

import styled from 'styled-components';
import TNB from '@/components/TNB';
import FollowItem from '../_component/FollowItem';
import followListData from '../_data/followLIstData';

const FollowPageWrapper = styled.div`
  background-color: #121212;
  min-height: 100vh;
  color: white;
  padding: 1rem;
`;

export default function FollowPage() {
  return (
    <FollowPageWrapper>
      <TNB.Back text="팔로우 목록" />
      {followListData.map((user) => (
        <FollowItem
          key={user.photographerId}
          photographerId={user.photographerId}
          profileUrl={user.profileUrl}
          photographerName={user.photographerName}
          onButtonClick={() =>
            alert(`${user.photographerName}의 팔로우를 취소합니다.`)
          }
        />
      ))}
    </FollowPageWrapper>
  );
}
