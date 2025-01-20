'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import TNB from '@/components/TNB';
import CTAButton from '@/components/atoms/CTAButton';
import { DivideLine } from '@/app/signup/styles';
import Info from './_components/Info';
import Place from './_components/Place';
import NumberSelector from './_components/NumberSelector';
import DateTime from './_components/DateTime';
import Request from './_components/Request';
import Price from './_components/Price';
import { PhotographerReserve } from './getPhotographerData';
import reserve from './reserve';
import { ReserveData } from './type';

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;

  padding: 1.25rem;
`;

function isDisabled(data: ReserveData) {
  if (!data.univName || !data.date || !data.startTime) {
    return true;
  }

  return false;
}

export default function PhotographerReserveScreen({
  photographerId,
  photographerData,
}: {
  photographerId: string;
  photographerData: PhotographerReserve;
}) {
  const router = useRouter();
  const { nickname, price, addPrice, availableDate, schedule } =
    photographerData;

  const [data, setData] = useState<ReserveData>({
    univName: null,
    reserveNum: 1,
    date: new Date(2025, 1, 13),
    requirement: '',
    startTime: null,
  });

  const onChangeUniv = (newValue: string) => {
    setData({ ...data, univName: newValue });
  };

  const onChangeNum = (newValue: number) => {
    if (newValue <= 0) {
      return;
    }
    setData({ ...data, reserveNum: newValue });
  };

  const onChangeDate = (newValue: Date) => {
    setData({ ...data, date: newValue, startTime: null });
  };

  const onChangeRequest = (newValue: string) => {
    setData({ ...data, requirement: newValue });
  };

  const onChangeTime = (newValue: number) => {
    setData({ ...data, startTime: newValue });
  };

  return (
    <div>
      <TNB.SubTitle text="예약 신청" />

      <Info nickname={nickname} />

      <Place value={data.univName} onChange={onChangeUniv} />

      <DivideLine />

      <NumberSelector value={data.reserveNum} onChange={onChangeNum} />

      <DivideLine />

      <DateTime
        date={data.date}
        onChangeDate={onChangeDate}
        availableDate={availableDate}
        time={data.startTime}
        onChangeTime={onChangeTime}
        schedule={schedule}
      />

      <DivideLine />

      <Request value={data.requirement} onChange={onChangeRequest} />

      <DivideLine />

      <Price price={price} addPrice={addPrice} reserveNum={data.reserveNum} />

      <DivideLine />

      <ButtonWrapper>
        <CTAButton text="취소" variant="tertiary" />
        <CTAButton
          text="신청하기"
          disabled={isDisabled(data)}
          onClick={() =>
            reserve(photographerId, data).then(() => {
              router.replace('/reserve');
            })
          }
        />
      </ButtonWrapper>
    </div>
  );
}
