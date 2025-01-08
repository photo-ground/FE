import { MouseEventHandler } from 'react';
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
    <Button variant={variant} type={type} disabled={disabled} onClick={onClick}>
      {disabled ? (
        <ButtonText variant="title2_sb">{text}</ButtonText>
      ) : (
        <Text variant="title3">{text}</Text>
      )}
    </Button>
  );
}
