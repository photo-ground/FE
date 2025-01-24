import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import Text from '@/components/atoms/Text';
import { useInfiniteQuery } from '@tanstack/react-query';
import Modal from '../../../_components/Modal';
import useSpotStore from '../../../_store';
import { getSelectedSpotInfo } from '../../../_services/getPhotoSpot';
import { SliderData } from '../../../_components/Slider';
import { CardContainerY } from '../../../style';

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

interface MainProps {
  univ: string;
  spotId: number;
}

export default function Main({ univ, spotId }: MainProps) {
  const [modalState, setModalState] = useState(false);
  const currPostIdIndex = useSpotStore((state) => state.currPostIdIndex);
  const setCurrPostIdIndex = useSpotStore((state) => state.setCurrPostIdIndex);
  const [spotPostImages, setSpotPostImages] = useState<SliderData[]>([]);

  const { ref, inView } = useInView();

  const { data: photoSpotData, fetchNextPage } = useInfiniteQuery({
    queryKey: ['photoSpotData', spotId],
    queryFn: () => getSelectedSpotInfo(Number(spotId)),
    initialPageParam: null,
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
              key={spot.postId}
              size="small"
              src={spot.imageUrl}
              onClick={() => handleCardModal(spot.postId)}
            />
          )),
        )}
      </CardContainerY>
      {modalState && currPostIdIndex !== null && photoSpotData && (
        <Modal setModalState={setModalState} sliderData={spotPostImages} />
      )}
      <div ref={ref} />
    </>
  );
}
