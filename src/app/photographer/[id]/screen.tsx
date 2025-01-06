'use client';

import styled from 'styled-components';
import PhotographerProfile from './_components/PhotographerProfile';
import Price from './_components/Price';
import Message from './_components/Message';
import Review from './_components/Review';

const Container = styled.div`
  padding-bottom: 5rem;
`;

const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
`;

export default function PhotographerDetailScreen() {
  return (
    <Container>
      <PhotographerProfile />

      <DivideLine />

      <Price />

      <DivideLine />

      <Message />

      <DivideLine />

      <Review />

      <DivideLine />
    </Container>
  );
}
