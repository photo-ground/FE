import Chip from '@/app/map/_components/Chip';
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
  avatar,
  name,
  buttonText,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onButtonClick,
}: {
  avatar: string;
  name: string;
  buttonText?: string;
  onButtonClick?: () => void;
}) {
  return (
    <UserCardWrapper>
      <Avatar src={avatar} alt={name} />
      <UserInfo>
        <span>{name}</span>
      </UserInfo>
      {buttonText && (
        <Chip
          active={false}
          key="updateconformchip"
          text="수정하기"
          variant="secondary"
          //   onClick={() => onButtonClick()}
        />
      )}
    </UserCardWrapper>
  );
}
