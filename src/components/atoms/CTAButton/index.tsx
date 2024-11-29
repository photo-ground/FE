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
  disabled: boolean;
}) => {
  if (disabled) {
    return theme.colors.gray[600];
  }
  if (variant === 'primary') {
    return theme.colors.primary[100];
  }
  return theme.colors.gray[900];
};

const Button = styled.button<{ variant: Variant; disabled: boolean }>`
  width: 100%;
  padding: 1rem 0;
  background: ${(props) => getBackgroundColor(props)};

  outline: none;
  border: none;
  border-radius: 0.5rem;

  cursor: pointer;
`;

const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function CTAButton({
  text,
  variant = 'primary',
  disabled = false,
  onClick = () => {},
}: {
  text: string;
  variant?: Variant;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <Button variant={variant} disabled={disabled} onClick={onClick}>
      {disabled ? (
        <ButtonText variant="title2">{text}</ButtonText>
      ) : (
        <Text variant="title3">{text}</Text>
      )}
    </Button>
  );
}
