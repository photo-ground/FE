'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSchoolStore from '@/store/useUnivStore';
import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import Text from '@/components/atoms/Text';
import { PhotoSpotProps } from '@/types/photoSpot';
import { useQuery } from '@tanstack/react-query';
import { Container, CardContainerY } from '../../style';

import Modal from '../../_components/Modal';
import useSpotStore from '../../_store';
import { getSelectedSpotInfo } from '../../_services/getPhotoSpot';
import { SliderData } from '../../_components/Slider';

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
  const [spotPostImages, setSpotPostImages] = useState<SliderData[]>([]);

  const params = useParams<{ spotId: string }>(); // 'spotId'를 string으로 선언
  console.log(params.spotId);
  const photoSpotId = params.spotId ? parseInt(params.spotId, 10) : -1; // 문자열을 숫자로 변환

  console.log(photoSpotId);
  // Fetch photo spot data using the spotId
  const { data: photoSpotData } = useQuery<PhotoSpotProps>({
    queryKey: ['photoSpotData', photoSpotId],
    queryFn: () => getSelectedSpotInfo(Number(photoSpotId)),
    enabled: !!photoSpotId, // Ensure the query runs only if spotId is available
  });

  useEffect(() => {
    if (photoSpotData) {
      const sliderData = photoSpotData.imageInfo.spotPostImageList.map(
        (imageData, index) => {
          let hasNext = false;
          if (
            photoSpotData.imageInfo.hasNext &&
            index === photoSpotData.imageInfo.spotPostImageList.length - 1
          ) {
            hasNext = true;
          }
          return {
            imageUrl: imageData.imageUrl,
            univ,
            spotName: photoSpotData.spotName,
            photographerName: imageData.photographerName,
            postId: imageData.postId,
            hasNext,
          };
        },
      );

      console.log(sliderData);
      setSpotPostImages(sliderData); // 상태 업데이트를 useEffect 내부에서 수행
    }
  }, [univ, photoSpotData]); // photoSpotData 또는 univ가 변경될 때만 실행

  const handleCardModal = (postId: number) => {
    const index = photoSpotData?.imageInfo.spotPostImageList.findIndex(
      (item) => item.postId === postId,
    );
    if (index !== undefined && index >= 0) {
      setCurrPostIdIndex(index);
      setModalState(true);
    }
  };

  return (
    <Container>
      <Back text={`${univ}`} />
      <HeaderContainer>
        <Text variant="title2_sb">{photoSpotData?.spotName}</Text>
        <Text variant="body2_rg" className="text-pre">
          {photoSpotData?.content}
        </Text>
      </HeaderContainer>
      {/* 칩 버튼 */}
      <CardContainerY>
        {photoSpotData?.imageInfo.spotPostImageList.map((spot) => (
          <Card
            key={spot.postId}
            size="small"
            src={spot.imageUrl}
            onClick={() => handleCardModal(spot.postId)}
          />
        ))}
      </CardContainerY>

      {modalState && currPostIdIndex !== null && photoSpotData && (
        <Modal setModalState={setModalState} sliderData={spotPostImages} />
      )}
    </Container>
  );
}
