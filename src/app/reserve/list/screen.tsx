'use client';

import { ReservationSummary } from '@/types/reservation';
import TNB from '@/components/TNB';
import CardList from './_components/CardList';

export default function ReservationListScreen({
  reservationList,
}: {
  reservationList: ReservationSummary[];
}) {
  return (
    <>
      <TNB.Back text="예약한 스냅" />

      <CardList reservationList={reservationList} />
    </>
  );
}
