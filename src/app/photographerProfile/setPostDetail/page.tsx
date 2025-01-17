/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */

'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useImageStore from '@/store/useImageStore';
import TNB from '@/components/TNB';
import { UNIV_LIST } from '@/types/univOption';
import { PhotoSpotListProps } from '@/types/photoSpot';
import { getUnivSpotList } from '@/app/photographerProfile/_services/getActivePhotographer';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';
import Spacer from '@/components/Spacer';
import Divider from '@/components/Divider';
import UnivRadioGroup from './_component/UnivRadioGroup';
import ImagePreviewItem from '../_components/ImagePreviewItem';
// import Filter from '@/app/home/_components/Filter';

const Title = styled(Text)`
  margin: 0 20px;
`;
const UploadArea = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: inherit;
  gap: 8px;
`;
const Textarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 8px;
  background-color: transparent;
  padding: 20px;
  height: 120px;
  width: calc(100% - 40px);
  margin: 20px;
  resize: none;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

const SelectPhotoSpot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export default function PostDetailPage() {
  // 이미지 리스트
  const { images, removeImage } = useImageStore();

  // 선택된 대학 상태
  const [selectedUniv, setSelectedUniv] = useState<string | null>(null);

  // Univ 정보를 가져오는 useQuery
  const { isLoading, isError, data, error } = useQuery<PhotoSpotListProps[]>({
    queryKey: ['univSpotList', selectedUniv],
    queryFn: () =>
      selectedUniv ? getUnivSpotList(selectedUniv) : Promise.resolve([]),
    enabled: !!selectedUniv, // selectedUniv가 null일 때는 쿼리를 비활성화
  });

  // 대학 선택 핸들러
  const handleSelectionChange = (univ: string) => {
    setSelectedUniv(univ);
  };

  return (
    <div>
      <TNB.Back text="게시글 작성" />
      <Spacer />
      <Title variant="title2_sb">촬영 장소 선택</Title>
      <UnivRadioGroup options={UNIV_LIST} onChange={handleSelectionChange} />
      <Spacer />
      <Divider />
      <Spacer />
      <Title variant="title2_sb">포토스팟 지정</Title>

      <UploadArea>
        {/* 로딩 상태 */}
        {isLoading && <span>Loading...</span>}
        {/* 에러 처리 */}
        {isError && <span>Error: {error?.message}</span>}
        {/* 데이터 표시 */}
        {data && (
          <div>
            <h2>데이터 목록</h2>
            <ul>
              {data.map((spot, index) => (
                <li key={index}>{spot.spotName}</li>
              ))}
            </ul>
          </div>
        )}
        {images.length > 0 ? (
          images.map((src, index) => (
            <SelectPhotoSpot>
              <ImagePreviewItem
                key={src}
                src={src}
                alt={`Upload File[${index}]`}
                onDelete={() => removeImage(index)}
              />
              <div>hello</div>
              {/* <Filter optionList={} /> */}
            </SelectPhotoSpot>
          ))
        ) : (
          <p>선택된 이미지가 없습니다.</p>
        )}
      </UploadArea>

      <Spacer />
      <Divider />
      <Spacer />

      <Title variant="title2_sb">글 작성</Title>

      <Textarea placeholder="사진을 소개해주세요!" />
    </div>
  );
}
