'use client';

import styled from 'styled-components';

import TNB from '@/components/TNB';
import CTAButton from '@/components/atoms/CTAButton';

import Info from './_components/Info';
import Message from './_components/Message';
import State from './_components/State';
import { ReserveDetail } from './type';

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

export default function ReserveDetailScreen({ data }: { data: ReserveDetail }) {
  return (
    <Container>
      <TNB.Back text="예약 상세" />

      <Wrapper>
        <Info data={data} />
        <Message message={data.requirement} />

        <DivideLine />

        <State state={data.status} />

        <CTAButton variant="tertiary" text="예약 취소하기" disabled />
      </Wrapper>
    </Container>
  );
}
