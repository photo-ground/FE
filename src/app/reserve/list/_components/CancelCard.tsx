import Link from 'next/link';
import styled from 'styled-components';

import { ReservationSummary } from '@/types/reservation';
import RightChevronIcon from '@/assets/RightChevronIcon';
import InfoIcon from '@/assets/InfoIcon';
import Text from '@/components/atoms/Text';
import ReserveInfo from '@/components/ReserveInfo';
import Tag from './Tag';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 1.25rem;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[900]};
  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
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

export default function CancelCard({ data }: { data: ReservationSummary }) {
  return (
    <Wrapper>
      <Container>
        <Header>
          <TitleArea>
            <Tag text="예약 취소" type="error" />
            <Link href={`/reserve/${data.reservationId}`}>
              <RightChevronIcon size="20" />
            </Link>
          </TitleArea>

          {data.canceledReason === '작가' && (
            <MessageArea>
              <InfoIcon />
              <Message variant="caption1_rg">
                작가님의 사정으로 예약이 취소되었습니다.
              </Message>
            </MessageArea>
          )}
        </Header>

        <DivideLine />

        <ReserveInfo data={data} chipType="tertiary" />
      </Container>
    </Wrapper>
  );
}
