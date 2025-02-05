import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import ButtonContainer from './styles';

const Button = styled(ButtonContainer)<{ disabled: boolean }>`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray[500] : theme.colors.white};

  &:active {
    background: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray[500] : theme.colors.gray[300]};
    border-color: ${({ theme, disabled }) =>
      disabled ? 'transparent' : theme.colors.orange[100]};
  }
`;

const ButtonText = styled(Text)<{ disabled: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray[200] : theme.colors.black};

  &:active {
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray[200] : theme.colors.gray[100]};
  }
`;

export default function Secondary({
  text,
  type = 'button',
  disabled = false,
  onClick = () => {},
}: {
  text: string;
  type?: 'button' | 'submit'; // 나중에 더 추가해주세요...
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button type={type} disabled={disabled} onClick={onClick}>
      <ButtonText variant="body1_md" disabled={disabled}>
        {text}
      </ButtonText>
    </Button>
  );
}
