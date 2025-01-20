'use client';

import styled from 'styled-components';

import TNB from '@/components/TNB';
import Text from '@/components/atoms/Text';
import { convertToViewportHeight } from '@/styles/convertSize';
import { ScreenWithBottomButton } from '../splash/styles';
import SchoolButtonItem from './SchoolButtonItem';
import { SchoolButtonProps } from './interface';

const Container = styled(ScreenWithBottomButton)`
  gap: ${convertToViewportHeight(48)};
`;

const SloganArea = styled.header`
  padding: 0 1.25rem;
`;

export default function OnboardingPage() {
  const schoolList: SchoolButtonProps[] = [
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
  return (
    <main>
      <TNB.Main />
      <Container>
        <SloganArea>
          {/* TODO : 현재 사용자 이름으로 업데이트  */}
          <Text variant="title1_rg">안녕하세요.</Text>
          <Text variant="title1_rg">어떤 장소를 둘러볼까요?</Text>
        </SloganArea>
        <div>
          {schoolList.map((item) => (
            <SchoolButtonItem
              key={item.title}
              title={item.title}
              subTitle={item.subTitle}
              src={item.src}
              link={item.link}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
