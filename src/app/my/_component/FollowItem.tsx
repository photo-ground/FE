import SmallButton from '@/components/atoms/SmallButton';
import styled from 'styled-components';

const UserCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  flex: 1;
  margin-left: 1rem;
  color: white;

  span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export default function FollowItem({
  photographerId,
  profileUrl,
  photographerName,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onButtonClick,
}: {
  photographerId: number;
  profileUrl: string;
  photographerName: string;
  onButtonClick?: () => void;
}) {
  function handleFollowButton() {
    console.log(photographerId);
  }
  return (
    <UserCardWrapper>
      <Avatar src={profileUrl} alt={photographerName} />
      <UserInfo>
        <span>{photographerName}</span>
      </UserInfo>
      <SmallButton.Tertiary
        text="팔로우"
        onClick={() => handleFollowButton()}
      />
    </UserCardWrapper>
  );
}
