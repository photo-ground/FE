import Main from './Main';

export default async function PhotographerDetailPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id!;

  return <Main photographerId={id} />;
}

export const runtime = 'edge';
