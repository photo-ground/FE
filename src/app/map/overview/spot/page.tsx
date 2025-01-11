'use client';

// import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSchoolStore from '@/store';
import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import Text from '@/components/atoms/Text';
// import { useSearchParams } from 'next/navigation';
import { Container, CardContainerY, TextContainer } from '../../style';

import photoSpotData from '../../_data/photoSpotData';
import Modal from '../../_components/Modal';
import useSpotStore from '../../_store';
// school을 URL 매개변수로 전달
export default function Overview() {
  // const searchParams = useSearchParams();
  const { univ } = useSchoolStore();
  const [modalState, setModalState] = useState<boolean>(false);
  const spotId = useSpotStore((state) => state.spotId);
  const setSpotId = useSpotStore((state) => state.setSpotId);
  // const clearSpotId = useSpotStore((state) => state.clearSpotId);

  function handleCardModal(postId: number) {
    console.log(postId);
    const index = photoSpotData.imageInfo.spotPostImageList.findIndex(
      (item) => item.postId === postId,
    );
    console.log(index);
    setSpotId(index); // index를 저장
    setModalState(true); // 모달 열기
  }

  const spotTitle = photoSpotData.spotName;
  const spotDetail = photoSpotData.content;

  return (
    <Container>
      <Back text={`${univ}`} />
      <TextContainer>
        <Text variant="title2_sb">{spotTitle}</Text>
        <Text variant="body2_rg" className="text-pre">
          {spotDetail}
        </Text>
      </TextContainer>
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

      {modalState && spotId !== null && (
        <Modal
          currIndex={spotId}
          setModalState={setModalState}
          photoSpot={photoSpotData}
        />
      )}
    </Container>
  );
}
