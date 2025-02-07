import getPhotographerData from '@/app/photographer/[id]/_libs/getPhotographerData';
import PhotographerDetailScreen from './screen';

export default async function PhotographerProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await params).id!, 10);
  const photographerData = await getPhotographerData(id);

  return (
    <PhotographerDetailScreen photographerId={id} data={photographerData} />
  );
}

export const runtime = 'edge';
