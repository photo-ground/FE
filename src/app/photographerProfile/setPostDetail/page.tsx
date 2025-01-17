/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */

'use client';

import React, { useEffect, useState } from 'react';
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
import Dropdown from '@/components/Dropdown';
import UnivRadioGroup from './_component/UnivRadioGroup';
import ImagePreviewItem from '../_components/ImagePreviewItem';
import PhotoSpotByUniv from '../_data/PhotospotByUniv';
import CTAButton from '@/components/atoms/CTAButton';
// import Filter from '@/app/home/_components/Filter';

const Title = styled(Text)`
  margin: 0 20px;
`;
const UploadArea = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: inherit;
  gap: 16px 10px;
`;
const Textarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  border-radius: 8px;
  background-color: transparent;
  padding: 20px;
  height: 120px;
  width: calc(100% - 40px);
  margin: 20px;
  font-family:
    'Pretendard Variable',
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    sans-serif;

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

const ButtonBox = styled.div`
  margin: 0 20px;
`;
interface Option {
  value: number;
  label: string;
}
export default function PostDetailPage() {
  // TODO : 학교 선택 전, 사진 별 스팟 선택 비활성화
  // TODO : 이미지 별 포토 스팟 선택 -> 사진 갯수만큼 크기의 빈 배열 생성(zustand), 이후 스팟 선택시, 해당 idx에 스팟 아이디 추가
  // TODO : 모든 학교 선택 완료 후, 업로드 버튼 활성화
  // TODO : 추후 spotData를 선택된 대학 기준으로 가져오도록
  // TODO :

  const [isComplete, setIsComplete] = useState<boolean>(false);

  // 이미지 리스트 & 포토스팟 선택 리스트 (zustand)
  const {
    images,
    spotIds,
    removeImage,
    selectSpotId,
    removeSpotId,
    setSpotIds,
  } = useImageStore();

  useEffect(() => {
    // 이미지 리스트 크기와 동일한 빈 배열 생성
    const initialSpotIds = Array(images.length).fill(-1);
    setSpotIds(initialSpotIds);
  }, []);

  // 임시 데이터 -> api연결 후 변경
  const spotData: Option[] = PhotoSpotByUniv.map((e) => {
    const { spotId, spotName } = e;
    return { value: spotId, label: spotName };
  });

  // 선택된 대학 상태
  const [selectedUniv, setSelectedUniv] = useState<string | null>(null);

  // Univ 정보를 가져오는 useQuery
  const { isLoading, isError, data, error } = useQuery<PhotoSpotListProps[]>({
    queryKey: ['univSpotList', selectedUniv],
    queryFn: () =>
      selectedUniv ? getUnivSpotList(selectedUniv) : Promise.resolve([]),
    enabled: !!selectedUniv, // selectedUniv가 null일 때는 쿼리를 비활성화
  });

  useEffect(() => {
    // 이미지 리스트 크기와 동일한 빈 배열 생성
    // console.log(spotIds);
    if (spotIds.includes(-1) || !selectedUniv) {
      // alert('모든 이미지에 포토스팟을 지정해야 합니다.');
      return;
    }
    setIsComplete(true);
  }, [spotIds, selectedUniv]);

  // 대학 선택 핸들러
  const handleSelectionChange = (univ: string) => {
    setSelectedUniv(univ);
  };

  // 이미지 통 삭제
  const handleRemoveItem = (index: number) => {
    removeImage(index);
    removeSpotId(index);
  };

  // 스팟 선택 핸들러
  const handleDropdown = (index: number, spotId: number) => {
    console.log(spotId);
    selectSpotId(index, spotId); // 선택한 스팟 ID 추가
  };

  const handleFormSubmit = () => {
    if (spotIds.includes(-1)) {
      alert('모든 이미지에 포토스팟을 지정해야 합니다.');
      return;
    }
    setIsComplete(true);
    alert('완료되었습니다!');
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
                onDelete={() => handleRemoveItem(index)}
              />
              <Dropdown
                variant="filter"
                key={index}
                options={spotData}
                placeholder="포토스팟 추가"
                onSelect={(value) => handleDropdown(index, Number(value))}
              />
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

      <Spacer size="80px" />
      <ButtonBox>
        <CTAButton
          text="완료하기"
          variant="primary"
          disabled={!isComplete}
          onClick={handleFormSubmit}
        />
      </ButtonBox>

      <Spacer size="60px" />
    </div>
  );
}
