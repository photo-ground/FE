import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Button from './styles';

const SecondaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid transparent;
  cursor: pointer;
`;

const ButtonText = styled(Text)`
  white-space: nowrap;
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
      <ButtonText variant="title3" color="#0e0e0e">
        {text}
      </ButtonText>
    </SecondaryButton>
  );
}
