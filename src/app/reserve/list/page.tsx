import ReservationListScreen from './screen';

export default function ReservationListPage({
  searchParams,
}: {
  searchParams: { tab?: string };
}) {
  const { tab } = searchParams;

  return <ReservationListScreen currentTab={tab || 'reserve'} />;
}
