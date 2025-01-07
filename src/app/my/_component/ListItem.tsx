import styled from 'styled-components';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ListItemText = styled.span`
  font-size: 1rem;
  color: white;
`;

const ListItemArrow = styled.span`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
`;

export default function ListItem({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <ListItemWrapper onClick={onClick}>
      <ListItemText>{text}</ListItemText>
      <ListItemArrow>›</ListItemArrow>
    </ListItemWrapper>
  );
}
