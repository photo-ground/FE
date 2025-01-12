'use client';

// import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
import useSchoolStore from '@/store';
import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import Text from '@/components/atoms/Text';
// import { useSearchParams } from 'next/navigation';
import { Container, CardContainerY } from '../../style';

import photoSpotData from '../../_data/photoSpotData';
import Modal from '../../_components/Modal';
import useSpotStore from '../../_store';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  .text-pre {
    white-space: pre-line;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

// school을 URL 매개변수로 전달
export default function Overview() {
  // const searchParams = useSearchParams();
  const { univ } = useSchoolStore();
  const [modalState, setModalState] = useState<boolean>(false);
  const currPostIdIndex = useSpotStore((state) => state.currPostIdIndex);
  const setCurrPostIdIndex = useSpotStore((state) => state.setCurrPostIdIndex);
  // const clearCurrPostIdIndex = useSpotStore((state) => state.clearCurrPostIdIndex);

  function handleCardModal(postId: number) {
    const index = photoSpotData.imageInfo.spotPostImageList.findIndex(
      (item) => item.postId === postId,
    );
    setCurrPostIdIndex(index); // index를 저장
    setModalState(true); // 모달 열기
  }

  const spotTitle = photoSpotData.spotName;
  const spotDetail = photoSpotData.content;

  return (
    <Container>
      <Back text={`${univ}`} />
      <HeaderContainer>
        <Text variant="title2_sb">{spotTitle}</Text>
        <Text variant="body2_rg" className="text-pre">
          {spotDetail}
        </Text>
      </HeaderContainer>
      {/* 칩 버튼 */}
      <CardContainerY>
        {photoSpotData.imageInfo.spotPostImageList.map((spot) => (
          <Card
            key={spot.postId}
            size="small"
            src={spot.imageUrl}
            onClick={() => handleCardModal(spot.postId)}
          />
        ))}
      </CardContainerY>

      {modalState && currPostIdIndex !== null && (
        <Modal
          // currIndex={currPostIdIndex}
          setModalState={setModalState}
          photoSpot={photoSpotData}
        />
      )}
    </Container>
  );
}
