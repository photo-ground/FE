import getPhotographerData from './getPhotographerData';
import PhotographerDetailScreen from './screen';

export default async function PhotographerDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const photographerData = await getPhotographerData(params.id);

  return (
    <PhotographerDetailScreen
      photographerId={params.id}
      data={photographerData}
    />
  );
}

export const runtime = 'edge';
