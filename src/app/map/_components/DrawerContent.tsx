import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Box, Divider } from '@mui/material';

import { Z_INDEX } from '@/constants';
import useUserStore from '@/store/useUserStore';

import CloseIcon from '@/assets/CloseIcon';
import Card from '@/components/Card';
import Text from '@/components/atoms/Text';
import MediumButton from '@/components/atoms/MediumButton';

import { DrawerProps } from '../types';
import useSpotStore from '../_store';
import { SliderData } from './Slider';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  margin-bottom: 3rem;
  .text-pre {
    white-space: pre-line;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

const CardWrapper = styled(Card)`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;

  img {
    width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;

const StickyHeader = styled.div`
  position: sticky;
  background-color: ${({ theme }) => theme.colors.black};
  top: 0;
  z-index: ${Z_INDEX.MAP_DRAWER};
  display: flex;
  justify-content: space-between;
`;

const DrawerHandle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 134px;
  height: 5px;
  margin-top: 20px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.white};
`;

const ChipContainer = styled.div`
  margin: 0 auto;
  margin-top: 1.5rem;
  width: 100%;
  max-width: 150px;
  text-align: center;
`;

const CloseIconButton = styled.div`
  margin-top: 1rem;
  // background-color: red;
`;

export default function DrawerContent({
  photoSpotData,
  toggleDrawer,
  toggleModal,
}: DrawerProps) {
  const { univ } = useUserStore();
  const { clearCurrPostIdIndex, setCurrPostIdIndex } = useSpotStore();
  const [, setModalData] = useState<SliderData[]>([]);

  useEffect(() => {
    if (photoSpotData) {
      const data = photoSpotData?.imageInfo.spotPostImageList.map(
        (postData) => ({
          imageUrl: postData.imageUrl,
          univ,
          spotName: photoSpotData.spotName,
          photographerName: postData.photographerName,
          postId: postData.postId,
        }),
      );
      setModalData(data);
    }
  }, [photoSpotData, univ]);
  const handleDrawerClose = () => {
    toggleDrawer(false);
    clearCurrPostIdIndex();
  };

  const handleCardModal = (spotIndex: number) => {
    setCurrPostIdIndex(spotIndex);
    toggleModal(true);
  };

  if (!photoSpotData) {
    return (
      <Box
        sx={{
          width: 'inherit',
          padding: '1rem',
          boxSizing: 'border-box',
        }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
      >
        <StickyHeader>
          <CloseIconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </CloseIconButton>
          <DrawerHandle />
        </StickyHeader>

        <Divider />

        <TextContainer>
          <Text variant="title2_sb">스팟 정보를 불러오지 못했습니다.</Text>
          <Text variant="body2_rg" className="text-pre">
            잠시 후 다시 시도해주세요.
          </Text>
        </TextContainer>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: 'inherit',
        padding: '20px',
        paddingTop: '0',
        boxSizing: 'border-box',
      }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <StickyHeader>
        <CloseIconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </CloseIconButton>
        <DrawerHandle />
      </StickyHeader>

      <Divider />

      <TextContainer>
        <Text variant="title2_sb">{photoSpotData.spotName}</Text>
        <Text variant="body2_rg" className="text-pre">
          {photoSpotData.content}
        </Text>
      </TextContainer>
      <CardContainer>
        {photoSpotData.imageInfo.spotPostImageList
          .slice(0, 6)
          .map((spot, index) => (
            <CardWrapper
              key={spot.imageUrl}
              size="small"
              src={spot.imageUrl}
              onClick={() => handleCardModal(index)}
            />
          ))}
      </CardContainer>
      <Link
        href={{
          pathname: `/map/overview/${univ}/${photoSpotData.spotId}`,
        }}
      >
        <ChipContainer>
          <MediumButton.Secondary text="더보기" />
        </ChipContainer>
      </Link>
    </Box>
  );
}
