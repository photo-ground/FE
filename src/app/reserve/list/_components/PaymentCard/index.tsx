import Link from 'next/link';
import styled from 'styled-components';

import RightChevronIcon from '@/assets/RightChevronIcon';
import Text from '@/components/atoms/Text';
import ReserveInfo from '@/components/ReserveInfo';
import CopyIcon from '@/assets/CopyIcon';
import formatPrice from '@/lib/formatPrice';

import Request from './Request';
import Tag from '../Tag';
import { Reservation } from '../../type';

type PaymentStatus = 'wait' | 'check' | 'error';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const DivideLine = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  margin: 1rem 0;
`;

const PriceArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccountArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
`;

const AccountWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const AccountText = styled(Text)`
  color: ${({ theme }) => theme.colors.orange[500]};
`;

function PaymentTag(state: PaymentStatus) {
  if (state === 'wait') return <Tag text="결제 대기 중" />;
  if (state === 'check') return <Tag text="결제 확인 중" />;
  return <Tag text="결제 오류" type="error" />;
}

export default function PaymentCard({
  data,
  state = 'wait',
}: {
  data: Reservation;
  state?: PaymentStatus;
}) {
  return (
    <Wrapper>
      <Container>
        <Header>
          <TitleArea>
            {PaymentTag(state)}
            <Link href={`/reserve/${data.reservationId}`}>
              <RightChevronIcon size="20" />
            </Link>
          </TitleArea>
        </Header>

        <DivideLine />

        <ReserveInfo chipType="tertiary" data={data} />

        <DivideLine />

        <PriceArea>
          <Text variant="title1_sb">금액</Text>
          <Text variant="title1_sb">{formatPrice(data.price)} 원</Text>
        </PriceArea>
        {(state === 'wait' || state === 'error') && (
          <>
            <DivideLine />

            <AccountArea>
              <AccountWrapper>
                <CopyIcon />
                <AccountText variant="body3">
                  {`계좌 000-0000000-000 ‘포토그라운드'`}
                </AccountText>
              </AccountWrapper>
              <AccountText variant="body3">
                위 계좌로 촬영 비용을 입금 후 입금 확인을 요청해주세요!
              </AccountText>
            </AccountArea>
          </>
        )}
      </Container>

      {state === 'wait' && <Request />}
    </Wrapper>
  );
}
