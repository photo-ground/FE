'use client';

import { useState } from 'react';
import styled from 'styled-components';

import PasswordIcon from '@/assets/PasswordIcon';
import PasswordConfirmIcon from '@/assets/PasswordConfirmIcon';
import Text from '@/components/atoms/Text';
import { Input, InputContainer } from '@/styles/input';
import { SignUpData } from '../type';
import { InputAreaWrapper } from './EmailInput/styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const Message = styled(Text)<{ $isError?: boolean }>`
  color: ${({ theme, $isError }) =>
    $isError ? theme.colors.negative[500] : theme.colors.gray[400]};

  margin-left: 1rem;
`;

function checkPasswordValid(password: string) {
  if (!password) return true;

  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$!@%&*])[A-Za-z\d$!@%&*]{8,12}$/;
  return regex.test(password);
}

function checkConfirmPassword(password: string, confirmPassword: string) {
  if (!password || !confirmPassword) return true;
  return password === confirmPassword;
}

export default function PasswordInput({
  value,
  onChange,
  onCheckPassword,
  onCheckConfirmPassword,
}: {
  value: SignUpData['password'];
  onChange: (newValue: SignUpData['password']) => void;
  onCheckPassword?: (ok: boolean) => void;
  onCheckConfirmPassword?: (ok: boolean) => void;
}) {
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Container>
      <InputAreaWrapper>
        <InputContainer $isError={!checkPasswordValid(value)}>
          <PasswordIcon size="1.5rem" />
          <Input
            placeholder="비밀번호"
            name="password"
            type="password"
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
              if (onCheckPassword) {
                onCheckPassword(checkPasswordValid(event.target.value));
              }
            }}
            autoComplete="new-password"
          />
        </InputContainer>

        <Message variant="caption1_rg" $isError={!checkPasswordValid(value)}>
          8~12자의 영문, 숫자, 특수문자($,!,@,%,&,*) 포함
        </Message>
      </InputAreaWrapper>

      <InputAreaWrapper>
        <InputContainer
          $isError={!checkConfirmPassword(value, confirmPassword)}
        >
          <PasswordConfirmIcon size="1.5rem" />
          <Input
            placeholder="비밀번호 확인"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
              if (onCheckConfirmPassword) {
                onCheckConfirmPassword(
                  checkConfirmPassword(value, event.target.value),
                );
              }
            }}
            autoComplete="new-password"
          />
        </InputContainer>

        {!checkConfirmPassword(value, confirmPassword) && (
          <Message
            variant="caption1_rg"
            $isError={!checkConfirmPassword(value, confirmPassword)}
          >
            비밀번호가 일치하지 않습니다
          </Message>
        )}
      </InputAreaWrapper>
    </Container>
  );
}
