import Link from 'next/link';
import styled from 'styled-components';
import CurrentReservationIcon from '@/assets/CurrentReservationIcon';
import PrevReservationIcon from '@/assets/PrevReservationIcon';
import Text from '@/components/atoms/Text';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.75rem;

  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  padding: 1.25rem;

  border: none;
  border-radius: 0.625rem;
  outline: none;

  text-decoration: none;
`;

const PrevButton = styled(Button)`
  background: linear-gradient(
    96.52deg,
    rgba(140, 140, 140, 0.2) -5.13%,
    rgba(191, 191, 191, 0.2) 56.92%,
    rgba(89, 89, 89, 0.2) 118.97%
  );
`;

const CurrentButton = styled(Button)`
  background: ${({ theme }) => theme.colors.primary[500]};
`;

export default function ReserveLinks() {
  return (
    <Container>
      <PrevButton href="/reserve/prev">
        <PrevReservationIcon />
        <Text variant="body1_md">이전 스냅</Text>
      </PrevButton>
      <CurrentButton href="/reserve/list">
        <CurrentReservationIcon />
        <Text variant="body1_md">예약한 스냅</Text>
      </CurrentButton>
    </Container>
  );
}
