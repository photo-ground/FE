'use client';

import { usePathname } from 'next/navigation';

import Text from '@/components/atoms/Text';
import { Container, Tab } from './styles';

// 고객 뷰일 경우
const MENU_LIST = [
  { title: '사진작가', route: '/photographer' },
  { title: '포토스팟', route: '/map' },
  { title: '홈', route: '/' },
  { title: '예약', route: '/book' },
  { title: '마이페이지', route: '/my' },
];

// [todo] 이후 고객/작가 구분하게 될 때 활성화하기
// const MENU_LIST = [
//   { title: '사진작가', route: '/photographer' },
//   { title: '포토스팟', route: '/map' },
//   { title: '홈', route: '/' },
//   { title: '예약', route: '/book' },
//   { title: '마이페이지', route: '/profile' },
// ];

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
          <Text variant="caption3">{menu.title}</Text>
        </Tab>
      ))}
    </Container>
  );
}
