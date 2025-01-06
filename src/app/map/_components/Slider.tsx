'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { photoSpotProps } from '../types';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  //   height: 100vh;
  display: flex;
  // align-items: center;
  // justify-content: center;
  background-color: #000;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 382px;
  max-width: 286px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 382px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;

const Info = styled.div`
  margin-top: 1rem;
  color: white;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
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
  //   left: 10%;
  display: center;
`;

const RightButton = styled(NavigationButton)`
  //   right: 10%;
`;

export default function Slider({ spotPostImageList }: photoSpotProps) {
  const slideElement = spotPostImageList;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideElement.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slideElement.length) % slideElement.length,
    );
  };

  return (
    <SliderContainer>
      {/* 좌우 네비게이션 버튼 */}
      <LeftButton onClick={handlePrev}>
        <ArrowBackIosIcon />
      </LeftButton>
      {/* 이미지와 텍스트 */}
      <ImageContainer>
        <Image
          src={slideElement[currentSlide].imageUrl}
          alt={slideElement[currentSlide].photographerName}
        />
        <Info>
          <Title>{slideElement[currentSlide].photographerName}</Title>
          <Description>
            {slideElement[currentSlide].photographerName}
          </Description>
          {/* TODO : 게시글 보기 연결해야댐 */}
          <Button>게시물 보기</Button>
        </Info>
      </ImageContainer>{' '}
      <RightButton onClick={handleNext}>
        <ArrowForwardIosIcon />
      </RightButton>
    </SliderContainer>
  );
}
