'use client';

import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import CalendarSmall from '@/components/CalendarSmall';
import TimeSelector from './TimeSelector';
import { PhotographerReserve } from '../../_libs/getPhotographerData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.5rem 1.25rem;
`;

function getTimeSlot(date: Date, schedule: PhotographerReserve['schedule']) {
  const DAY_LIST = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY',
  ];

  const day = date.getDay();
  return (
    schedule.find((item) => item.weekDay === DAY_LIST[day])?.timeSlot || []
  );
}

export default function DateTime({
  date,
  onChangeDate,
  availableDate,
  time,
  onChangeTime,
  schedule,
}: {
  date: Date | null;
  onChangeDate: (newValue: Date) => void;
  availableDate: PhotographerReserve['availableDate'];
  time: number | null;
  onChangeTime: (newValue: number) => void;
  schedule: PhotographerReserve['schedule'];
}) {
  return (
    <Container>
      <Text variant="title2_sb">예약 가능 시간</Text>

      <CalendarSmall
        value={date}
        onChange={onChangeDate}
        availableDate={availableDate}
      />
      {date && (
        <TimeSelector
          value={time}
          onChange={onChangeTime}
          timeSlot={getTimeSlot(date, schedule)}
        />
      )}
    </Container>
  );
}
