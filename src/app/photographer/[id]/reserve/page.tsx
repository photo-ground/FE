import getPhotographerData from './getPhotographerData';
import PhotographerReserveScreen from './screen';

export default async function PhotographerReservePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id!;
  const photographerData = await getPhotographerData(id);

  if (!photographerData) {
    return null;
  }

  return <PhotographerReserveScreen photographerData={photographerData} />;
}
