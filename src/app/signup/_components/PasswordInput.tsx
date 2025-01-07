'use client';

import styled from 'styled-components';

import PasswordIcon from '@/assets/PasswordIcon';
import PasswordConfirmIcon from '@/assets/PasswordConfirmIcon';
import { Input, InputContainer } from '@/styles/input';
import { SignUpData } from '../type';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export default function PasswordInput({
  value,
  onChange,
}: {
  value: SignUpData['password'];
  onChange: (newValue: SignUpData['password']) => void;
}) {
  return (
    <Container>
      <InputContainer>
        <PasswordIcon size="1.5rem" />
        <Input
          placeholder="비밀번호"
          name="password"
          type="password"
          value={value}
          autoComplete="new-password"
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      </InputContainer>

      <InputContainer>
        <PasswordConfirmIcon size="1.5rem" />
        <Input
          placeholder="비밀번호 확인"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
        />
      </InputContainer>
    </Container>
  );
}
