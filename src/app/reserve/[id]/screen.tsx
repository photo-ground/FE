'use client';

import { useState } from 'react';
import styled from 'styled-components';

import { ReservationDetail } from '@/types/reservation';
import TNB from '@/components/TNB';
import CTAButton from '@/components/atoms/CTAButton';
import ConfirmModal from '@/components/modals/ConfirmModal';
import WarningIcon from '@/assets/modal/WarningIcon';

import Info from './_components/Info';
import Message from './_components/Message';
import State from './_components/State';
import cancelReservation from './_libs/cancelReservation';

const Container = styled.div`
  padding-bottom: 5rem;
`;

const Wrapper = styled.div`
  padding: 1.5rem 1.25rem;
`;

const DivideLine = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export default function ReserveDetailScreen({
  reservationId,
  data,
}: {
  reservationId: string;
  data: ReservationDetail;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <TNB.Back text="예약 상세" />

      <Wrapper>
        <Info data={data} />
        <Message message={data.requirement} />

        <DivideLine />

        <State state={data.status} />

        {data.status === '예약대기' && (
          <CTAButton.Tertiary text="예약 취소하기" onClick={onOpen} />
        )}

        {isOpen && (
          <ConfirmModal
            icon={<WarningIcon />}
            onCancel={onClose}
            onConfirm={() => {
              cancelReservation(reservationId).then((response) => {
                if (!response) {
                  alert('문제가 발생했습니다');
                } else {
                  window.location.reload();
                }
              });
            }}
            title="정말로 이 예약을 취소할까요?"
            content="취소한 예약은 되돌릴 수 없어요"
            confirmText="취소하기"
            cancelText="유지하기"
          />
        )}
      </Wrapper>
    </Container>
  );
}
