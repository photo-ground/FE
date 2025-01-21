import Link from 'next/link';
import styled from 'styled-components';

import RightChevronIcon from '@/assets/RightChevronIcon';
import Text from '@/components/atoms/Text';
import ReserveInfo from '@/components/ReserveInfo';
import LargeButton from '@/components/atoms/LargeButton';
import InfoIcon from '@/assets/InfoIcon';
import Tag from './Tag';
import { Reservation } from '../type';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin: 0 1.25rem;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[900]};
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MessageArea = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const Message = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const DivideLine = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  margin: 1rem 0;
`;

export default function ReserveCard({ data }: { data: Reservation }) {
  return (
    <Wrapper>
      <Container>
        <Header>
          <TitleArea>
            <Tag text="예약 확인 중" />
            <Link href={`/reserve/${data.reservationId}`}>
              <RightChevronIcon size="20" />
            </Link>
          </TitleArea>

          <MessageArea>
            <InfoIcon />
            <Message variant="caption1_rg">
              예약 확인까지 평균 2시간 정도 소요됩니다.
            </Message>
          </MessageArea>
        </Header>

        <DivideLine />

        <ReserveInfo data={data} chipType="tertiary" />
      </Container>

      {data.status === '예약대기' && (
        <LargeButton variant="tertiary" text="예약 취소하기" />
      )}
    </Wrapper>
  );
}
