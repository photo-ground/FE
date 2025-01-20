import RightChevronIcon from '@/assets/RightChevronIcon';
import Text from '@/components/atoms/Text';
import Link from 'next/link';
import styled from 'styled-components';
import ReserveCard from './ReserveCard';
import PaymentCard from './PaymentCard';
// import ConfirmCard from './ConfirmCard';
import CancelCard from './CancelCard';
import { Reservation } from '../type';

const Container = styled.div`
  padding: 1.5rem 0;
  margin-bottom: 5rem;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0 1.25rem;
`;

const CaptionText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const ChatLink = styled(Link)`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  text-decoration: none;
`;

const DivideLine = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  margin-top: 5rem;
  margin-bottom: 1.5rem;
`;

function mapCard(reservation: Reservation) {
  switch (reservation.status) {
    case '예약대기':
      return <PaymentCard data={reservation} state="wait" />;

    case '결제대기':
      return <PaymentCard data={reservation} state="check" />;

    // case 'confirm':
    //   return <ConfirmCard />;

    case '예약취소':
      return <CancelCard data={reservation} />;

    default:
      return <ReserveCard data={reservation} />;
  }
}

export default function CardList({
  reservationList,
}: {
  reservationList: Reservation[];
}) {
  return (
    <Container>
      {reservationList.map((reservation) => (
        <div key={reservation.reservationId}>
          {mapCard(reservation)}
          <DivideLine />
        </div>
      ))}

      <InfoArea>
        <div>
          <CaptionText variant="caption1_rg">
            빠른 시일 내에 결제 과정을 자동화할 예정입니다.
          </CaptionText>
          <CaptionText variant="caption1_rg">
            기다려주셔서 감사합니다.
          </CaptionText>
        </div>

        <ChatLink href="/">
          <CaptionText variant="caption1_rg">오픈채팅으로 문의하기</CaptionText>
          <RightChevronIcon size="24" color="#737373" />
        </ChatLink>
      </InfoArea>
    </Container>
  );
}
