import follow from '@/app/photographer/[id]/_libs/follow';
import SmallButton from '@/components/atoms/SmallButton';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';

const UserCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.625rem 1.25rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;
`;

const PhotographerInfo = styled.div`
  display: flex;
  align-items: center;
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
  onButtonClick?: () => void;
}) {
  return (
    <UserCardWrapper>
      <PhotographerInfo>
        <Avatar src={profileUrl} alt={photographerName} />
        <PhotographerName variant="body1_md">
          {photographerName}
        </PhotographerName>
      </PhotographerInfo>

      <SmallButton.Tertiary
        text="팔로우"
        onClick={() => follow(photographerId.toString())}
      />
    </UserCardWrapper>
  );
}
