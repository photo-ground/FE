import styled from 'styled-components';
import Text from '@/components/atoms/Text';

type Variant = 'primary' | 'secondary';

const Button = styled.button<{ variant: Variant }>`
  padding: 0.688rem 1.25rem;
  background: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.primary[100] : theme.colors.gray[900]};

  outline: none;
  border: none;
  border-radius: 1.5rem;

  cursor: pointer;
`;

export default function MediumButton({
  text,
  variant = 'primary',
  onClick = () => {},
}: {
  text: string;
  variant?: Variant;
  onClick?: () => void;
}) {
  return (
    <Button variant={variant} onClick={onClick}>
      <Text variant={variant === 'primary' ? 'title3' : 'body1_rg'}>
        {text}
      </Text>
    </Button>
  );
}
