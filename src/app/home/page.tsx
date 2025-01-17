'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Banner from '@/components/Banner';
import Spacer from '@/components/Spacer';
import Card from '@/components/Card';
import TNB from '@/components/TNB';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';
import RightChevronIcon from '@/assets/RightChevronIcon';
import SearchEngine from './_components/SearchEngine';
import Filter from './_components/Filter';
import { Option, UNIV_LIST, UnivLabel, UnivValue } from './type/Option';
import useActivePhotographer from './_services/getActivePhotographer';
import postByUnivData from './_data/postByUnivData';

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
  height: 114px;
`;
const CardTitle = styled.div`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[200]};
  text-align: center;
  text: ${({ theme }) => theme.typography.body3};
`;

const CardContainerY = styled.div`
  display: grid;
  grid: 1fr 1fr / auto-flow;
  flex-wrap: wrap;
  overflow-y: scroll;
  gap: 10px;
  margin: 0 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem;
  margin-top: 0;
`;

const IconTextLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: red;
`;
const BannerContent = styled.div`
  background: linear-gradient(95deg, #a5b4a6 4.32%, #ffa67d 170.81%);
  padding: 1rem;
  height: inherit;
`;

export default function HomePage() {
  const [univ, setUniv] = useState<UnivValue | null>('yonsei');
  const [univTitle, setUnivTitle] = useState<UnivLabel | null>('연세대학교');
  // TODO : 10개의 카드 데이터를 생성 (임시데이터) -> api 명세서보고 수정
  // const cards = Array.from({ length: 10 }, (_, index) => ({
  //   id: index,
  //   content: 'This is a card.',
  //   size: 'small',
  //   src: 'https://via.placeholder.com/150',
  //   title: `Card ${index + 1}`,
  // }));

  // TODO : /api/posts?univ=yonsei&cursor={postId}
  // (첫 조회인 경우 : /api/posts?univ=yonsei)
  const onChangeUniv = (prop: Option) => {
    setUniv(prop.value);
    setUnivTitle(prop.label);
  };

  const { data, isLoading, isError, error } = useActivePhotographer();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }
  return (
    <Container>
      <Background src="/images/background1.webp" alt="background" />
      <TNB.Main />
      <SearchEngine />
      <TitleContainer>
        <Text variant="title1_sb">이 달의 작가</Text>
        <IconTextLink href="/photographer">
          <Text variant="caption1_rg" color="#8C8C8C">
            더보기
          </Text>
          <RightChevronIcon size="20px" color="#8C8C8C" />
        </IconTextLink>
      </TitleContainer>
      <CardContainerX>
        {data?.photographerList.map((card) => (
          <Card
            key={card.photographerId}
            size="round"
            src={card.profileUrl}
            etc={<CardTitle>{card.photographerName}</CardTitle>}
          />
        ))}
      </CardContainerX>

      <Spacer size="3rem" />
      <Banner>
        <BannerContent>졸업 파격 할인</BannerContent>
      </Banner>
      <Spacer size="3rem" />

      <TitleContainer>
        <Text variant="title1_sb">{univTitle} 스냅 사진</Text>
        <Filter
          optionList={UNIV_LIST}
          placeholder="학교 변경"
          value={univ}
          onChange={onChangeUniv}
        />
      </TitleContainer>

      <CardContainerY>
        {postByUnivData.postList.map((card) => (
          <Card
            key={card.id}
            content={card.firstImageSpot}
            size="medium"
            src={card.firstImageUrl}
            title={card.photographerName}
          />
        ))}
      </CardContainerY>
      <Spacer size="88px" />
    </Container>
  );
}
