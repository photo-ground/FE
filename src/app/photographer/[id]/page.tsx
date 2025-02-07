import getPhotographerData from './_libs/getPhotographerData';
import PhotographerDetailScreen from './screen';

export default async function PhotographerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await params).id!, 10);
  const photographerData = await getPhotographerData(id);

  if (!photographerData) {
    return null;
  }

  return (
    <PhotographerDetailScreen photographerId={id} data={photographerData} />
  );
}

export const runtime = 'edge';
