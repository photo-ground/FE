'use client';

import styled from 'styled-components';
import TNB from '@/components/TNB';
import FollowItem from '../_component/FollowItem';
import followListData from '../_data/followLIstData';
import Text from '@/components/atoms/Text';

const FollowList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 1.5rem 1.25rem;
`;

export default function FollowPage() {
  return (
    <>
      <TNB.Back text="팔로우 목록" />

      <FollowList>
        <Text variant="caption1_md">{9}개의 팔로잉</Text>

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
      </FollowList>
    </>
  );
}
