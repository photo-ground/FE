import getPostData from './getPostData';
import PostScreen from './screen';

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id!;
  const postData = await getPostData(id);

  return <PostScreen postData={postData} />;
}

export const runtime = 'edge';
