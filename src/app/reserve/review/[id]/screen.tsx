'use client';

import styled from 'styled-components';
import TNB from '@/components/TNB';
import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import LargeStarEmptyIcon from '@/assets/LargeStarEmptyIcon';
import LargeStarIcon from '@/assets/LargeStarIcon';
import { Reservation } from '../../list/type';

const Wrapper = styled.div`
  overflow: hidden;
  padding-bottom: 3rem;
  height: calc(100dvh - 6rem);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  padding: 1.5rem 1.25rem;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  height: calc(100dvh - 6rem);

  object-fit: cover;
  z-index: -1;

  overflow: hidden;
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const Name = styled(Text)`
  color: ${({ theme }) => theme.colors.primary[100]};
`;

const FirstLine = styled.div`
  display: flex;
  align-items: center;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  width: 100%;
`;

const Stars = styled.div``;

const Textarea = styled.textarea`
  width: 100%;
  height: 7.5rem;

  background: none;
  padding: 1.25rem;

  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  outline: none;
  border-radius: 1rem;
`;

export default function ReviewScreen({
  reservationDetail,
}: {
  reservationDetail: Reservation;
}) {
  return (
    <Wrapper>
      <TNB.Back text="리뷰 작성" />
      <Background src="/images/background2.webp" alt="background" />

      <Container>
        <TitleArea>
          <FirstLine>
            <Name variant="title1_sb">
              {reservationDetail.photographerName} 작가님
            </Name>
            <Text variant="title1_rg">과의</Text>
          </FirstLine>
          <Text variant="title1_rg">스냅 촬영은 즐거우셨나요?</Text>
        </TitleArea>

        <InputArea>
          <Stars>
            <LargeStarIcon />
            <LargeStarEmptyIcon />
            <LargeStarEmptyIcon />
            <LargeStarEmptyIcon />
            <LargeStarEmptyIcon />
          </Stars>
          <Textarea placeholder="상세한 리뷰가 작가님의 성장에 큰 도움이 돼요!" />
        </InputArea>

        <CTAButton text="작성 완료" />
      </Container>
    </Wrapper>
  );
}
