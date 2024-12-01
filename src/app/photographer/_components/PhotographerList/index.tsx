import Card from '@/components/Card';
import { useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.625rem;
  row-gap: 1rem;

  padding-bottom: calc(3rem + 4.875rem);
`;

export default function PhotographerList() {
  function masonryLayout() {
    document.querySelectorAll('#masonry-card').forEach((element) => {
      element.style.gridRowEnd = `span ${Math.ceil(
        element.querySelector('#masonry-card div').scrollHeight / 16 + 10 / 16,
      )}`;
    });
  }

  useEffect(() => {
    masonryLayout();
    window.addEventListener('resize', masonryLayout);
  }, []);

  const data = [
    { src: '/images/yonsei.jpg', title: '조은호 작가' },
    { src: '/images/hongik.jpg', title: '조은호 작가' },
    { src: '/images/ewha.jpg', title: '조은호 작가' },
    { src: '/images/sogang.jpg', title: '조은호 작가' },
    { src: '/images/yonsei.jpg', title: '조은호 작가' },
    { src: '/images/hongik.jpg', title: '조은호 작가' },
    { src: '/images/ewha.jpg', title: '조은호 작가' },
    { src: '/images/sogang.jpg', title: '조은호 작가' },
    { src: '/images/yonsei.jpg', title: '조은호 작가' },
    { src: '/images/hongik.jpg', title: '조은호 작가' },
    { src: '/images/ewha.jpg', title: '조은호 작가' },
    { src: '/images/sogang.jpg', title: '조은호 작가' },
  ];

  return (
    <Container className="masonry-container">
      {data.map((datum, index) => (
        <div id="masonry-card" key={datum.title + index}>
          <Card
            size="dynamic"
            src={datum.src}
            title={datum.title}
            content="24세, 여성"
          />
        </div>
      ))}
    </Container>
  );
}
