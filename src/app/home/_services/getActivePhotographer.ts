/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';

interface Photographer {
  photographerName: string;
  photographerId: number;
  age: number;
  gender: string;
  profileUrl: string;
}

interface PhotographerResponse {
  photographerList: Photographer[];
  hasNext: boolean;
}

async function getActivePhotographer(): Promise<PhotographerResponse> {
  const rawResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer/active`,
    { method: 'GET' },
  );

  if (!rawResponse.ok) {
    const response = await rawResponse.json();
    throw new Error(response.message || '문제가 발생했습니다.');
  }

  return rawResponse.json(); // 응답 데이터를 반환
}

export default function useActivePhotographer() {
  return useQuery({
    queryKey: ['activePhotographer'],
    queryFn: getActivePhotographer,
    staleTime: 5 * 60 * 1000, // 데이터 캐싱 시간 설정 (5분)
    retry: 2, // 실패 시 재시도 횟수
  });
}
