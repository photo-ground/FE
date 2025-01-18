export interface PostDetail {
  id: number;
  photographerId: number;
  photographerName: string;
  content: string;
  univName: string;
  imageList: {
    imageUrl: string;
    spotName: string;
    imageId: number;
  }[];
}

export default async function getPostData(id: string) {
  try {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`,
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
