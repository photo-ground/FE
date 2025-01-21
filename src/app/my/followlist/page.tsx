import FollowScreen from './screen';
import getFollowList from './_libs/getFollowList';

export default async function FollowPage() {
  const data = await getFollowList();

  return <FollowScreen data={data} />;
}

export const runtime = 'edge';
