'use client';

// import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import { Container, CardContainerY } from '../../style';
import postData from '../../_data/postData';
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
  const currPostIdIndex = useSpotStore((state) => state.currPostIdIndex);
  const setCurrPostIdIndex = useSpotStore((state) => state.setCurrPostIdIndex);

<<<<<<< Updated upstream
  function handleCardModal(postId: number) {
    const index = photoSpotData.imageInfo.spotPostImageList.findIndex(
      (item) => item.postId === postId,
    );
    setCurrPostIdIndex(index); // index를 저장
=======
  function handleCardModal(id: number) {
    // console.log(id);
    const index = postData.postList.findIndex((item) => item.id === id);
    console.log(index);
    setSpotId(index); // index를 저장
>>>>>>> Stashed changes
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
