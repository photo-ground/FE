'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

import Banner from '@/components/Banner';
import Spacer from '@/components/Spacer';
import TNB from '@/components/TNB';
import Text from '@/components/atoms/Text';

import styled from 'styled-components';

import RightChevronIcon from '@/assets/RightChevronIcon';

import { UNIV_LIST } from '@/types/univOption';
import useUnivStore from '@/store/useUnivStore';
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

// TODO : 만약 로그인한 회원이하면 회원정보에서부터 학교 정보를 가져와야 함.
// function GetUnivFromOnboarding(): string {
//   return univ;
// }

export default function Main() {
  const { univ, isLoggedIn, setUniv } = useUnivStore();

  // On initial load, set the university if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      const univFromParams = univ;
      if (univFromParams) {
        setUniv(univFromParams);
      }
    }
  }, [isLoggedIn, setUniv, univ]);

  const onChangeUniv = (selectedUniv: { value: string }) => {
    setUniv(selectedUniv.value); // Update Zustand state
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
        <Text variant="title1_sb">{univ} 스냅 사진</Text>
        <Filter
          optionList={UNIV_LIST}
          placeholder="학교 변경"
          value={univ}
          onChange={onChangeUniv}
        />
      </TitleContainer>

      {univ && <PostByUniv univ={univ} />}

      {/* ============================================ */}

      <Spacer size="108px" />
    </Container>
  );
}
