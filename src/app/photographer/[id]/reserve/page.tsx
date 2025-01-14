'use client';

import { useState } from 'react';
import TNB from '@/components/TNB';
import { DivideLine } from '@/app/signup/styles';
import Info from './_components/Info';
import Place from './_components/Place';

export default function PhotographerReservePage() {
  const [data, setData] = useState<{ univName: string | null }>({
    univName: null,
  });

  const onChangeUniv = (newValue: string) => {
    setData({ ...data, univName: newValue });
  };

  return (
    <div>
      <TNB.SubTitle text="예약 신청" />

      <Info />

      <Place value={data.univName} onChange={onChangeUniv} />

      <DivideLine />
    </div>
  );
}
