'use client';

import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import LeftChevronIcon from '@/assets/LeftChevronIcon';
import RightChevronIcon from '@/assets/RightChevronIcon';
import { PhotographerReserve } from '@/app/photographer/[id]/reserve/getPhotographerData';

import {
  Container,
  DateCell,
  DayList,
  DayText,
  Header,
  WeekList,
  WeekRow,
} from './styles';
import getDateList from './getCalendar';

const calendar = getDateList(new Date());

const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

function formatDate(date: Date) {
  return `${date.getFullYear()}. ${date.getMonth() + 1}`;
}

const DateText = styled(Text)<{ disabled: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray[200] : theme.colors.white};
`;

export default function CalendarSmall({
  value,
  onChange,
  availableDate,
}: {
  value: Date | null;
  onChange: (newValue: Date) => void;
  availableDate: PhotographerReserve['availableDate'];
}) {
  return (
    <Container>
      <Header>
        <LeftChevronIcon />
        <Text variant="header3">{formatDate(new Date())}</Text>
        <RightChevronIcon />
      </Header>

      <DayList>
        {DAY_LIST.map((day) => (
          <DayText key={day} variant="caption1_rg">
            {day}
          </DayText>
        ))}
      </DayList>

      <WeekList>
        {calendar.map((week) => (
          <WeekRow key={week[0].toISOString()}>
            {week.map((date) => (
              <DateCell
                key={date.toISOString()}
                onClick={() => onChange(date)}
                $isSelected={date === value}
                disabled={
                  !availableDate.includes(date.toISOString().split('T')[0])
                }
              >
                <DateText
                  variant="body1_rg"
                  disabled={
                    !availableDate.includes(date.toISOString().split('T')[0])
                  }
                >
                  {date.getDate()}
                </DateText>
              </DateCell>
            ))}
          </WeekRow>
        ))}
      </WeekList>
    </Container>
  );
}
