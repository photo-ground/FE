'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { ROLE } from '@/types/user';
import { UNIV_LIST } from '@/types/university';
import { COLOR } from '@/constants';

import useUserStore from '@/store/useUserStore';

import RightChevronIcon from '@/assets/RightChevronIcon';
import CheckIcon from '@/assets/modal/CheckIcon';

import { Spacer, TNB, Text, AlertModal, Background } from '@/components';
import ToSearchPage from '@/components/ToSearchPage';

import {
  Filter,
  Banner,
  RecommendedPhotographer,
  PostGrid,
} from './_components';
import { Container, More, SearchWrapper, TitleContainer } from './styles';

export default function HomeScreen() {
  const { isLoggedIn, role, univ } = useUserStore();
  const router = useRouter();
  const [selectedUniv, setSelectedUniv] = useState<string | null>(null);

  // 만약 인증하지 않고 둘러볼 학교도 선택하지 않았다면
  if (!isLoggedIn && !univ && role !== ROLE.PHOTOGRAPHER) {
    return (
      <AlertModal
        icon={<CheckIcon />}
        title="잠깐!"
        content="비회원은 둘러볼 학교를 선택해야해요!"
        confirmText="학교 선택하기"
        onConfirm={() => router.push('/onboarding')}
      />
    );
  }

  const onChangeUniv = (newUniv: { value: string }) => {
    setSelectedUniv(newUniv.value);
  };

  return (
    <Container>
      <Background type={1} />
      <TNB.Main />

      <Spacer size="1.5rem" />

      {/* ==================== 검색 엔진 ==================== */}
      <SearchWrapper>
        <ToSearchPage />
      </SearchWrapper>

      <Spacer size="1.5rem" />

      {/* ==================== 추천 작가 리스트 ==================== */}
      <TitleContainer>
        <Text variant="title1_sb">추천 작가</Text>
        <More href="/photographer">
          <Text variant="caption1_rg" color={COLOR.GRAY[300]}>
            더보기
          </Text>
          <RightChevronIcon size="20px" color={COLOR.GRAY[300]} />
        </More>
      </TitleContainer>

      <RecommendedPhotographer />

      <Spacer size="3rem" />

      {/* ==================== 배너 ==================== */}
      <Banner />

      <Spacer size="3rem" />

      {/* ==================== 학교별 포토스팟 ==================== */}
      <TitleContainer>
        <Text variant="title1_sb">{univ} 스냅 사진</Text>
        <Filter
          optionList={UNIV_LIST}
          placeholder="학교 변경"
          value={selectedUniv}
          onChange={onChangeUniv}
        />
      </TitleContainer>

      {univ && <PostGrid univ={univ} />}

      <Spacer size="6rem" />
    </Container>
  );
}
