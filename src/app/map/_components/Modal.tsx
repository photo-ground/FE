'use client';

import React from 'react';
import styled from 'styled-components';
// import { redirect } from 'next/navigation';

import Text from '@/components/atoms/Text';
// import Card from '@/components/Card';
import { IconButton } from '@mui/material';
import CloseIcon from '@/assets/CloseIcon';
import photoSpotData from '../_data/photoSpotData';
import Slider from './Slider';
import { photoSpotProps } from '../types';

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); /* 모달 배경 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  padding: 1rem;
  overflow: auto; /* 콘텐츠가 넘칠 경우 스크롤 */
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 225, 0.5); /* 투명도 있는 배경 */
  z-index: 999;
`;

const CloseHeader = styled.div`
  margin-right: auto;
`;

interface ModalProps {
  photoSpot: photoSpotProps;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Modal({ photoSpot, setModalState }: ModalProps) {
  const spotArr = photoSpot.spotPostImageList;
  const spotTitle = photoSpotData.spotName;
  const spotContent = photoSpotData.content;

  if (!spotArr.length) {
    return <div>No data found for this spot.</div>;
  }

  return (
    <>
      <Overlay onClick={() => window.history.back()} />
      <ModalContainer>
        <CloseHeader>
          <IconButton onClick={() => setModalState(false)}>
            <CloseIcon />
          </IconButton>
        </CloseHeader>
        <Text variant="title2_sb">{spotTitle}</Text>
        <Slider spotPostImageList={spotArr} hasNext={false} />

        {/* <Text variant="body2_rg">Description for Spot {spotContent}</Text> */}
      </ModalContainer>
    </>
  );
}
