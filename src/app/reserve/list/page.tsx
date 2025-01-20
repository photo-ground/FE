import ReservationListScreen from './screen';
import getReservations from './_libs/getReservations';

export default async function ReservationListPage() {
  const reservationList = await getReservations();
  return (
    <ReservationListScreen
      reservationList={reservationList.reservationInfoDTOList}
    />
  );
}

export const runtime = 'edge';
