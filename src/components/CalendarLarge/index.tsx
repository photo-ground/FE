'use client';

import { useEffect, useState } from 'react';

import Text from '@/components/atoms/Text';
import LeftChevronIcon from '@/assets/LeftChevronIcon';
import RightChevronIcon from '@/assets/RightChevronIcon';
import { ReservationInfo } from '@/app/reserve/type';
import getDateList from './getCalendar';
import {
  Button,
  Container,
  DateCell,
  DateText,
  DayList,
  DayText,
  Header,
  WeekList,
  WeekRow,
} from './styles';

const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

function checkAvailable(dateA: Date, dateB: Date) {
  return dateA.getTime() < dateB.getTime();
}

export default function CalendarLarge({
  currentDate,
  schedule,
}: {
  currentDate: Date;
  schedule: ReservationInfo['reserveDates'];
}) {
  const [startDate, setStartDate] = useState(
    new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
  );
  const [calendar, setCalendar] = useState(getDateList(startDate));

  useEffect(() => {
    setCalendar(getDateList(startDate));
  }, [startDate]);

  const goPrevMonth = () => {
    setStartDate(
      new Date(startDate.getFullYear(), startDate.getMonth() - 1, 1),
    );
  };

  const goNextMonth = () => {
    setStartDate(
      new Date(startDate.getFullYear(), startDate.getMonth() + 1, 1),
    );
  };

  return (
    <Container>
      <Header>
        <Button onClick={goPrevMonth}>
          <LeftChevronIcon />
        </Button>
        <Text variant="header2">
          {startDate.getFullYear()}. {startDate.getMonth() + 1}
        </Text>
        <Button onClick={goNextMonth}>
          <RightChevronIcon />
        </Button>
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
                $isAvailable={checkAvailable(currentDate, date)}
                $isActive={schedule.includes(date.toISOString().split('T')[0])}
              >
                <DateText
                  variant="body1_rg"
                  $isAvailable={checkAvailable(currentDate, date)}
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
