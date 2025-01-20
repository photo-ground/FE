import { MouseEventHandler } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import Text from '@/components/atoms/Text';

type Variant = 'primary' | 'secondary' | 'tertiary';

const getBackgroundColor = ({
  theme,
  $variant,
  disabled,
}: {
  theme: DefaultTheme;
  $variant: Variant;
  disabled: boolean;
}) => {
  if (disabled) {
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

const getTextColor = ({
  theme,
  $variant,
  disabled,
}: {
  theme: DefaultTheme;
  $variant: Variant;
  disabled: boolean;
}) => {
  if (disabled) {
    return theme.colors.gray[200];
  }

  if ($variant === 'primary') {
    return theme.colors.white;
  }

  if ($variant === 'secondary') {
    return theme.colors.background.primary;
  }

  return theme.colors.gray[100];
};

const Button = styled.button<{ $variant: Variant; disabled: boolean }>`
  width: 100%;
  padding: 1rem 0;
  background: ${(props) => getBackgroundColor(props)};

  outline: none;
  border: none;
  border-radius: 0.5rem;

  cursor: pointer;
`;

const ButtonText = styled(Text)<{ $variant: Variant; disabled: boolean }>`
  color: ${(props) => getTextColor(props)};
`;

export default function CTAButton({
  text,
  variant = 'primary',
  type = 'button',
  disabled = false,
  onClick = () => {},
}: {
  text: string;
  variant?: Variant;
  type?: 'button' | 'submit'; // 나중에 더 추가해주세요...
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      $variant={variant}
    >
      <ButtonText variant="title2_md" disabled={disabled} $variant={variant}>
        {text}
      </ButtonText>
    </Button>
  );
}
