import styled, { DefaultTheme } from 'styled-components';
import Text from '@/components/atoms/Text';

type Variant = 'primary' | 'secondary';

const getBackgroundColor = ({
  theme,
  variant,
  disabled,
}: {
  theme: DefaultTheme;
  variant: Variant;
  active: boolean;
}) => {
  if (disabled) {
    return theme.colors.gray[600];
  }
  if (variant === 'primary') {
    return theme.colors.primary[100];
  }
  return theme.colors.gray[900];
};

const Button = styled.button<{ variant: Variant }>`
  width: 100%;
  padding: 0.75rem 0;
  background: ${(props) => getBackgroundColor(props)};

  outline: none;
  border: none;
  border-radius: 1.5rem;

  cursor: pointer;
`;

const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function Chip({
  text,
  variant = 'primary',
  active = false,
  onClick = () => {},
}: {
  text: string;
  variant?: Variant;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Button variant={variant} onClick={onClick}>
      {active ? (
        <ButtonText variant="body1_md">{text}</ButtonText>
      ) : (
        <Text variant="body1_md">{text}</Text>
      )}
    </Button>
  );
}
