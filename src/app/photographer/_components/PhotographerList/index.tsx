import { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Card from '@/components/Card';
import genderMap from '@/lib/genderMap';
import { PhotographerSummary } from '../../getPhotographerList';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.625rem;
  row-gap: 1rem;

  padding: 1.25rem;
  padding-bottom: calc(3rem + 4.875rem);
`;

const CardWrapper = styled(Link)`
  text-decoration: none;
`;

export default function PhotographerList({
  photographerList,
}: {
  photographerList: PhotographerSummary[];
}) {
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

  return (
    <Container className="masonry-container">
      {photographerList?.map((photographer: PhotographerSummary) => (
        <div id="masonry-card" key={photographer.photographerId}>
          <CardWrapper href={`/photographer/${photographer.photographerId}`}>
            <Card
              size="dynamic"
              src={photographer.profileUrl}
              title={photographer.photographerName}
              content={`${photographer.age}세, ${genderMap[photographer.gender]}`}
            />
          </CardWrapper>
        </div>
      ))}
    </Container>
  );
}
