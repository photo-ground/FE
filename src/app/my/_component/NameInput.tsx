'use client';

import styled from 'styled-components';

import { Input, InputContainer } from '@/styles/input';
import PersonIcon from '@/assets/PersonIcon';
import { SignUpData } from '../type';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export default function NameInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (newValue: string) => void;
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
