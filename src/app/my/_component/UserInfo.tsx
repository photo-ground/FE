import Text from '@/components/atoms/Text';
import styled from 'styled-components';

const UserInfoWrapper = styled.div`
  padding: 1.5rem;
  // background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Greeting = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.2rem;
  }

  strong {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem;
  margin-top: 0;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function UserInfo({
  userName,
  onEdit,
}: {
  userName: string;
  onEdit: () => void;
}) {
  return (
    <UserInfoWrapper>
      <Greeting>
        <TitleContainer>
          <Text variant="title1_sb">
            <p>{userName}님,</p>
            <p>좋은 하루예요!</p>
          </Text>
        </TitleContainer>
      </Greeting>
      <EditButton onClick={onEdit}>내 정보 수정 ›</EditButton>
    </UserInfoWrapper>
  );
}
