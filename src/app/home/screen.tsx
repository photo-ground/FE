'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import { UNIV_LIST } from '@/types/univOption';
import { COLOR } from '@/constants';

import useUserStore from '@/store/useUserStore';

import RightChevronIcon from '@/assets/RightChevronIcon';
import CheckIcon from '@/assets/modal/CheckIcon';

import Spacer from '@/components/Spacer';
import TNB from '@/components/TNB';
import Text from '@/components/atoms/Text';
import ToSearchPage from '@/components/ToSearchPage';
import AlertModal from '@/components/modals/AlertModal';
import Background from '@/components/Background';

import Filter from './_components/Filter';
import PostGrid from './_components/PostGrid';
import RecommendedPhotographer from './_components/RecommendedPhotographer';
import Banner from './_components/Banner';

const Container = styled.div`
  position: relative;
  height: 100dvh;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
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
const SearchWrapper = styled.div`
  margin: 0 1.25rem;
`;

export default function HomeScreen() {
  const { isLoggedIn, role, univ, setUniv } = useUserStore();
  const router = useRouter();
  const [, setSelectedUniv] = useState<string | null>(null);

  // 만약 인증하지 않고 둘러볼 학교도 선택하지 않았다면
  if (!isLoggedIn && !univ && role !== 'ROLE_PHOTOGRAPHER') {
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
    setUniv(newUniv.value);
    setSelectedUniv(newUniv.value);
  };

  return (
    <Container>
      <Background type={1} />
      <TNB.Main />

      <Spacer size="1.5rem" />

      {/* 검색 엔진 */}

      <SearchWrapper>
        <ToSearchPage />
      </SearchWrapper>

      <Spacer size="1.5rem" />

      {/* ============================================ */}

      {/* 추천 작가 리스트 */}
      <TitleContainer>
        <Text variant="title1_sb">추천 작가</Text>
        <IconTextLink href="/photographer">
          <Text variant="caption1_rg" color={COLOR.GRAY[300]}>
            더보기
          </Text>
          <RightChevronIcon size="20px" color={COLOR.GRAY[300]} />
        </IconTextLink>
      </TitleContainer>

      <RecommendedPhotographer />

      <Spacer size="3rem" />

      {/* ============================================ */}

      {/* 배너 */}
      <Banner />

      <Spacer size="3rem" />

      {/* ============================================ */}

      {/* 학교별 포토스팟 */}
      <TitleContainer>
        <Text variant="title1_sb">{univ} 스냅 사진</Text>
        <Filter
          optionList={UNIV_LIST}
          placeholder="학교 변경"
          value={univ} // 현재 선택된 값
          onChange={onChangeUniv}
        />
      </TitleContainer>

      {univ && <PostGrid univ={univ} />}

      {/* ============================================ */}

      <Spacer size="6rem" />
    </Container>
  );
}
