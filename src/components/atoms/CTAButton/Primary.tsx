import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import ButtonContainer from './styles';

const Button = styled(ButtonContainer)<{ disabled: boolean }>`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray[500] : theme.colors.primary[500]};

  &:active {
    background: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray[500] : theme.colors.primary[800]};
    border-color: ${({ theme, disabled }) =>
      disabled ? 'transparent' : theme.colors.orange[500]};
  }
`;

const ButtonText = styled(Text)<{ disabled: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray[200] : theme.colors.white};

  &:active {
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray[200] : theme.colors.primary[500]};
  }
`;

export default function Primary({
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
      <ButtonText variant="title2_md" disabled={disabled}>
        {text}
      </ButtonText>
    </Button>
  );
}
