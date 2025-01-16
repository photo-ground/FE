'use client';

import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import CalendarSmall from '@/components/CalendarSmall';
import TimeSelector from './TimeSelector';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.5rem 1.25rem;
`;

export default function DateTime({
  date,
  onChangeDate,
  time,
  onChangeTime,
}: {
  date: Date | null;
  onChangeDate: (newValue: Date) => void;
  time: string | null;
  onChangeTime: (newValue: string) => void;
}) {
  return (
    <Container>
      <Text variant="title2_sb">예약 가능 시간</Text>

      <CalendarSmall value={date} onChange={onChangeDate} />
      {date && <TimeSelector value={time} onChange={onChangeTime} />}
    </Container>
  );
}
