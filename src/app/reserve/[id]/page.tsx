import getReservationDetail from './_libs/getReservationDetail';
import ReserveDetailScreen from './screen';

export const runtime = 'edge';

export default async function ReserveDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id!;
  const reservationDetail = await getReservationDetail(id);

  return <ReserveDetailScreen data={reservationDetail} />;
}
