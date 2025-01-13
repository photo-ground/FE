'use client';

import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import { SignUpData } from '../type';

const OPTION_LIST: { title: string; value: SignUpData['gender'] }[] = [
  { title: '남성', value: 'MALE' },
  { title: '여성', value: 'FEMALE' },
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
      {OPTION_LIST.map((option) => {
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
              {option.title}
            </ButtonText>
          </Button>
        );
      })}
    </Container>
  );
}
