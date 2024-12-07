'use client';

import React from 'react';

import Banner from '@/components/Banner';
import Spacer from '@/components/Spacer';
import Card from '@/components/Card';
import TNB from '@/components/TNB';
import styled from 'styled-components';
import SearchEngine from './_components/SearchEngine';
import HeaderTitle from './_components/HeaderTitle';

const Container = styled.div`
  position: relative;
  height: 100dvh;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Background = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

const CardContainerX = styled.div`
  // position: relative; /* z-index 적용 가능하게 설정 */
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  margin: 0 auto 0 20px;
`;

const CardContainerY = styled.div`
  // position: relative; /* z-index 적용 가능하게 설정 */
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  overflow-y: scroll;
  gap: 10px;
  margin: 0 auto;
`;

export default function HomePage() {
  // 10개의 카드 데이터를 생성
  const cards = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    content: 'This is a card.',
    size: 'small',
    src: 'https://via.placeholder.com/150',
    title: `Small Card ${index + 1}`,
  }));
  return (
    <Container>
      <Background src="/images/background1.webp" alt="background" />
      <TNB.Main />
      <SearchEngine />
      <Spacer size="24px" />
      <HeaderTitle title="활발히 활동 중인 작가" />
      <CardContainerX>
        {cards.map((card) => (
          <Card
            key={card.id}
            content={card.content}
            size="small"
            src={card.src}
            title={card.title}
          />
        ))}
      </CardContainerX>
      <Spacer size="48px" />

      <Banner src="https://via.placeholder.com/150" />
      <Spacer size="48px" />

      <HeaderTitle title="최근 연세대학교 스냅 사진" />

      <CardContainerY>
        {' '}
        {cards.map((card) => (
          <Card
            key={card.id}
            content={card.content}
            size="medium"
            src={card.src}
            title={card.title}
          />
        ))}
      </CardContainerY>
    </Container>
  );
}
