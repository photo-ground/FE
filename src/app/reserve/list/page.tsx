import ReservationListScreen from './screen';

export default async function ReservationListPage({
  searchParams,
}: {
  searchParams: { tab?: string };
}) {
  const { tab } = await searchParams;

  return <ReservationListScreen currentTab={tab || 'reserve'} />;
}
