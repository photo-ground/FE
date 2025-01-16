'use client';

import Text from '@/components/atoms/Text';
import LeftChevronIcon from '@/assets/LeftChevronIcon';
import RightChevronIcon from '@/assets/RightChevronIcon';
import getDateList from './getCalendar';
import {
  Container,
  DateCell,
  DayList,
  DayText,
  Header,
  WeekList,
  WeekRow,
} from './styles';

const calendar = getDateList(new Date());

const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

export default function CalendarSmall({
  value,
  onChange,
}: {
  value: Date | null;
  onChange: (newValue: Date) => void;
}) {
  return (
    <Container>
      <Header>
        <LeftChevronIcon />
        <Text variant="header3">2024.12</Text>
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
              >
                <Text variant="body1_rg">{date.getDate()}</Text>
              </DateCell>
            ))}
          </WeekRow>
        ))}
      </WeekList>
    </Container>
  );
}
