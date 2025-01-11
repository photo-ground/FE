'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { photoSpotProps } from '../types';
import useSpotStore from '../_store';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px; /* 슬라이드 최대 너비 */
  margin: 0 auto; /* 중앙 정렬 */
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
  aspect-ratio: 3 / 4; /* 비율 3:4 */
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

interface SliderProps {
  photoSpot: photoSpotProps;
}

// TODO : 여기에서 만약 hasnext가 true라면 다음 정보를 요청한다.(?)
export default function Slider({ photoSpot }: SliderProps) {
  const { spotPostImageList, hasNext } = photoSpot.imageInfo;
  // 만약 currIndex가 0이면 더이상 감소할 수 없다.
  // 만약 currIndex가 length라면 hasNext를 확인한다.
  const currPostIdIndex = useSpotStore((state) => state.currPostIdIndex);

  const [currentSlide, setCurrentSlide] = useState(currPostIdIndex);

  useEffect(() => {
    console.log(`curr : ${currPostIdIndex}`);
  });
  const handleNext = () => {
    if (currentSlide !== null) {
      if (currentSlide < spotPostImageList.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (hasNext) {
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
        disabled={!hasNext && currentSlide === spotPostImageList.length - 1}
      >
        <ArrowForwardIosIcon />
      </RightButton>
      {currentSlide !== null && (
        <>
          <ImageContainer>
            <Image
              src={spotPostImageList[currentSlide].imageUrl}
              alt={`Slide ${currentSlide}`}
            />
          </ImageContainer>
          <Info>
            <Title>{spotPostImageList[currentSlide].photographerName}</Title>
            <Description>{photoSpot.content}</Description>
            <Button>게시물 보기</Button>
          </Info>
        </>
      )}
    </SliderContainer>
  );
}
