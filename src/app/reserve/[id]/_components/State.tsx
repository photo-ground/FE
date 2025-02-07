import styled from 'styled-components';

import { ReservationStatus } from '@/types/reservation';
import Text from '@/components/atoms/Text';
import ProgressBar from './ProgressBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Box = styled.div`
  display: flex;
  gap: 1rem;

  padding: 2rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;
`;

export default function State({ state }: { state: ReservationStatus }) {
  return (
    <Container>
      <Text variant="title2_sb">진행 상황</Text>
      <Box>
        <ProgressBar state={state} />
      </Box>
    </Container>
  );
}
