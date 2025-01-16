/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */

'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useImageStore from '@/store/useImageStore';
import Image from 'next/image';
import TNB from '@/components/TNB';
import { UNIV_LIST } from '@/types/univOption';
import { PhotoSpotListProps } from '@/types/photoSpot';
import { getUnivSpotList } from '@/app/photographerProfile/_services/getActivePhotographer';
import UnivRadioGroup from './_component/UnivRadioGroup';

export default function PostDetailPage() {
  // 이미지 리스트
  const { images } = useImageStore();

  // Univ정보
  const handleSelectionChange = (univ: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isPending, isError, data, error } = useQuery<PhotoSpotListProps[]>({
      queryKey: [univ],
      queryFn: () => getUnivSpotList(univ),
    });

    if (isPending) {
      return <span>Loading...</span>;
    }

    if (isError) {
      return <span>Error: {error.message}</span>;
    }
    if (data) {
      console.log(data);
      return data;
    }

    return 'no-data';
  };
  return (
    <div>
      <TNB.Back text="게시글 작성" />

      <UnivRadioGroup options={UNIV_LIST} onChange={handleSelectionChange} />

      <h1>선택된 이미지</h1>
      {images.length > 0 ? (
        images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Uploaded ${index}`}
            width={100}
            height={100}
          />
        ))
      ) : (
        <p>선택된 이미지가 없습니다.</p>
      )}
    </div>
  );
}
