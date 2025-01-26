import getReservationDetail from '../../[id]/_libs/getReservationDetail';
import ReviewScreen from './screen';

export const runtime = 'edge';

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id!;
  const reservationDetail = await getReservationDetail(id);

  return (
    <ReviewScreen reservationId={id} reservationDetail={reservationDetail} />
  );
}
