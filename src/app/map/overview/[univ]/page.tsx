'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import { University } from '@/types/university';
import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import { getPostByUniv } from '@/app/home/_services/getActivePhotographer';
import { Container } from '../../style';
import Modal from '../../_components/SpotModal';
import useSpotStore from '../../_store';
import { SliderData } from '../../_components/Slider';

// Suspense로 감싼 SearchParams를 가져오는 컴포넌트

// 특정학교 전체 포토스팟 위치정보 조회로 각 학교별 포토스팟 위치,이름, 사진정보 받아오고
// 이미지는 각 스팟 id 이용해서 api 호출!

const CardContainerY = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3열 */
  gap: 0.625rem;

  margin: 0 auto;
  padding: 1rem 1.25rem;

  overflow: auto;
`;
export default function Overview() {
  const params = useParams<{ univ: University }>();
  const univ = decodeURIComponent(params.univ || 'Unknown University');

  const [modalState, setModalState] = useState<boolean>(false);
  const { currPostIdIndex, setCurrPostIdIndex } = useSpotStore();

  const [spotPostImages, setSpotPostImages] = useState<SliderData[]>([]);

  // 특정학교 전체 포토스팟 위치정보 조회로 각 학교별 포토스팟 위치,이름, 사진정보 받아오고
  const { ref, inView } = useInView();

  const { data: postByUnivData, fetchNextPage } = useInfiniteQuery({
    queryKey: ['univPhotoSpotData', univ],
    queryFn: ({ pageParam }) => getPostByUniv(univ, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.hasNext) {
        return null;
      }
      return lastPage.postList.at(-1)?.id;
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  useEffect(() => {
    if (postByUnivData) {
      // Flatten the array of arrays into a single array
      const validSpotImages: SliderData[] = postByUnivData.pages.flatMap(
        (page) =>
          page.postList.map((postData) => ({
            imageUrl: postData.firstImageUrl,
            univ,
            spotName: postData.firstImageSpot,
            photographerName: postData.photographerName,
            postId: postData.id,
          })),
      );

      setSpotPostImages(validSpotImages);
    }
  }, [univ, postByUnivData]);
  const handleCardClick = (spotIndex: number) => {
    setCurrPostIdIndex(spotIndex);
    setModalState(true);
  };

  return (
    <Container>
      <Back text={univ} />
      <CardContainerY>
        {spotPostImages.map((spot, spotDataIndex) => (
          <Card
            key={spot.postId}
            size="small"
            src={spot.imageUrl}
            onClick={() => handleCardClick(spotDataIndex)}
          />
        ))}
        <div ref={ref} />
      </CardContainerY>

      {modalState && currPostIdIndex !== null && postByUnivData && (
        <Modal setModalState={setModalState} sliderData={spotPostImages} />
      )}
    </Container>
  );
}

export const runtime = 'edge';
