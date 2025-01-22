'use client';

import styled from 'styled-components';

import { InputContainer } from '@/styles/input';
import PersonIcon from '@/assets/PersonIcon';
import { SignUpData } from '../type';
const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;

  font-size: ${({ theme }) => theme.typography.body2_rg.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2_rg.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2_rg.lineHeight};
  color: ${({ theme }) => theme.colors.gray[400]};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export default function EmailInput({
  value,
  onChange,
}: {
  value: SignUpData['name'];
  onChange: (newValue: SignUpData['name']) => void;
}) {
  return (
    <Container>
      <InputContainer>
        <PersonIcon />
        <Input
          placeholder="이름"
          type="text"
          name="name"
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      </InputContainer>
    </Container>
  );
}
