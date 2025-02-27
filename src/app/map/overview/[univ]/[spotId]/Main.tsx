import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import Text from '@/components/atoms/Text';
import Modal from '../../../_components/SpotModal';
import useSpotStore from '../../../_store';
import { getSelectedSpotInfo } from '../../../_services/getPhotoSpot';
import { SliderData } from '../../../_components/Slider';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  margin: 1.5rem 20px 2rem 20px;
  .text-pre {
    white-space: pre-line;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

interface MainProps {
  univ: string;
  spotId: number;
}
const CardContainerY = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3열 */
  gap: 10px;

  margin: 0 auto;
  padding: 1rem 1.25rem;

  img {
    width: 133px;
    height: auto;
  }

  overflow: auto;
`;
export default function Main({ univ, spotId }: MainProps) {
  const [modalState, setModalState] = useState(false);
  const { currPostIdIndex, setCurrPostIdIndex } = useSpotStore();
  const [spotPostImages, setSpotPostImages] = useState<SliderData[]>([]);

  const { ref, inView } = useInView();

  const { data: photoSpotData, fetchNextPage } = useInfiniteQuery({
    queryKey: ['photoSpotData', spotId],
    queryFn: ({ pageParam }) => getSelectedSpotInfo(spotId, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.imageInfo.hasNext) {
        return null;
      }
      return lastPage.imageInfo.spotPostImageList.at(-1)?.imageId;
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  useEffect(() => {
    if (photoSpotData) {
      const sliderData = photoSpotData.pages.flatMap((page) =>
        page.imageInfo.spotPostImageList.map((imageData) => ({
          imageUrl: imageData.imageUrl,
          univ,
          spotName: page.spotName,
          photographerName: imageData.photographerName,
          postId: imageData.postId,
        })),
      );
      setSpotPostImages(sliderData);
    }
  }, [photoSpotData, univ]);

  const handleCardModal = (postId: number) => {
    const index = spotPostImages.findIndex((item) => item.postId === postId);
    if (index !== undefined && index >= 0) {
      setCurrPostIdIndex(index);
      setModalState(true);
    }
  };

  return (
    <>
      <Back text={univ} />
      <HeaderContainer>
        <Text variant="title2_sb">{photoSpotData?.pages.at(0)?.spotName}</Text>
        <Text variant="body2_rg" className="text-pre">
          {photoSpotData?.pages.at(0)?.content}
        </Text>
      </HeaderContainer>
      <CardContainerY>
        {photoSpotData?.pages.flatMap((page) =>
          page.imageInfo.spotPostImageList.map((spot) => (
            <Card
              key={spot.imageUrl}
              size="small"
              src={spot.imageUrl}
              onClick={() => handleCardModal(spot.postId)}
            />
          )),
        )}
        <div ref={ref} />
      </CardContainerY>
      {modalState && currPostIdIndex !== null && photoSpotData && (
        <Modal setModalState={setModalState} sliderData={spotPostImages} />
      )}
    </>
  );
}
