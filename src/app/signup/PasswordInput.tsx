'use client';

import styled from 'styled-components';

import PasswordIcon from '@/assets/PasswordIcon';
import PasswordConfirmIcon from '@/assets/PasswordConfirmIcon';
import { Input, InputContainer } from '@/styles/input';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export default function PasswordInput() {
  return (
    <Container>
      <InputContainer>
        <PasswordIcon size="1.5rem" />
        <Input placeholder="비밀번호" />
      </InputContainer>

      <InputContainer>
        <PasswordConfirmIcon size="1.5rem" />
        <Input placeholder="비밀번호 확인" />
      </InputContainer>
    </Container>
  );
}
