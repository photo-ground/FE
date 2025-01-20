'use client';

import { usePathname } from 'next/navigation';

import theme from '@/styles/theme';
import BNBPhotographerIcon from '@/assets/bnb/BNB_PhotographerIcon';
import BNBMapIcon from '@/assets/bnb/BNB_MapIcon';
import BNBHomeIcon from '@/assets/bnb/BNB_HomeIcon';
import BNBCalendarIcon from '@/assets/bnb/BNB_CalendarIcon';
import BNBProfileIcon from '@/assets/bnb/BNBProfileIcon';
import useUnivStore from '@/store/useUnivStore';
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
  const { univ } = useUnivStore(); // Get current university state from Zustand

  // Dynamic home link with univ query parameter
  const menuListWithDynamicHome = MENU_LIST.map((menu) =>
    menu.route === '/home'
      ? { ...menu, route: `/home?univ=${encodeURIComponent(univ)}` }
      : menu,
  );

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
      {menuListWithDynamicHome.map((menu) => {
        // /home?univ={univ} 대응코드로 수정
        const isSelected = pathname.startsWith(menu.route.split('?')[0]);

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
