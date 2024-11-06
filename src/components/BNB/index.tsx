'use client';

import { usePathname } from 'next/navigation';
import { Container, Tab } from './styles';

const MENU_LIST = [
  { title: '홈', route: '/' },
  { title: '사진작가', route: '/photographer' },
  { title: '포토스팟', route: '/map' },
  { title: '예약', route: '/reservation' },
  { title: '마이페이지', route: '/profile' },
];

export default function BottomNavigationBar() {
  const pathname = usePathname();

  return (
    <Container>
      {MENU_LIST.map((menu) => (
        <Tab
          key={menu.route}
          href={menu.route}
          $isSelected={pathname === menu.route}
        >
          {menu.title}
        </Tab>
      ))}
    </Container>
  );
}
