import getReviewData from './getReviewData';
import PhotographerReviewScreen from './screen';

export default async function PhotographerReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id!;
  const reviewData = await getReviewData(id);

  return <PhotographerReviewScreen data={reviewData} />;
}

export const runtime = 'edge';
