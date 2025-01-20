import getReservations from './getReservations';
import ReservationListScreen from './screen';

export default async function ReservationListPage() {
  const reservationList = await getReservations();
  return (
    <ReservationListScreen
      reservationList={reservationList.reservationInfoDTOList}
    />
  );
}

export const runtime = 'edge';
