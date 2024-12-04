'use client';

import styled from 'styled-components';
import CalendarLarge from '@/components/CalendarLarge';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ReserveScreen() {
  return (
    <Container>
      <CalendarLarge />
    </Container>
  );
}
