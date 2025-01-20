'use client';

import LargeButton from '@/components/atoms/LargeButton';
// import ReserveInfo from '@/components/ReserveInfo';
import TNB from '@/components/TNB';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.ol``;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 1.25rem;
`;

const DivideLine = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
`;

function Card() {
  return (
    <CardWrapper>
      {/* <ReserveInfo /> */}

      <Link href="/reserve/review/1">
        <LargeButton text="후기 작성" variant="secondary" />
      </Link>
    </CardWrapper>
  );
}

export default function PrevReservationScreen() {
  return (
    <>
      <TNB.Back text="이전 스냅" />

      <Container>
        <Card />
        <DivideLine />
        <Card />
        <DivideLine />
        <Card />
      </Container>
    </>
  );
}
