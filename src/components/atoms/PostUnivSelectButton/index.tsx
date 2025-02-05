import styled from 'styled-components';
import Text from '@/components/atoms/Text';

type ActiveState = 'active' | 'inactive';

const Button = styled.button<{ active: ActiveState }>`
  width: inherit;
  padding: 8px;
  background: ${({ theme, active }) =>
    active === 'active' ? theme.colors.primary[500] : 'transparent'};
  color: ${({ theme, active }) =>
    active === 'active' ? theme.colors.white : theme.colors.gray[200]};
  border: ${({ theme, active }) =>
    active === 'active' ? 'none' : `1px solid ${theme.colors.gray[200]}`};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: ${({ active }) => (active === 'active' ? 0.9 : 0.7)};
  }
`;

export default function PostUnivSelectButton({
  text,
  active = 'inactive',
  onClick = () => {},
}: {
  text: string;
  active?: ActiveState;
  onClick?: () => void;
}) {
  return (
    <Button active={active} onClick={onClick}>
      <Text variant="body2_rg">{text}</Text>
    </Button>
  );
}
