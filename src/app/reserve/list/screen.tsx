'use client';

import TNB from '@/components/TNB';
import CardList from './_components/CardList';
import { Reservation } from './type';

export default function ReservationListScreen({
  reservationList,
}: {
  reservationList: Reservation[];
}) {
  return (
    <>
      <TNB.Back text="예약한 스냅" />

      <CardList reservationList={reservationList} />
    </>
  );
}
