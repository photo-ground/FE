import Link from 'next/link';
import styled from 'styled-components';
import RightChevronIcon from '@/assets/RightChevronIcon';
import Text from '@/components/atoms/Text';
import ReserveInfo from '@/components/ReserveInfo';
import LargeButton from '@/components/atoms/LargeButton';
import Tag from './Tag';
import { Reservation } from '../type';

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

  margin-bottom: 1.5rem;
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

const Message = styled(Text)`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function ConfirmCard({ data }: { data: Reservation }) {
  return (
    <Wrapper>
      <Container>
        <Header>
          <TitleArea>
            <Tag text="예약 확정" type="success" />
            <Link href={`/reserve/${data.reservationId}`}>
              <RightChevronIcon size="20" />
            </Link>
          </TitleArea>
        </Header>

        <DivideLine />

        <ReserveInfo data={data} chipType="link" />
      </Container>

      <Message variant="body3">
        최종 촬영이 완료되었다면, 하단 버튼을 눌러주세요.
      </Message>

      <LargeButton variant="tertiary" text="최종 촬영 완료" />
    </Wrapper>
  );
}
