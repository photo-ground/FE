'use client';

import { useParams } from 'next/navigation';
import { Container } from '../../../style';
import Main from './Main';

// school을 URL 매개변수로 전달
export default function Page() {
  const params = useParams<{ univ: string; spotId: string }>();

  const univ = decodeURIComponent(params.univ || 'Unknown University');

  const photoSpotId = Number(params.spotId);

  return (
    <Container>
      {/* 클라이언트 컴포넌트에 필요한 데이터 전달 */}
      <Main univ={univ} spotId={photoSpotId} />
    </Container>
  );
}
