'use client';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CloseIcon from '@/assets/CloseIcon';
import RightChevronLargeIcon from '@/assets/RightChevronLargeIcon';
import LeftChevronLargeIcon from '@/assets/LeftChevronLargeIcon';
import Text from '@/components/atoms/Text';
import SmallButton from '@/components/atoms/SmallButton';

import { SliderData } from './Slider';
import useSpotStore from '../_store';

const ImageContainer = styled.div`
  width: 100%;
  max-width: 17.875rem;
  aspect-ratio: 3 / 4;
  text-align: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5.375rem;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.625rem;
  object-fit: contain;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50;
  width: 100%;
  height: 100%;
  max-width: 33.75rem;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1000;
  padding: 1rem;
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const CloseHeader = styled.div`
  margin-right: auto;
`;

const Info = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const SwiperSlideBox = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 23.75rem;
  margin: 0;
  button {
    width: fit-content;
    margin: 0 auto;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  justify-content: center;
`;

const ImageSwiperArea = styled.div`
  height: fit-content;
  display: flex;
  align-items: center; /* 세로 기준으로 가운데 정렬 */
  justify-content: center; /* 가로 기준으로 가운데 정렬 */
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  button {
    width: fit-content;
    height: 2.25rem;
    margin: 0 auto;
  }
`;

interface ModalProps {
  sliderData: SliderData[];
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

// photoSpot배열에서 currIndex를 먼저 찾아 보여주고 그 기준으로 좌우왔다갔다
export default function SpotModal({ sliderData, setModalState }: ModalProps) {
  const router = useRouter();
  const { clearCurrPostIdIndex, currPostIdIndex } = useSpotStore();
  const [currentSlide, setCurrentSlide] = useState<number | null>(
    currPostIdIndex,
  );

  const handleModalClose = () => {
    setModalState(false);
    clearCurrPostIdIndex();
  };

  const handleSmallButton = (postId: number) => {
    router.push(`/post/${postId}`);
  };

  const handleNext = () => {
    console.log(currentSlide);
    if (currentSlide !== null) {
      if (currentSlide < sliderData.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  const handlePrev = () => {
    console.log(currentSlide);

    if (currentSlide !== null) {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  return ReactDOM.createPortal(
    <>
      {/* <Backdrop /> */}
      <Overlay onClick={() => window.history.back()} />
      <ModalContainer>
        <CloseHeader>
          <IconButton onClick={() => handleModalClose()}>
            <CloseIcon />
          </IconButton>
        </CloseHeader>
        <ContentWrapper>
          <ImageSwiperArea>
            {/* 커스텀 내비게이션 버튼 */}
            <div className="custom-prev">
              <IconButton onClick={() => handlePrev()}>
                <LeftChevronLargeIcon /> {/* 원하는 아이콘 컴포넌트 */}
              </IconButton>
            </div>

            <Swiper
              // install Swiper modules
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              initialSlide={currPostIdIndex as number}
            >
              {sliderData.map((item) => (
                <SwiperSlideBox key={item.imageUrl}>
                  <ImageContainer>
                    <Image src={item.imageUrl} alt={item.imageUrl} />
                  </ImageContainer>
                </SwiperSlideBox>
              ))}
            </Swiper>
            <div className="custom-next">
              <IconButton onClick={() => handleNext()}>
                <RightChevronLargeIcon /> {/* 원하는 아이콘 컴포넌트 */}
              </IconButton>
            </div>
          </ImageSwiperArea>

          {currentSlide != null && (
            <InfoArea>
              <Info>
                <Text variant="header2">
                  {sliderData[currentSlide].photographerName}
                </Text>
                <Text variant="body3" color="#a6a6a6">
                  {sliderData[currentSlide].univ} |{' '}
                  {sliderData[currentSlide].spotName}
                </Text>
              </Info>
              <SmallButton.Brand
                onClick={() =>
                  handleSmallButton(sliderData[currentSlide].postId)
                }
                text="게시물 보기"
              />
            </InfoArea>
          )}
        </ContentWrapper>
      </ModalContainer>
    </>,
    document.getElementById('modal-root')!,
  );
}
