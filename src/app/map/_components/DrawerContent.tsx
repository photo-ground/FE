/* eslint-disable import/no-extraneous-dependencies */
import { Box, Divider, IconButton } from '@mui/material';
import styled from 'styled-components';
import Card from '@/components/Card';
import CloseIcon from '@/assets/CloseIcon';
import Text from '@/components/atoms/Text';

interface DrawerProps {
  // title: string;
  // src: string;
  toggleDrawer: (isOpen: boolean) => void; // 매개변수를 받도록 타입 변경
}

const CardContainer = styled.div`
  display: flex;
  // padding: 0 1.25rem;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;
  justify-content: center;
`;
const StickyHeader = styled.div`
  position: sticky;
  top: 0; /* 상단 고정 */
  z-index: 10;
  display: flex;
  justify-content: space-between; /* 양쪽 정렬 */
  background-color: #000;
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.625rem;
  margin-bottom: 3rem;
  .text-pre {
    white-space: pre-line;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
const data = [
  { src: '/images/ewha.jpg', id: 'aaa' },
  { src: '/images/sogang.jpg', id: 'aaa' },
  { src: '/images/yonsei.jpg', id: 'aaa' },
  { src: '/images/ewha.jpg', id: 'aaa' },
  { src: '/images/sogang.jpg', id: 'aaa' },
  { src: '/images/yonsei.jpg', id: 'aaa' },
  { src: '/images/ewha.jpg', id: 'aaa' },
  { src: '/images/sogang.jpg', id: 'aaa' },
  { src: '/images/yonsei.jpg', id: 'aaa' },
  { src: '/images/ewha.jpg', id: 'aaa' },
  { src: '/images/sogang.jpg', id: 'aaa' },
  { src: '/images/yonsei.jpg', id: 'aaa' },
  { src: '/images/ewha.jpg', id: 'aaa' },
  { src: '/images/sogang.jpg', id: 'aaa' },
  { src: '/images/yonsei.jpg', id: 'aaa' },
  { src: '/images/ewha.jpg', id: 'aaa' },
  { src: '/images/sogang.jpg', id: 'aaa' },
  { src: '/images/yonsei.jpg', id: 'aaa' },
];
const photoSpotTitle = '독수리상';
const photoSpotDetail =
  '연세의 표상인 독수리 동상\n높이 2.6m, 폭 5.2m의 청동 독수리가 세워져 있음';

export default function DrawerContent({ toggleDrawer }: DrawerProps) {
  const handleDrawerClose = () => {
    toggleDrawer(false);
  };

  function onClick() {
    // console.log('clicked');
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
        <Text variant="title2_sb">{photoSpotTitle}</Text>
        <Text variant="body2_rg" className="text-pre">
          {photoSpotDetail}
        </Text>
      </TextContainer>
      <CardContainer>
        {data.slice(0, 3).map((spot) => (
          <Card size="small" src={spot.src} onClick={() => onClick()} />
        ))}
      </CardContainer>
    </Box>
  );
}
