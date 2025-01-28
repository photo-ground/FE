'use client';

import { usePathname } from 'next/navigation';

import theme from '@/styles/theme';
import BNBPhotographerIcon from '@/assets/bnb/BNB_PhotographerIcon';
import BNBMapIcon from '@/assets/bnb/BNB_MapIcon';
import BNBHomeIcon from '@/assets/bnb/BNB_HomeIcon';
import BNBCalendarIcon from '@/assets/bnb/BNB_CalendarIcon';
import BNBProfileIcon from '@/assets/bnb/BNBProfileIcon';
import { Container, Tab, TabText } from './styles';

// 고객 뷰일 경우
const MENU_LIST = [
  { title: '사진작가', route: '/photographer', icon: BNBPhotographerIcon },
  { title: '포토스팟', route: '/map', icon: BNBMapIcon },
  { title: '홈', route: '/home', icon: BNBHomeIcon },
  { title: '예약', route: '/reserve', icon: BNBCalendarIcon },
  { title: '마이페이지', route: '/my', icon: BNBProfileIcon },
];

export default function BottomNavigationBar() {
  const pathname = usePathname();

  console.log('!!', pathname[0]);
  const mainPath = `/${pathname.split('/')[1].split('?')[0]}`;

  if (
    mainPath !== '/photographer' &&
    mainPath !== '/map' &&
    mainPath !== '/home' &&
    mainPath !== '/reserve' &&
    mainPath !== '/my' &&
    mainPath !== '/photographerProfile'
  ) {
    return null;
  }

  return (
    <Container>
      {MENU_LIST.map((menu) => {
        const isSelected =
          mainPath === menu.route ||
          (mainPath === '/photographerProfile' && menu.route === '/my');

        return (
          <Tab key={menu.route} href={menu.route}>
            <menu.icon
              color={
                isSelected ? theme.colors.primary[100] : theme.colors.gray[300]
              }
            />
            <TabText variant="caption3" $isSelected={isSelected}>
              {menu.title}
            </TabText>
          </Tab>
        );
      })}
    </Container>
  );
}
