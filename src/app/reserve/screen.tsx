'use client';

import styled from 'styled-components';
import Calendar from './_components/Calendar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ReserveScreen() {
  return (
    <Container>
      <Calendar />
    </Container>
  );
}
