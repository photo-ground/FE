'use client';

import styled from 'styled-components';
import Text from '@/components/atoms/Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 1.25rem;
`;

export default function DateSelector({
  value,
  onChange,
}: {
  value: Date | null;
  onChange: (newValue: Date) => void;
}) {
  return (
    <Container>
      <Text variant="title2_sb">예약 가능 시간</Text>
    </Container>
  );
}
