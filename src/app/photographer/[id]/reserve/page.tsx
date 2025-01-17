import getPhotographerData from './getPhotographerData';
import PhotographerReserveScreen from './screen';

export default async function PhotographerReservePage({
  params,
}: {
  params: { id: string };
}) {
  const photographerData = await getPhotographerData(params.id);

  if (!photographerData) {
    return null;
  }

  return <PhotographerReserveScreen photographerData={photographerData} />;
}
