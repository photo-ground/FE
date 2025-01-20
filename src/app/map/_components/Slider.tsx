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

interface SliderProps {
  photoSpot: PhotoSpotProps | PostByUnivProps;
}

export default function Slider({ photoSpot }: SliderProps) {
  // 타입 가드
  const isPhotoSpotProps = (
    data: PhotoSpotProps | PostByUnivProps,
  ): data is PhotoSpotProps => {
    return (data as PhotoSpotProps).imageInfo !== undefined;
  };

  // 데이터 분리 : 타입에 따른 데이터 분리
  const dataList: SpotPostImageProps[] | PostListProps[] = isPhotoSpotProps(
    photoSpot,
  )
    ? photoSpot.imageInfo.spotPostImageList
    : photoSpot.postList;

  const hasNext = isPhotoSpotProps(photoSpot)
    ? photoSpot.imageInfo.hasNext
    : photoSpot.hasNext;

  const currPostIdIndex = useSpotStore((state) => state.currPostIdIndex);

  const [currentSlide, setCurrentSlide] = useState(currPostIdIndex);

  const handleNext = () => {
    if (currentSlide !== null) {
      if (currentSlide < dataList.length - 1) {
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
        disabled={!hasNext && currentSlide === dataList.length - 1}
      >
        <ArrowForwardIosIcon />
      </RightButton>
      {currentSlide !== null && (
        <>
          <ImageContainer>
            <Image
              src={
                isPhotoSpotProps(photoSpot)
                  ? (dataList as SpotPostImageProps[])[currentSlide].imageUrl
                  : (dataList as PostListProps[])[currentSlide].firstImageUrl
              }
              alt={`Slide ${currentSlide}`}
            />
          </ImageContainer>
          <Info>
            <Title>
              {isPhotoSpotProps(photoSpot)
                ? dataList[currentSlide].photographerName
                : dataList[currentSlide].photographerName}
            </Title>
            <Description>
              데이터 처리 진짜 빡셉니다.....하..
              {/* {isPhotoSpotProps(photoSpot)
                ? (dataList as spotPostImageProps[])[currentSlide].
                : (dataList as postListProps[])[currentSlide].firstImageSpot} */}
            </Description>
            <Button>게시물 보기</Button>
          </Info>
        </>
      )}
    </SliderContainer>
  );
}
