'use client';

import styled from 'styled-components';
// import { redirect } from 'next/navigation';

import Text from '@/components/atoms/Text';
import Card from '@/components/Card';
import { IconButton } from '@mui/material';
import CloseIcon from '@/assets/CloseIcon';
import photoSpotData from '../_data/photoSpotData';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  // max-width: 500px;
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  padding: 1rem;
  overflow: scroll;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;

export default function Modal() {
  const spotArr = photoSpotData.imageInfo.spotPostImageList;
  const spotTitle = photoSpotData.spotName;
  const spotContent = photoSpotData.content;

  if (!spotArr.length) {
    return <div>No data found for this spot.</div>;
  }

  const handleDrawerClose = () => {
    // toggleDrawer(false);
  };

  return (
    <>
      <Overlay onClick={() => window.history.back()} />
      <ModalContainer>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
        <CloseButton onClick={() => window.history.back()}>×</CloseButton>
        <Text variant="title2_sb">{spotTitle}sdfsd</Text>
        {/* {spotArr.map((spot) => ( */}
        <Card key={spotArr[0].imageId} size="large" src={spotArr[0].imageUrl} />
        {/* ))} */}
        <Text variant="body2_rg">Description for Spot {spotContent}</Text>
      </ModalContainer>
    </>
  );
}
