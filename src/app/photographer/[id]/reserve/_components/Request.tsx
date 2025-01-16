'use client';

import Text from '@/components/atoms/Text';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 1.25rem;
`;

const TextArea = styled.textarea`
  padding: 1.25rem;
  margin-top: 1rem;
  background: transparent;
  height: 7.5rem;

  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  outline: none;
  font-family: 'Pretendard Variable', Pretendard;
`;

export default function Request({
  value,
  onChange,
}: {
  value: string;
  onChange: (newValue: string) => void;
}) {
  return (
    <Container>
      <Text variant="title2_sb">요청 사항</Text>

      <TextArea
        placeholder="작가님께 바라는 요청사항을 입력해주세요."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </Container>
  );
}
