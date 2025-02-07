'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import { COLOR } from '@/constants';
import useUnivStore from '@/store/useUnivStore';

import TNB from '@/components/TNB';
import Text from '@/components/atoms/Text';
import Spacer from '@/components/Spacer';
import { convertToViewportHeight } from '@/styles/convertSize';
import { ScreenWithBottomButton } from '../splash/styles';
import UnivCard, { UnivCardData } from './UnivCard';

const Container = styled(ScreenWithBottomButton)`
  gap: ${convertToViewportHeight(36)};
`;

const Caption = styled(Text)`
  text-align: center;
`;

// 학교 리스트
const UNIV_LIST: UnivCardData[] = [
  {
    title: '서강대학교',
    subTitle: 'Sogang.Univ.',
    src: '/images/sogang.jpg',
    link: '/home?univ=서강대학교',
  },
  {
    title: '연세대학교',
    subTitle: 'Yonsei.Univ.',
    src: '/images/yonsei.jpg',
    link: '/home?univ=연세대학교',
  },
  {
    title: '이화여자대학교',
    subTitle: 'Ewha.Univ.',
    src: '/images/ewha.jpg',
    link: '/home?univ=이화여자대학교',
  },
  {
    title: '홍익대학교',
    subTitle: 'Hongik.Univ.',
    src: '/images/hongik.jpg',
    link: '/home?univ=홍익대학교',
  },
];

export default function OnboardingPage() {
  const { setUniv } = useUnivStore();
  const router = useRouter();

  // 학교 선택 핸들러
  const handleSelectSchool = (university: UnivCardData) => {
    setUniv(university.title); // Zustand 스토어에 선택된 학교 저장
    router.push(university.link); // 선택 후 해당 링크로 이동
  };

  return (
    <main>
      <TNB.Main />

      <Container>
        <header>
          {/* TODO : 현재 사용자 이름으로 업데이트 */}
          <Text variant="title1_rg">안녕하세요.</Text>
          <Text variant="title1_rg">어떤 장소를 둘러볼까요?</Text>
        </header>

        <div>
          {/* 학교 버튼 리스트 */}
          {UNIV_LIST.map((university) => (
            <UnivCard
              key={university.title}
              data={university}
              onClick={() => handleSelectSchool(university)}
            />
          ))}

          <Spacer size="12px" />

          <Caption variant="caption1_rg" color={COLOR.GRAY[400]}>
            더 많은 장소를 기록할 수 있도록 포그가 달리고 있어요!
          </Caption>
        </div>
      </Container>
    </main>
  );
}
