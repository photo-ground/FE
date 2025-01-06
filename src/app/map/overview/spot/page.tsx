'use client';

// import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSchoolStore from '@/store';
import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import Text from '@/components/atoms/Text';
// import { photoSpotProps, spotPostImageProps } from '../../types';
// import { useSearchParams } from 'next/navigation';
import { Container, CardContainerY, TextContainer } from '../../style';

import photoSpotData from '../../_data/photoSpotData';
import Modal from '../../_components/Modal';
// school을 URL 매개변수로 전달
export default function Overview() {
  // const searchParams = useSearchParams();
  const { univ } = useSchoolStore();
  const [modalState, setModalState] = useState<boolean>(false);
  // const currSpot = photoSpotData.spotId;

  const spotTitle = photoSpotData.spotName;
  const spotDetail = photoSpotData.content;

  // const router = useRouter();

  function onClick() {
    setModalState(!modalState);
  }
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
            onClick={() => onClick()}
          />
        ))}
      </CardContainerY>

      {modalState && (
        <Modal
          setModalState={setModalState}
          photoSpot={photoSpotData.imageInfo}
        />
      )}
    </Container>
  );
}
