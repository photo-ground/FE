import { Box, Divider, IconButton } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components';
import Card from '@/components/Card';
import CloseIcon from '@/assets/CloseIcon';
import Text from '@/components/atoms/Text';
import Link from 'next/link';
import useUnivStore from '@/store/useUnivStore';
import Chip from './Chip';

import { DrawerProps } from '../types';
import useSpotStore from '../_store';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
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
  z-index: 10;
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

export default function DrawerContent({
  photoSpotData,
  toggleDrawer,
  toggleModal,
}: DrawerProps) {
  const { univ } = useUnivStore();
  const clearCurrPostIdIndex = useSpotStore(
    (state) => state.clearCurrPostIdIndex,
  );

  const handleDrawerClose = () => {
    toggleDrawer(false);
    clearCurrPostIdIndex();
  };

  const handleCardModal = (postId: number) => {
    const index = photoSpotData?.imageInfo.spotPostImageList.findIndex(
      (item) => item.postId === postId,
    );
    if (index !== undefined && index >= 0 && toggleModal) {
      toggleModal(index);
    }
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
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
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
        padding: '1rem',
        paddingTop: '0',
        boxSizing: 'border-box',
      }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <StickyHeader>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
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
        {photoSpotData.imageInfo.spotPostImageList.slice(0, 6).map((spot) => (
          <CardWrapper
            key={`${spot.postId}_${uuidv4()}`}
            size="small"
            src={spot.imageUrl}
            onClick={() => handleCardModal(spot.postId)}
          />
        ))}
      </CardContainer>
      <Link
        href={{
          pathname: `/map/overview/${univ}/${photoSpotData.spotId}`,
        }}
      >
        <ChipContainer>
          <Chip size="dynamic" text="더보기" variant="secondary" />
        </ChipContainer>
      </Link>
    </Box>
  );
}
