'use client';

import LargeButton from '@/components/atoms/LargeButton';
import ReserveInfo from '@/components/ReserveInfo';
import TNB from '@/components/TNB';
import Link from 'next/link';
import styled from 'styled-components';
import { Reservation } from '../list/type';

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

function Card({ data }: { data: Reservation }) {
  return (
    <CardWrapper>
      <ReserveInfo data={data} />

      <Link href={`/reserve/review/${data.reservationId}`}>
        <LargeButton text="리뷰 작성하기" variant="secondary" />
      </Link>
    </CardWrapper>
  );
}

export default function PrevReservationScreen({
  data,
}: {
  data: Reservation[];
}) {
  return (
    <>
      <TNB.Back text="이전 스냅" />

      <Container>
        {data.map((reservation, index) => (
          <>
            {index !== 0 && (
              <DivideLine
                key={reservation.reservationId.toString() + index.toString()}
              />
            )}
            <Card key={reservation.reservationId} data={reservation} />
          </>
        ))}
      </Container>
    </>
  );
}
