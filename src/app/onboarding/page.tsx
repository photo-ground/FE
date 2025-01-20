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
      src: '/images/sogang.jpg',
      link: '/home?school=서강대학교',
    },
    {
      title: '연세대학교',
      src: '/images/yonsei.jpg',
      link: '/home?school=연세대학교교',
    },
    {
      title: '이화여자대학교',
      src: '/images/ewha.jpg',
      link: '/home?school=이화여자대학교교',
    },
    {
      title: '홍익대학교',
      src: '/images/hongik.jpg',
      link: '/home?school=홍익대학교',
    },
  ];
  return (
    <main>
      <TNB.Main />
      <Container>
        <SloganArea>
          {/* TODO : 현재 사용자 이름으로 업데이트  */}
          <Text variant="title1_rg">김사진님,</Text>
          <Text variant="title1_rg">어떤 장소를 기록할까요?</Text>
        </SloganArea>
        <div>
          {schoolList.map((item) => (
            <SchoolButtonItem
              key={item.title}
              title={item.title}
              src={item.src}
              link={item.link}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
