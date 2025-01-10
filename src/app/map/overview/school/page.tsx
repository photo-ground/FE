'use client';

// import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import { Container, CardContainerY } from '../../style';
import photoSpotData from '../../_data/photoSpotData';
import Modal from '../../_components/Modal';
import useSpotStore from '../../_store';

// Suspense로 감싼 SearchParams를 가져오는 컴포넌트
function SearchParamsHandler() {
  const searchParams = useSearchParams();
  const univ = searchParams.get('univ') || 'Unknown University';

  return <Back text={`${univ}`} />;
}

export default function Overview() {
  const [modalState, setModalState] = useState<boolean>(false);
  const spotId = useSpotStore((state) => state.spotId);
  const setSpotId = useSpotStore((state) => state.setSpotId);

  function handleCardModal(postId: number) {
    console.log(postId);
    const index = photoSpotData.imageInfo.spotPostImageList.findIndex(
      (item) => item.postId === postId,
    );
    console.log(index);
    setSpotId(index); // index를 저장
    setModalState(true); // 모달 열기
  }

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsHandler />
      </Suspense>
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
