import styled, { DefaultTheme } from 'styled-components';
import Text from '@/components/atoms/Text';

type Variant = 'primary' | 'secondary' | 'tertiary';

const getBackgroundColor = ({
  theme,
  $variant,
  $disabled,
}: {
  theme: DefaultTheme;
  $variant: Variant;
  $disabled: boolean;
}) => {
  if ($disabled) {
    return theme.colors.gray[600];
  }
  if ($variant === 'primary') {
    return theme.colors.primary[100];
  }
  if ($variant === 'secondary') {
    return theme.colors.white;
  }

  return theme.colors.gray[900];
};

const Button = styled.button<{ $variant: Variant; $disabled: boolean }>`
  width: 100%;
  padding: 0.813rem 0;
  background: ${(props) => getBackgroundColor(props)};

  outline: none;
  border: none;
  border-radius: 0.5rem;

  cursor: pointer;
`;

const getTextColor = ({
  theme,
  $variant,
  $disabled,
}: {
  theme: DefaultTheme;
  $variant: Variant;
  $disabled: boolean;
}) => {
  if ($disabled) {
    return theme.colors.gray[200];
  }
  if ($variant === 'primary') {
    return theme.colors.white;
  }
  if ($variant === 'secondary') {
    return theme.colors.black;
  }

  return theme.colors.gray[100];
};

const ButtonText = styled(Text)<{ $variant: Variant; $disabled: boolean }>`
  color: ${(props) => getTextColor(props)};
`;

export default function LargeButton({
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
    <Button $variant={variant} $disabled={disabled} onClick={onClick}>
      <ButtonText variant="body1_md" $variant={variant} $disabled={disabled}>
        {text}
      </ButtonText>
    </Button>
  );
}
