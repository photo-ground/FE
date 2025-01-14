'use client';

import TNB from '@/components/TNB';
import UploadImages from './_component/UploadImages';

export default function WritePostPage() {
  return (
    <div>
      <TNB.Back text="게시글 작성" />
      <UploadImages />
    </div>
  );
}
