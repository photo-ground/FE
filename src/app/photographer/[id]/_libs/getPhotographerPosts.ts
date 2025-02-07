import { PhotographerId } from '@/types/photographer';

export default async function getPhotographerPosts(
  id: PhotographerId,
  lastPostId: number | null,
) {
  try {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer/${id}/bottom${lastPostId ? `?cursor=${lastPostId}` : ''}`,
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
    return response.posts;
  } catch (error: unknown) {
    console.error(error);

    return null;
  }
}
