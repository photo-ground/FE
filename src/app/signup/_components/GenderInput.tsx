'use client';

import styled from 'styled-components';
import { GENDER_LIST } from '@/types/gender';
import Text from '@/components/atoms/Text';
import { SignUpData } from '../type';

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
  padding: 0.5rem;
  background: transparent;

  border: 1px solid
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.gray[200] : theme.colors.gray[600]};
  border-radius: 0.5rem;

  cursor: pointer;
`;

const ButtonText = styled(Text)<{ $isSelected: boolean }>`
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.white : theme.colors.gray[400]};
`;

export default function GenderInput({
  value,
  onChange,
}: {
  value: SignUpData['gender'];
  onChange: (newValue: SignUpData['gender']) => void;
}) {
  return (
    <Container>
      {GENDER_LIST.map((option) => {
        const isSelected = value === option.value;
        return (
          <Button
            key={option.value}
            type="button"
            $isSelected={isSelected}
            onClick={() => {
              onChange(option.value);
            }}
          >
            <ButtonText variant="body2_rg" $isSelected={isSelected}>
              {option.label}
            </ButtonText>
          </Button>
        );
      })}
    </Container>
  );
}
