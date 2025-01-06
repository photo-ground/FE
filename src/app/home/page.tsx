'use client';

import React, { useState } from 'react';

import Banner from '@/components/Banner';
import Spacer from '@/components/Spacer';
import Card from '@/components/Card';
import TNB from '@/components/TNB';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';
import SearchEngine from './_components/SearchEngine';
import Filter from './_components/Filter';
import { Option, UNIV_LIST, UnivLabel, UnivValue } from './type/Option';

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
  display: flex;
  overflow-x: scroll;
  gap: 1rem;
  margin: 0 auto 0 20px;
`;
const CardTitle = styled.div`
  margin-top: 0.75rem;

  color: ${({ theme }) => theme.colors.gray[200]};
  text-align: center;
  text: ${({ theme }) => theme.typography.body3};
`;

const CardContainerY = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  overflow-y: scroll;
  gap: 10px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem;
  margin-top: 0;
`;

const BannerContent = styled.div`
  background: linear-gradient(95deg, #a5b4a6 4.32%, #ffa67d 170.81%);
  padding: 1rem;
  height: inherit;
`;

export default function HomePage() {
  const [univ, setUniv] = useState<UnivValue | null>('yonsei');
  const [univTitle, setUnivTitle] = useState<UnivLabel | null>('연세대학교');
  // 10개의 카드 데이터를 생성
  const cards = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    content: 'This is a card.',
    size: 'small',
    src: 'https://via.placeholder.com/150',
    title: `Card ${index + 1}`,
  }));
  const onChangeUniv = (prop: Option) => {
    setUniv(prop.value);
    setUnivTitle(prop.label);
  };
  return (
    <Container>
      <Background src="/images/background1.webp" alt="background" />
      <TNB.Main />
      <SearchEngine />
      <TitleContainer>
        <Text variant="title1_sb">활발히 활동 중인 작가</Text>
        <Text variant="caption1_rg">더보기</Text>
      </TitleContainer>
      <CardContainerX>
        {cards.map((card) => (
          <Card
            key={card.id}
            size="round"
            src={card.src}
            etc={<CardTitle>{card.title}</CardTitle>}
          />
        ))}
      </CardContainerX>

      <Spacer size="3rem" />
      <Banner>
        <BannerContent>졸업 파격 할인</BannerContent>
      </Banner>
      <Spacer size="3rem" />

      <TitleContainer>
        <Text variant="title1_sb">최근 {univTitle} 스냅 사진</Text>
        <Filter
          optionList={UNIV_LIST}
          placeholder="학교 변경"
          value={univ}
          onChange={onChangeUniv}
        />
      </TitleContainer>

      <CardContainerY>
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
