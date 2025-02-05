'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import TNB from '@/components/TNB';
import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import LargeStarEmptyIcon from '@/assets/LargeStarEmptyIcon';
import LargeStarIcon from '@/assets/LargeStarIcon';
import { Reservation } from '../../list/type';
import writeReview from './_libs/writeReivew';

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

const ScoreButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 7.5rem;

  background: none;
  padding: 1.25rem;

  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  outline: none;
  border-radius: 1rem;
  font-family: 'Pretendard Variable', Pretendard;
`;

export default function ReviewScreen({
  reservationId,
  reservationDetail,
}: {
  reservationId: string;
  reservationDetail: Reservation;
}) {
  const router = useRouter();
  const [score, setScore] = useState(5);
  const [content, setContent] = useState('');

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
            {[1, 2, 3, 4, 5].map((item) => (
              <ScoreButton
                key={item}
                type="button"
                onClick={() => setScore(item)}
              >
                {item <= score ? <LargeStarIcon /> : <LargeStarEmptyIcon />}
              </ScoreButton>
            ))}
          </Stars>
          <Textarea
            placeholder="상세한 리뷰가 작가님의 성장에 큰 도움이 돼요!"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </InputArea>

        <CTAButton.Primary
          text="작성 완료"
          onClick={() => {
            writeReview(reservationId, { score, content }).then((response) => {
              if (response) {
                router.push('/reserve/prev');
              }
            });
          }}
        />
      </Container>
    </Wrapper>
  );
}
