import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Button from './styles';

const SecondaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.gray[900]};
  border: 1px solid transparent;
  cursor: pointer;
`;

export default function Secondary({
  text,
  onClick = () => {},
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <SecondaryButton onClick={onClick}>
      <Text variant="body1_rg">{text}</Text>
    </SecondaryButton>
  );
}
