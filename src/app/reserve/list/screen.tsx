'use client';

import TNB from '@/components/TNB';
import Tabs from './_components/Tabs';
import CardList from './_components/CardList';

export default function ReservationListScreen({
  currentTab,
}: {
  currentTab: string;
}) {
  return (
    <>
      <TNB.Back text="예약한 스냅" />

      <Tabs currentTab={currentTab} />

      <CardList />
    </>
  );
}
