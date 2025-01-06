'use client';

import Card from '@/components/Card';
import Back from '@/components/TNB/Back';
import { useRouter, useSearchParams } from 'next/navigation';
import { photoSpotData } from '../../_data/photoSpotData';
import { Container, CardContainerY } from '../../style';

// school을 URL 매개변수로 전달
export default function Overview() {
  const searchParams = useSearchParams();
  const univ = searchParams.get('univ'); // 쿼리 파라미터에서 'school' 값 가져옴

  const router = useRouter();
  function onClick() {
    router.replace('/map/overview/i/flow/school');
    // console.log('clicked');
  }
  return (
    <Container>
      <Back text={`${univ}`} />
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
    </Container>
  );
}
