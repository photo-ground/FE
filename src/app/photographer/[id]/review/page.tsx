import getReviewData from './getReviewData';
import PhotographerReviewScreen from './screen';

export default async function PhotographerReviewPage({
  params,
}: {
  params: { id: string };
}) {
  const reviewData = await getReviewData(await params.id);

  return <PhotographerReviewScreen data={reviewData} />;
}

export const runtime = 'edge';
