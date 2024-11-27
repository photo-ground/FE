import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Button from './styles';

const SecondaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.gray[900]};
`;

export default function Secondary({ text }: { text: string }) {
  return (
    <SecondaryButton>
      <Text variant="body1_rg">{text}</Text>
    </SecondaryButton>
  );
}
