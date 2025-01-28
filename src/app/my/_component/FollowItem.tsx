import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import follow from '@/app/photographer/[id]/_libs/follow';
import unfollow from '@/app/photographer/[id]/_libs/unfollow';
import SmallButton from '@/components/atoms/SmallButton';
import Text from '@/components/atoms/Text';

const UserCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.625rem 1.25rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;
`;

const PhotographerInfo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Avatar = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 100%;
`;

const PhotographerName = styled(Text)`
  margin-left: 1rem;
`;

export default function FollowItem({
  photographerId,
  profileUrl,
  photographerName,
}: {
  photographerId: number;
  profileUrl: string;
  photographerName: string;
}) {
  const [isFollowing, setIsFollowing] = useState(true);

  return (
    <UserCardWrapper>
      <PhotographerInfo href={`/photographer/${photographerId}`}>
        <Avatar src={profileUrl} alt={photographerName} />
        <PhotographerName variant="body1_md">
          {photographerName} 작가
        </PhotographerName>
      </PhotographerInfo>

      {isFollowing ? (
        <SmallButton.Tertiary
          text="팔로잉"
          onClick={() => {
            unfollow(photographerId.toString());
            setIsFollowing(false);
          }}
        />
      ) : (
        <SmallButton.Primary
          text="팔로우"
          onClick={() => {
            follow(photographerId.toString());
            setIsFollowing(true);
          }}
        />
      )}
    </UserCardWrapper>
  );
}
