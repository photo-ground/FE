import { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Card from '@/components/Card';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.625rem;
  row-gap: 1rem;

  padding: 1.25rem;
  padding-bottom: calc(3rem + 4.875rem);
`;

export default function PhotographerList() {
  function masonryLayout() {
    document.querySelectorAll('#masonry-card').forEach((element) => {
      const card = element as HTMLElement;
      const content = card.querySelector('#masonry-card div') as HTMLElement;
      if (content) {
        card.style.gridRowEnd = `span ${Math.ceil(content.scrollHeight / 16 + 10 / 16)}`;
      }
    });
  }

  useEffect(() => {
    masonryLayout();
    window.addEventListener('resize', masonryLayout);
  }, []);

  const data = [
    { id: '1', src: '/images/yonsei.jpg', title: '조은호 작가' },
    { id: '2', src: '/images/hongik.jpg', title: '조은호 작가' },
    { id: '3', src: '/images/ewha.jpg', title: '조은호 작가' },
    { id: '4', src: '/images/sogang.jpg', title: '조은호 작가' },
    { id: '5', src: '/images/yonsei.jpg', title: '조은호 작가' },
    { id: '6', src: '/images/hongik.jpg', title: '조은호 작가' },
    { id: '7', src: '/images/ewha.jpg', title: '조은호 작가' },
    { id: '8', src: '/images/sogang.jpg', title: '조은호 작가' },
    { id: '9', src: '/images/yonsei.jpg', title: '조은호 작가' },
    { id: '10', src: '/images/hongik.jpg', title: '조은호 작가' },
    { id: '11', src: '/images/ewha.jpg', title: '조은호 작가' },
    { id: '12', src: '/images/sogang.jpg', title: '조은호 작가' },
  ];

  return (
    <Container className="masonry-container">
      {data.map((datum) => (
        <div id="masonry-card" key={datum.id}>
          <Link href="/photographer/1">
            <Card
              size="dynamic"
              src={datum.src}
              title={datum.title}
              content="24세, 여성"
            />
          </Link>
        </div>
      ))}
    </Container>
  );
}
