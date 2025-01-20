'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import Banner from '@/components/Banner';
import Spacer from '@/components/Spacer';
import TNB from '@/components/TNB';
import Text from '@/components/atoms/Text';

import styled from 'styled-components';

import RightChevronIcon from '@/assets/RightChevronIcon';

import {
  UnivOption,
  UNIV_LIST,
  UnivLabel,
  UnivValue,
} from '@/types/univOption';
import SearchEngine from './_components/SearchEngine';
import Filter from './_components/Filter';

import PostByUniv from './_components/PostByUniv';
import RecommendedPhotographer from './_components/RecommendedPhotographer';

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
  const searchParams = useSearchParams(); // App Router의 새로운 API
  const univ = searchParams.get('univ'); // 'univ' 쿼리 파라미터 가져오기
  console.log(univ);

  const [currUniv, setUniv] = useState<UnivLabel | null>(null);
  const [univTitle, setUnivTitle] = useState<UnivLabel | null>(null);

  // 쿼리 파라미터가 변할 때 상태를 업데이트
  useEffect(() => {
    if (typeof univ === 'string') {
      setUniv(univ);
    } else {
      setUniv(null); // 쿼리가 없거나 잘못된 경우 null로 설정
    }
  }, [univ]);

  const onChangeUniv = (prop: UnivOption) => {
    setUniv(prop.value); // 영문
    setUnivTitle(prop.label); // 국문
  };

  return (
    <Container>
      <Background src="/images/background1.webp" alt="background" />
      <TNB.Main />

      {/* 검색 엔진 */}
      <SearchEngine />

      {/* ============================================ */}

      {/* 추천 작가 리스트 */}
      <TitleContainer>
        <Text variant="title1_sb">추천 작가</Text>
        <IconTextLink href="/photographer">
          <Text variant="caption1_rg" color="#8C8C8C">
            더보기
          </Text>
          <RightChevronIcon size="20px" color="#8C8C8C" />
        </IconTextLink>
      </TitleContainer>

      <RecommendedPhotographer />

      {/* ============================================ */}

      <Spacer size="3rem" />

      {/* 배너 */}
      <Banner>
        <BannerContent>졸업 파격 할인</BannerContent>
      </Banner>
      <Spacer size="3rem" />

      {/* ============================================ */}

      {/* 학교별 포토스팟 */}
      <TitleContainer>
        <Text variant="title1_sb">{currUniv} 스냅 사진</Text>
        <Filter
          optionList={UNIV_LIST}
          placeholder="학교 변경"
          value={currUniv}
          onChange={onChangeUniv}
        />
      </TitleContainer>

      {currUniv && <PostByUniv univ={currUniv} />}

      {/* ============================================ */}

      <Spacer size="88px" />
    </Container>
  );
}
