import ReserveScreen from './screen';
import getReservationInfo from './_libs/getReservationInfo';

export default async function ReservePage() {
  const data = await getReservationInfo();

  return <ReserveScreen data={data} />;
}

export const runtime = 'edge';
