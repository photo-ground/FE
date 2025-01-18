import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import Text from '@/components/atoms/Text';
import { PostDetail } from '../getPostData';

import 'swiper/css';
import 'swiper/css/pagination';

const MAX_HEIGHT = '520px';

const Container = styled.div``;

const Image = styled.img`
  max-width: 100%;
  max-height: ${MAX_HEIGHT};

  object-fit: cover;
  object-position: 50% 50%;
`;

const TagArea = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 24px;
`;

const TagItem = styled.div`
  padding: 0.625rem 1rem;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.gray[900]};
`;

const TagText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function Photo({
  imageList,
  onChange,
  univName,
  currentPage,
}: {
  imageList: PostDetail['imageList'];
  onChange: (newPage: number) => void;
  univName: string;
  currentPage: number;
}) {
  return (
    <Container>
      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        style={{
          maxHeight: MAX_HEIGHT,
          // eslint-disable-next-line
          // @ts-ignore
          '--swiper-pagination-color': '#FF4000',
          '--swiper-pagination-bullet-inactive-color': '#BFBFBF',
        }}
        onSlideChange={(swiper) => onChange(swiper.activeIndex)}
      >
        {imageList.map((image) => (
          <SwiperSlide
            key={image.imageId}
            style={{
              // eslint-disable-next-line
              // @ts-ignore
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxHeight: MAX_HEIGHT,
            }}
          >
            <Image src={image.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>

      <TagArea>
        <TagItem>
          <TagText variant="body2_rg">{univName}</TagText>
        </TagItem>
        <TagItem>
          <TagText variant="body2_rg">
            {imageList[currentPage].spotName}
          </TagText>
        </TagItem>
      </TagArea>
    </Container>
  );
}
