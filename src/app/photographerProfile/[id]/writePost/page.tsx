import Main from './Main';

export default async function PhotographerWritePostPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id!;

  return <Main photographerId={id} />;
}

export const runtime = 'edge';
