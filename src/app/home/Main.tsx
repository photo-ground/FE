'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Banner from '@/components/Banner';
import Spacer from '@/components/Spacer';
import TNB from '@/components/TNB';
import Text from '@/components/atoms/Text';
import ToSearchPage from '@/components/ToSearchPage';

import styled from 'styled-components';

import RightChevronIcon from '@/assets/RightChevronIcon';

import useUserStore from '@/store/useUserStore';
import { UNIV_LIST } from '@/types/univOption';
import useUnivStore from '@/store/useUnivStore';
import checkAuth from '@/lib/checkAuth';
import { useQuery } from '@tanstack/react-query';
import { UserInfoProps } from '@/types/user';
import AlertModal from '@/components/modals/AlertModal';
import CheckIcon from '@/assets/modal/CheckIcon';
import LoadingPage from '@/components/LoadingPage';
import Filter from './_components/Filter';

import PostByUniv from './_components/PostByUniv';
import RecommendedPhotographer from './_components/RecommendedPhotographer';
import { getUserInfo } from '../my/_services/getUserInfo';

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
const SearchWrapper = styled.div`
  margin: 24px 20px;
  // margin-bottom: 24px;
`;

export default function Main() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const role = useUserStore((state) => state.role);
  const token = useUserStore((state) => state.token);
  const router = useRouter();
  const { univ, setUniv } = useUnivStore();
  const [isLoading, setIsLoading] = useState(true);

  const { refetch: fetchUserInfo } = useQuery<UserInfoProps>({
    queryKey: ['user'],
    queryFn: () => getUserInfo(token),
    enabled: false, // 인증된 상태에서만 호출
  });

  // On initial load, set the university if not logged in
  useEffect(() => {
    async function authenticate() {
      const authResult = await checkAuth(); // 분리된 함수 호출
      if (authResult && role === 'ROLE_CUSTOMER') {
        // 인증된 상태에서 사용자 정보 가져오기
        // setIsAuthenticated(authResult); // 인증 됨
        // const user = await fetchUserInfo(); // 데이터 가져와
        // // console.log(user);
        // if (user?.data?.univ) {
        //   setUniv(user.data.univ); // Zustand의 학교 정보 업데이트
        // }
      }

      setIsLoading(false);
    }

    if (isLoggedIn) {
      setIsLoading(false);
      return;
    }

    authenticate();
  }, [isLoggedIn, role, fetchUserInfo, setUniv]);

  // Show loading state
  if (isLoading) {
    return <LoadingPage />;
  }

  // 만약 인증하지 않고 둘러볼 학교도 선택하지 않았다면
  if (!isLoggedIn && !univ && role !== 'ROLE_PHOTOGRAPHER') {
    return (
      <AlertModal
        icon={<CheckIcon />}
        title="잠깐!"
        content="비회원은 둘러볼 학교를 선택해야해요!"
        confirmText="학교 선택하기"
        onConfirm={() => router.replace('/onboarding')}
      />
    );
  }
  const onChangeUniv = (selectedUniv: { value: string }) => {
    setUniv(selectedUniv.value); // Update Zustand state
  };

  return (
    <Container>
      <Background src="/images/background1.webp" alt="background" />
      <TNB.Main />

      {/* 검색 엔진 */}
      <SearchWrapper>
        <ToSearchPage />
      </SearchWrapper>

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
      <Banner />

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
