import Main from './Main';

export default async function PhotographerWritePostPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  if (!params) {
    alert('접근할 수 없습니다.');
    // Router.
  }
  const id = (await params).id!;

  return <Main photographerId={id} />;
}

export const runtime = 'edge';
