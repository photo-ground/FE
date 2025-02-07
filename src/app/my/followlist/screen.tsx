'use client';

import styled from 'styled-components';

import { PhotographerFollowing } from '@/types/photographer';
import TNB from '@/components/TNB';
import Text from '@/components/atoms/Text';

import FollowItem from '../_component/FollowItem';

const FollowList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 1.5rem 1.25rem;
`;

export default function FollowScreen({
  data,
}: {
  data: PhotographerFollowing[];
}) {
  return (
    <>
      <TNB.Back text="팔로우 목록" />

      <FollowList>
        <Text variant="caption1_md" color="#a6a6a6">
          {data?.length || 0}개의 팔로잉
        </Text>

        {data?.map((user) => (
          <FollowItem
            key={user.photographerId}
            photographerId={user.photographerId}
            profileUrl={user.profileUrl}
            photographerName={user.photographerName}
          />
        ))}
      </FollowList>
    </>
  );
}
