'use client';

import styled from 'styled-components';
import CalendarLarge from '@/components/CalendarLarge';
import TNB from '@/components/TNB';
import ReserveLinks from './_components/ReserveLinks';
// import Notification from './_components/Notification';
import Upcoming from './_components/Upcoming';
import { ReservationInfo } from './type';

const Wrapper = styled.div`
  overflow: hidden;
  padding-bottom: 3rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 0 1.25rem;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100dvh;

  object-fit: cover;
  z-index: -1;

  overflow: hidden;
`;

export default function ReserveScreen({ data }: { data: ReservationInfo }) {
  console.log(data);

  return (
    <Wrapper>
      <Background src="/images/background2.webp" alt="background" />
      <TNB.SubTitle text="예약관리" />

      <Container>
        <CalendarLarge currentDate={new Date()} schedule={data.reserveDates} />
        <ReserveLinks />
        {/* <Notification /> */}
        <Upcoming data={data.upcomingSchedule} />
      </Container>
    </Wrapper>
  );
}
