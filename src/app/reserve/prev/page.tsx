import getPrevReservationList from './_libs/getPrevReservationList';
import PrevReservationScreen from './screen';

export default async function PrevReservationPage() {
  const data = await getPrevReservationList();

  return <PrevReservationScreen data={data?.reservationInfoDTOList || []} />;
}

export const runtime = 'edge';
