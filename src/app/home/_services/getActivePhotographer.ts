/* eslint-disable import/no-extraneous-dependencies */

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

export default async function getActivePhotographer(): Promise<PhotographerResponse> {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer/active`,
  );
  // TODO :
  console.log(res);
  console.log(res.headers);
  console.log(res.status);
  // console.log(res.json());
  console.log(res.ok);
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || '문제가 발생했습니다.');
  }

  return res.json(); // 성공적인 JSON 데이터 반환
}
