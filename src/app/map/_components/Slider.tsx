'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  PhotoSpotProps,
  PostByUnivProps,
  PostListProps,
  SpotPostImageProps,
} from '@/types/photoSpot';
import useSpotStore from '../_store';

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
  height: auto;
  max-width: 286px;
  aspect-ratio: 3 / 4;
  text-align: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const Info = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  color: white;
`;

const Title = styled.h2`
  font-size: 1.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #ccc;
`;

const Button = styled.button`
  background-color: transparent;
  color: orange;
  border: 1px solid orange;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: orange;
    color: black;
  }
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
  top: 190px;
`;

const RightButton = styled(NavigationButton)`
  right: -2rem;
  top: 190px;
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
  // 타입 가드
  const isPhotoSpotProps = (
    data: PhotoSpotProps | PostByUnivProps,
  ): data is PhotoSpotProps => {
    return (data as PhotoSpotProps).imageInfo !== undefined;
  };

  const [currentSlide, setCurrentSlide] = useState(currPostIdIndex);

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
            <Title>{sliderData[currentSlide].photographerName}</Title>
            <Description>
              {sliderData[currentSlide].univ} |{' '}
              {sliderData[currentSlide].spotName}
            </Description>
            <Button>게시물 보기</Button>
          </Info>
        </>
      )}
    </SliderContainer>
  );
}
