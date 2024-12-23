import { ReserveTab } from './_components/Tabs';
import ReservationListScreen from './screen';

export default async function ReservationListPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: ReserveTab }>;
}) {
  const { tab } = await searchParams;

  return <ReservationListScreen currentTab={tab || 'reserve'} />;
}
