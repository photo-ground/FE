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

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem;
  margin-top: 0;
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
    title: `Small Card ${index + 1}`,
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
      <Spacer size="1.5rem" />
      <TitleContainer>
        <Text variant="title1_sb">활발히 활동 중인 작가</Text>
        <Text variant="caption1_rg"> 더보기</Text>
      </TitleContainer>
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
      <Spacer size="3rem" />

      <Banner src="https://via.placeholder.com/150" />
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
