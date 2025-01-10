'use client';

// import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import { Container, CardContainerY } from '../../style';
import photoSpotData from '../../_data/photoSpotData';
import Modal from '../../_components/Modal';

// Suspense로 감싼 SearchParams를 가져오는 컴포넌트
function SearchParamsHandler() {
  const searchParams = useSearchParams();
  const univ = searchParams.get('univ') || 'Unknown University';

  return <Back text={`${univ}`} />;
}

export default function Overview() {
  const [modalState, setModalState] = useState<boolean>(false);
  const [spotId, setSpotId] = useState<number>(0);

  function toggleModal(id: number) {
    console.log(id);
    setSpotId(id);
    // redirect(`spot/@modal?spotId=${currSpot}`);
    setModalState(!modalState);
  }
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsHandler />
      </Suspense>
      <CardContainerY>
        {/* <Link href="/school">Open modal</Link> */}
        {photoSpotData.imageInfo.spotPostImageList.map((spot) => (
          // <Link href="/map/overview?modal=school">
          <Card
            key={spot.postId}
            size="small"
            src={spot.imageUrl}
            onClick={() => toggleModal(spot.postId)}
          />
          // </Link>
        ))}
      </CardContainerY>
      {modalState && (
        <Modal
          currIndex={spotId}
          setModalState={setModalState}
          photoSpot={photoSpotData}
        />
      )}
    </Container>
  );
}
