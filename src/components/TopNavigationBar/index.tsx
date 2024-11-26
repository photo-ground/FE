'use client';

import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Text from '@/components/atoms/Text';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 1.25rem;
`;

const title: { [key: string]: string } = {
  '/': 'Photo Ground',
  '/photographer': '사진작가',
  '/reserve': '예약관리',
};

export default function TopNavigationBar() {
  const pathname: string = usePathname();

  return (
    <Container>
      <Text variant="title1">{title[pathname]}</Text>
    </Container>
  );
}
