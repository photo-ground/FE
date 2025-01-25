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

import { UNIV_LIST } from '@/types/univOption';
import useUnivStore from '@/store/useUnivStore';
import checkAuth from '@/lib/checkAuth';
import { useQuery } from '@tanstack/react-query';
import { UserInfoProps } from '@/types/user';
import Filter from './_components/Filter';

import PostByUniv from './_components/PostByUniv';
import RecommendedPhotographer from './_components/RecommendedPhotographer';
import Modal from '../my/_component/Modal';
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

// TODO : 만약 로그인한 회원이하면 회원정보에서부터 학교 정보를 가져와야 함.

export default function Main() {
  const router = useRouter();
  const { univ, setUniv } = useUnivStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { refetch: fetchUserInfo } = useQuery<UserInfoProps>({
    queryKey: ['user'],
    queryFn: getUserInfo,
    enabled: false, // 인증된 상태에서만 호출
  });

  // On initial load, set the university if not logged in
  useEffect(() => {
    async function authenticate() {
      // console.log
      const authResult = await checkAuth(); // 분리된 함수 호출
      if (authResult) {
        // 인증된 상태에서 사용자 정보 가져오기
        setIsAuthenticated(authResult);
        const user = await fetchUserInfo();
        if (user?.data?.univ) {
          setUniv(user.data.univ); // Zustand의 학교 정보 업데이트
        }
      }

      setIsLoading(false);
    }

    authenticate();
  }, [fetchUserInfo, setUniv]);

  // Show loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 만약 인증이 되지 않았고, 둘러볼 학교를 선택하지 않았다면
  if (!isAuthenticated && !univ) {
    return (
      <Modal
        onClose={() => router.replace('/onboarding')}
        buttonValue="학교 선택하기"
        modalTitle="잠깐!"
        modalText="비회원은 둘러볼 학교를 선택해야해요!"
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
      <ToSearchPage />

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
