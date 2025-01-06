'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import { Container, CardContainerY } from '../../style';
import photoSpotData from '../../_data/photoSpotData';

// Suspense로 감싼 SearchParams를 가져오는 컴포넌트
function SearchParamsHandler() {
  const searchParams = useSearchParams();
  const univ = searchParams.get('univ') || 'Unknown University';

  return <Back text={`${univ}`} />;
}

export default function Overview() {
  const router = useRouter();

  function onClick() {
    router.replace('/map/overview/i/flow/school');
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
            onClick={() => onClick()}
          />
        ))}
      </CardContainerY>
    </Container>
  );
}
