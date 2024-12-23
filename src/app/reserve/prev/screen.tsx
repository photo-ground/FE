'use client';

import LocationIcon from '@/assets/LocationIcon';
import PeopleIcon from '@/assets/PeopleIcon';
import PhotographerIcon from '@/assets/PhotographerIcon';
import Chip from '@/components/atoms/Chip';
import LargeButton from '@/components/atoms/LargeButton';
import Text from '@/components/atoms/Text';
import ReserveInfo from '@/components/ReserveInfo';
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

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Profile = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.625rem;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const InfoLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const InfoText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

const DivideLine = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
`;

function Card() {
  return (
    <CardWrapper>
      <ReserveInfo />

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
