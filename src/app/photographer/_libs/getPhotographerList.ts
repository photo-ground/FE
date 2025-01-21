export interface PhotographerSummary {
  photographerName: string;
  photographerId: number;
  age: number;
  gender: 'MALE' | 'FEMALE';
  profileUrl: string;
}

export default async function getPhotographerList() {
  try {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer`,
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
