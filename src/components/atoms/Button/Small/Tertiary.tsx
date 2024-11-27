import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Button from './styles';

const TertiaryButton = styled(Button)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary[100]};
`;

const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary[100]};
`;

export default function Tertiary({ text }: { text: string }) {
  return (
    <TertiaryButton>
      <ButtonText variant="body3">{text}</ButtonText>
    </TertiaryButton>
  );
}
