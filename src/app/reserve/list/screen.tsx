'use client';

import TNB from '@/components/TNB';
import Tabs, { ReserveTab } from './_components/Tabs';
import CardList from './_components/CardList';

export default function ReservationListScreen({
  currentTab,
}: {
  currentTab: ReserveTab;
}) {
  return (
    <>
      <TNB.Back text="예약한 스냅" />

      <Tabs currentTab={currentTab} />

      <CardList type={currentTab} />
    </>
  );
}
