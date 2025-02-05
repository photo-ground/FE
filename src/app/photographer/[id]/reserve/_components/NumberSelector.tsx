'use client';

import MinusIcon from '@/assets/MinusIcon';
import PlusIcon from '@/assets/PlusIcon';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 1.25rem;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;

  padding: 0.5rem 0.75rem;
  background: ${({ theme }) => theme.colors.primary[500]};
  border-radius: 0.5rem;
`;

const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Message = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function NumberSelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (newValue: number) => void;
}) {
  return (
    <Container>
      <Line>
        <Text variant="title2_sb">인원 선택</Text>
        <InputContainer>
          <ButtonWrapper
            type="button"
            onClick={() => {
              onChange(value - 1);
            }}
          >
            <MinusIcon />
          </ButtonWrapper>
          <Text variant="title3">{value}</Text>
          <ButtonWrapper
            type="button"
            onClick={() => {
              onChange(value + 1);
            }}
          >
            <PlusIcon />
          </ButtonWrapper>
        </InputContainer>
      </Line>

      <Message variant="caption1_rg">
        인원 추가에 따른 추가 비용이 발생합니다.
      </Message>
    </Container>
  );
}
