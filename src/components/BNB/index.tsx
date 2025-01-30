'use client';

import { usePathname, useRouter } from 'next/navigation';

import theme from '@/styles/theme';
import BNBPhotographerIcon from '@/assets/bnb/BNB_PhotographerIcon';
import BNBMapIcon from '@/assets/bnb/BNB_MapIcon';
import BNBHomeIcon from '@/assets/bnb/BNB_HomeIcon';
import BNBCalendarIcon from '@/assets/bnb/BNB_CalendarIcon';
import BNBProfileIcon from '@/assets/bnb/BNBProfileIcon';
import { Container, Tab, TabText } from './styles';

export default function BottomNavigationBar() {
  const router = useRouter();
  const pathname = usePathname().split('?')[0];

  const MENU_LIST = [
    {
      title: '사진작가',
      route: '/photographer',
      icon: BNBPhotographerIcon,
      onClick: () => {
        router.push('/photographer');
      },
    },
    {
      title: '포토스팟',
      route: '/map',
      icon: BNBMapIcon,
      onClick: () => {
        router.push('/map');
      },
    },
    {
      title: '홈',
      route: '/home',
      icon: BNBHomeIcon,
      onClick: () => {
        router.push('/home');
      },
    },
    {
      title: '예약',
      route: '/reserve',
      icon: BNBCalendarIcon,
      onClick: () => {
        router.push('/reserve');
      },
    },
    {
      title: '마이페이지',
      route: '/my',
      icon: BNBProfileIcon,
      onClick: () => {
        router.push('/my');
      },
    },
  ];

  if (
    pathname !== '/photographer' &&
    pathname !== '/map' &&
    pathname !== '/home' &&
    pathname !== '/reserve' &&
    pathname !== '/my'
  ) {
    return null;
  }

  return (
    <Container>
      {MENU_LIST.map((menu) => {
        const isSelected = pathname === menu.route;

        return (
          <Tab key={menu.route} onClick={menu.onClick}>
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
