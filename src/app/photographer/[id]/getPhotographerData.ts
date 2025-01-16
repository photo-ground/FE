export interface PhotographerDetail {
  profileUrl: string;
  photographerName: string;
  followerNum: number;
  gender: 'MALE' | 'FEMALE';
  age: number;
  univ: string[];
  price: number;
  addPrice: number;
}

export default async function getPhotographerData(id: string) {
  try {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer/${id}/intro`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    );

    if (!rawResponse.ok) {
      const response = await rawResponse.json();
      throw new Error(response.message);
    }

    const response = await rawResponse.json();
    return response;
  } catch (error: unknown) {
    console.error(error);

    return null;
  }
}
