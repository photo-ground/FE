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

export default function CalendarLarge() {
  return (
    <Container>
      <Header>
        <LeftChevronIcon />
        <Text variant="header2">2024.12</Text>
        <RightChevronIcon />
      </Header>

      <DayList>
        {DAY_LIST.map((day) => (
          <DayText key={day} variant="caption3">
            {day}
          </DayText>
        ))}
      </DayList>

      <WeekList>
        {calendar.map((week) => (
          <WeekRow key={week[0].toISOString()}>
            {week.map((date) => (
              <DateCell key={date.toISOString()}>
                <Text variant="body1_rg">{date.getDate()}</Text>
              </DateCell>
            ))}
          </WeekRow>
        ))}
      </WeekList>
    </Container>
  );
}
