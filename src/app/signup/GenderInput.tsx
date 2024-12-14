'use client';

import Text from '@/components/atoms/Text';
import { useState } from 'react';
import styled from 'styled-components';

type Value = 'male' | 'female';

const OPTION_LIST: { title: string; value: Value }[] = [
  { title: '남성', value: 'male' },
  { title: '여성', value: 'female' },
];

const Container = styled.div`
  display: flex;
  gap: 0.75rem;

  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 1rem;
  background: transparent;

  border: 1px solid
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.white : theme.colors.gray[600]};
  border-radius: 0.5rem;

  cursor: pointer;
`;

const ButtonText = styled(Text)<{ $isSelected: boolean }>`
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.white : theme.colors.gray[400]};
`;

export default function GenderInput() {
  const [value, setValue] = useState<Value | null>(null);

  return (
    <Container>
      {OPTION_LIST.map((option) => {
        const isSelected = value === option.value;
        return (
          <Button
            key={option.value}
            type="button"
            $isSelected={isSelected}
            onClick={() => {
              setValue(option.value);
            }}
          >
            <ButtonText variant="body2_rg" $isSelected={isSelected}>
              {option.title}
            </ButtonText>
          </Button>
        );
      })}
    </Container>
  );
}
