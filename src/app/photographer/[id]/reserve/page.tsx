'use client';

import { useState } from 'react';
import styled from 'styled-components';
import TNB from '@/components/TNB';
import CTAButton from '@/components/atoms/CTAButton';
import { DivideLine } from '@/app/signup/styles';
import Info from './_components/Info';
import Place from './_components/Place';
import NumberSelector from './_components/NumberSelector';
import DateSelector from './_components/DateSelector';
import Request from './_components/Request';
import Price from './_components/Price';

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;

  padding: 1.25rem;
`;

export default function PhotographerReservePage() {
  const [data, setData] = useState<{
    univName: string | null;
    reserveNum: number;
    date: Date | null;
    requirement: string;
  }>({
    univName: null,
    reserveNum: 1,
    date: null,
    requirement: '',
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
    setData({ ...data, date: newValue });
  };

  const onChangeRequest = (newValue: string) => {
    setData({ ...data, requirement: newValue });
  };

  return (
    <div>
      <TNB.SubTitle text="예약 신청" />

      <Info />

      <Place value={data.univName} onChange={onChangeUniv} />

      <DivideLine />

      <NumberSelector value={data.reserveNum} onChange={onChangeNum} />

      <DivideLine />

      <DateSelector value={data.date} onChange={onChangeDate} />

      <DivideLine />

      <Request value={data.requirement} onChange={onChangeRequest} />

      <DivideLine />

      <Price />

      <DivideLine />

      <ButtonWrapper>
        <CTAButton text="취소" variant="secondary" />
        <CTAButton text="신청하기" disabled />
      </ButtonWrapper>
    </div>
  );
}
