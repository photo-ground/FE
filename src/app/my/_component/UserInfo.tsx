import RightChevronIcon from '@/assets/RightChevronIcon';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';

const UserInfoWrapper = styled.div`
  padding: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Greeting = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  display: flex;
  margin-top: auto;
  padding: 0;
  color: ${({ theme }) => theme.colors.gray[200]};
  cursor: pointer;

  &:hover {
    text-decoration: none;
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
        <Text variant="title1_rg">{userName}님,</Text>
        <Text variant="title1_rg">좋은 하루예요!</Text>
      </Greeting>
      <EditButton onClick={onEdit}>
        <Text variant="body2_rg" color="#a6a6a6">
          내 정보 수정
        </Text>
        <RightChevronIcon size="1.25rem" color="#8C8C8C" />
      </EditButton>
    </UserInfoWrapper>
  );
}
