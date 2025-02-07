'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { ReservationSummary } from '@/types/reservation';
import LargeButton from '@/components/atoms/LargeButton';
import ReserveInfo from '@/components/ReserveInfo';
import TNB from '@/components/TNB';

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

function Card({ data }: { data: ReservationSummary }) {
  return (
    <CardWrapper>
      <ReserveInfo data={data} />

      <Link href={`/reserve/review/${data.reservationId}`}>
        <LargeButton.Secondary text="리뷰 작성하기" />
      </Link>
    </CardWrapper>
  );
}

export default function PrevReservationScreen({
  data,
}: {
  data: ReservationSummary[];
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
