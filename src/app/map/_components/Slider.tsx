'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SmallButton from '@/components/atoms/SmallButton';
import Text from '@/components/atoms/Text';
import { useRouter } from 'next/navigation';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 286px;
  aspect-ratio: 3 / 4;
  text-align: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 86px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: contain;
`;

const Info = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  text-align: center;
`;

const NavigationButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  z-index: 2;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const LeftButton = styled(NavigationButton)`
  left: -2rem;
  top: 276px;
`;

const RightButton = styled(NavigationButton)`
  right: -2rem;
  top: 276px;
`;
export interface SliderData {
  imageUrl: string;
  univ: string;
  spotName: string;
  photographerName: string;
  postId: number;
  hasNext: boolean;
  // onClicked: ()=> void();
}
interface SliderProps {
  sliderData: SliderData[];
  currPostIdIndex: number;
}

export default function Slider({ sliderData, currPostIdIndex }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(currPostIdIndex);
  const router = useRouter();

  const handleSmallButton = (postId: number) => {
    router.push(`/post/${postId}`);
    // router.push('/editinfo', { query: name }); // 데이터 전달
  };
  const handleNext = () => {
    if (currentSlide !== null) {
      if (currentSlide < sliderData.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (sliderData[currentSlide].hasNext) {
        // API 호출
        console.log('Fetching more data...');
      }
    }
  };

  const handlePrev = () => {
    if (currentSlide !== null) {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  return (
    <SliderContainer>
      <LeftButton onClick={handlePrev} disabled={currentSlide === 0}>
        <ArrowBackIosIcon />
      </LeftButton>
      <RightButton
        onClick={handleNext}
        disabled={
          !sliderData[currentSlide].hasNext &&
          currentSlide === sliderData.length - 1
        }
      >
        <ArrowForwardIosIcon />
      </RightButton>
      {currentSlide !== null && (
        <>
          <ImageContainer>
            <Image
              src={sliderData[currentSlide].imageUrl}
              alt={`Slide ${currentSlide}`}
            />
          </ImageContainer>
          <Info>
            <Text variant="header2">
              {sliderData[currentSlide].photographerName}
            </Text>
            <Text variant="body3" color="#a6a6a6">
              {sliderData[currentSlide].univ} |{' '}
              {sliderData[currentSlide].spotName}
            </Text>
          </Info>
          <SmallButton.Tertiary
            onClick={() => handleSmallButton(sliderData[currentSlide].postId)}
            text="게시물 보기"
          />
        </>
      )}
    </SliderContainer>
  );
}
