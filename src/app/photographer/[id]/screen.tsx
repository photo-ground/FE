'use client';

import styled from 'styled-components';
import CTAButton from '@/components/atoms/CTAButton';
import PhotographerProfile from './_components/PhotographerProfile';
import Price from './_components/Price';
import Message from './_components/Message';
import Review from './_components/Review';
import Feed from './_components/Feed';

const Container = styled.div`
  padding-bottom: 6.125rem;
`;

const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 2rem;

  width: 100%;
  padding: 0 1.25rem;
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

      <Feed />

      <ButtonWrapper>
        <CTAButton text="예약하기" />
      </ButtonWrapper>
    </Container>
  );
}
