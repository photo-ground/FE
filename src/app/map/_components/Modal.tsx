'use client';

import React from 'react';
import styled from 'styled-components';

import { IconButton } from '@mui/material';
import CloseIcon from '@/assets/CloseIcon';
import Slider from './Slider';
import { photoSpotProps } from '../types';
import useSpotStore from '../_store';

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1000;
  padding: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const CloseHeader = styled.div`
  margin-right: auto;
`;
const ContentWrapper = styled.div`
  flex: 1; /* 남은 공간을 채움 */
  display: flex;
  align-items: center; /* 세로 기준으로 가운데 정렬 */
  justify-content: center; /* 가로 기준으로 가운데 정렬 */
`;
interface ModalProps {
  currIndex: number;
  photoSpot: photoSpotProps;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO : photoSpot배열에서 currIndex를 먼저 찾아 보여주고 그 기준으로 좌우왔다갔다
export default function Modal({
  currIndex,
  photoSpot,
  setModalState,
}: ModalProps) {
  // const spotId = useSpotStore((state) => state.spotId);
  // const setSpotId = useSpotStore((state) => state.setSpotId);
  // const clearSpotId = useSpotStore((state) => state.clearSpotId);

  // const { imageInfo } = photoSpot;
  const clearSpotId = useSpotStore((state) => state.clearSpotId);

  const handleModalClose = () => {
    setModalState(false);
    clearSpotId();
  };
  return (
    <>
      <Overlay onClick={() => window.history.back()} />
      <ModalContainer>
        <CloseHeader>
          <IconButton onClick={() => handleModalClose()}>
            <CloseIcon />
          </IconButton>
        </CloseHeader>
        <ContentWrapper>
          <Slider photoSpot={photoSpot} currIndex={currIndex} />
        </ContentWrapper>
      </ModalContainer>
    </>
  );
}
