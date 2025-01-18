import RightChevronIcon from '@/assets/RightChevronIcon';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default function ListItem({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <ListItemWrapper onClick={onClick}>
      <Text variant="body1_md">{text}</Text>
      <RightChevronIcon size="28px" color="#ffffff" />
    </ListItemWrapper>
  );
}
