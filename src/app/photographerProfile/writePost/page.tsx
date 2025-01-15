'use client';

import { useEffect, useState } from 'react';
import TNB from '@/components/TNB';
import { useRouter } from 'next/navigation';
import CTAButton from '@/components/atoms/CTAButton';
import UploadImages from './_component/UploadImages';
import Checkbox from './_component/CheckBoxInput';

export default function WritePostPage() {
  const router = useRouter();
  const [isPermitted, setIsPermitted] = useState(true);
  const [isSameUniv, setIsSameUniv] = useState(false);
  const [goNext, setGoNext] = useState(false);

  const handleGoNext = () => {
    router.push('/photographerProfile/setPostDetail ');
  };

  useEffect(() => {
    if (isPermitted && isSameUniv) {
      setGoNext(!true);
    } else {
      setGoNext(!false);
    }
  }, [isPermitted, isSameUniv]);
  return (
    <div>
      <TNB.Back text="게시글 작성" />
      <UploadImages />

      <Checkbox
        checked={isPermitted}
        onChange={setIsPermitted}
        text="사진 모델의 공개 허락을 받았어요"
      />
      <Checkbox
        checked={isSameUniv}
        onChange={setIsSameUniv}
        text="동일한 학교 내의 사진이에요"
      />

      <CTAButton
        text="다음으로"
        variant="primary"
        disabled={goNext}
        onClick={handleGoNext}
      />
    </div>
  );
}
