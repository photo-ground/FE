import getPhotographerData from './getPhotographerData';
import PhotographerDetailScreen from './screen';

export default async function PhotographerDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const photographerData = await getPhotographerData(await params.id);

  return (
    <PhotographerDetailScreen
      photographerId={await params.id}
      data={photographerData}
    />
  );
}

export const runtime = 'edge';
