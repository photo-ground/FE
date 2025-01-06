/* eslint-disable import/no-extraneous-dependencies */
import { redirect } from 'next/navigation';
import { Box, Divider, IconButton } from '@mui/material';
import styled from 'styled-components';
import Card from '@/components/Card';
import CloseIcon from '@/assets/CloseIcon';
import Text from '@/components/atoms/Text';
import Link from 'next/link';
import Chip from './Chip';
import { photoSpotData } from '../_data/photoSpotData';
import { DrawerProps } from '../types';
import { TextContainer } from '../style';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;
  justify-content: center;
`;
const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between; /* 양쪽 정렬 */
  background-color: ${({ theme }) => theme.colors.black};
`;

const DrawerHandle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%); /* 중앙 정렬 */
  width: 134px;
  height: 5px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.white};
`;

const ChipContainer = styled.div`
  margin: 0 auto;
  margin-top: 1.5rem;
  width: inherit;
  text-align: center;
`;

export default function DrawerContent({ toggleDrawer }: DrawerProps) {
  const currSpot = photoSpotData.spotId;
  const handleDrawerClose = () => {
    toggleDrawer(false);
  };

  function onClick() {
    redirect(`spot/@modal?spotId=${currSpot}`);
  }

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        padding: '1rem',
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
          <Card
            key={spot.postId}
            size="small"
            src={spot.imageUrl}
            onClick={() => onClick()}
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
