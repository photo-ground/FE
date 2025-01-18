/* eslint-disable import/no-extraneous-dependencies */
import { Box, Divider, IconButton } from '@mui/material';
import styled from 'styled-components';
import Card from '@/components/Card';
import CloseIcon from '@/assets/CloseIcon';
import Text from '@/components/atoms/Text';
import Link from 'next/link';
import Chip from './Chip';

import photoSpotData from '../_data/photoSpotData';

import { DrawerProps } from '../types';
import useSpotStore from '../_store';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 */
  gap: 1rem; /* 각 이미지 간격 */
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
  width: 100%; /* 부모 그리드 셀의 너비 */
  aspect-ratio: 1/1; /* 정방형 비율 */
  overflow: hidden; /* 이미지가 넘칠 경우 숨김 */

  img {
    width: 100%;
    min-height: 100%;
    object-fit: cover; /* 이미지를 정방형 안에 꽉 채움 */
  }
`;

const StickyHeader = styled.div`
  position: sticky;
  background-color: ${({ theme }) => theme.colors.black};
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between; /* 양쪽 정렬 */
`;

const DrawerHandle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%); /* 중앙 정렬 */
  width: 134px;
  height: 5px;
  margin-top: 1rem;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.white};
`;

const ChipContainer = styled.div`
  margin: 0 auto;
  margin-top: 1.5rem;
  width: inherit;
  text-align: center;
`;

export default function DrawerContent({
  toggleDrawer,
  toggleModal,
}: DrawerProps) {
  const clearCurrPostIdIndex = useSpotStore(
    (state) => state.clearCurrPostIdIndex,
  );

  const handleDrawerClose = () => {
    toggleDrawer(false);
    clearCurrPostIdIndex();
  };
  function handleCardModal(postId: number) {
    console.log(postId);
    const index = photoSpotData.imageInfo.spotPostImageList.findIndex(
      (item) => item.postId === postId,
    );
    console.log(`Found index: ${index}`);
    toggleModal(index); // index를 직접 전달
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
      onClick={() => toggleDrawer}
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
            key={spot.postId}
            size="small"
            src={spot.imageUrl}
            onClick={() => handleCardModal(spot.postId)}
          />
        ))}
      </CardContainer>
      <Link
        href={{
          pathname: '/map/overview/spot',
          query: { spotId: photoSpotData.spotId },
        }}
      >
        <ChipContainer>
          <Chip text="더보기" variant="secondary" />
        </ChipContainer>
      </Link>
    </Box>
  );
}
