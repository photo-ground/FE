import getPhotographerData from './_libs/getPhotographerData';
import PhotographerDetailScreen from './screen';

export default async function PhotographerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id!;
  const photographerData = await getPhotographerData(id);

  return (
    <PhotographerDetailScreen photographerId={id} data={photographerData} />
  );
}

export const runtime = 'edge';
