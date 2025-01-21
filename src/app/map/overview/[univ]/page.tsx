'use client';

// import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import { PhotoSpotListProps } from '@/types/photoSpot';
import { useQuery } from '@tanstack/react-query';
import { Container, CardContainerY } from '../../style';
import Modal from '../../_components/Modal';
import useSpotStore from '../../_store';
import {
  getPhotoSpotByUniv,
  getSelectedSpotInfo,
} from '../../_services/getPhotoSpot';
import { SliderData } from '../../_components/Slider';

// Suspense로 감싼 SearchParams를 가져오는 컴포넌트

// 특정학교 전체 포토스팟 위치정보 조회로 각 학교별 포토스팟 위치,이름, 사진정보 받아오고
// 이미지는 각 스팟 id 이용해서 api 호출!

export default function Overview() {
  const params = useParams<{ univ: string }>();
  const univ = decodeURIComponent(params.univ || 'Unknown University');

  const [modalState, setModalState] = useState<boolean>(false);
  const currPostIdIndex = useSpotStore((state) => state.currPostIdIndex);
  const setCurrPostIdIndex = useSpotStore((state) => state.setCurrPostIdIndex);

  const [spotPostImages, setSpotPostImages] = useState<SliderData[]>([]);

  // 특정학교 전체 포토스팟 위치정보 조회로 각 학교별 포토스팟 위치,이름, 사진정보 받아오고
  const { data: postByUnivData } = useQuery<PhotoSpotListProps[]>({
    queryKey: ['univPhotoSpotData', univ],
    queryFn: () => getPhotoSpotByUniv(univ),
    enabled: !!univ, // Ensure the query runs only if spotId is available
  });

  // 특정학교 전체 포토스팟 아이디 저장
  useEffect(() => {
    const fetchSpotImages = async () => {
      if (!postByUnivData) return;

      try {
        // 아이디 순회하면서
        const spotImagePromises = postByUnivData.map((item) =>
          getSelectedSpotInfo(item.spotId),
        );
        // 비동기 호출
        const spotImageData = await Promise.all(spotImagePromises);

        // 이미지 배열에 추가할 객체 만들어서
        const validSpotImages: SliderData[] = spotImageData.flatMap((tmpData) =>
          tmpData.imageInfo.spotPostImageList.map((imageData, index) => ({
            imageUrl: imageData.imageUrl,
            univ,
            spotName: tmpData.spotName,
            photographerName: imageData.photographerName,
            postId: imageData.postId,
            hasNext:
              tmpData.imageInfo.hasNext &&
              index === tmpData.imageInfo.spotPostImageList.length - 1,
          })),
        );
        console.log('hello');
        console.log(validSpotImages);
        setSpotPostImages(validSpotImages);
      } catch (error) {
        console.error('Error fetching spot images:', error);
      }
    };

    fetchSpotImages();
  }, [univ, postByUnivData]); // postByUnivData만 의존성으로 설정

  const handleCardClick = (spotIndex: number) => {
    // const selectedSpot = spotPostImages[spotIndex];
    // setSliderData(selectedSpot.spotPostImageProps);
    setCurrPostIdIndex(spotIndex);
    setModalState(true);
  };

  return (
    <Container>
      <Back text={`${univ}`} />
      <CardContainerY>
        {spotPostImages.map((spot, spotDataIndex) => (
          <Card
            key={`${spot.postId}`}
            size="small"
            src={spot.imageUrl}
            onClick={() => handleCardClick(spotDataIndex)}
          />
        ))}
      </CardContainerY>

      {modalState && currPostIdIndex !== null && postByUnivData && (
        <Modal setModalState={setModalState} sliderData={spotPostImages} />
      )}
    </Container>
  );
}
