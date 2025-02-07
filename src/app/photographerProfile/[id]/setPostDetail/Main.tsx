/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */

'use client';

import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import useImageStore from '@/store/useImageStore';
import TNB from '@/components/TNB';
import { UNIV_LIST, UnivOption } from '@/types/univOption';
import { PhotoSpot } from '@/types/photoSpot';
import {
  getUnivSpotList,
  postNewContent,
} from '@/app/my/_libs/getActivePhotographer';

import Spacer from '@/components/Spacer';
import Divider from '@/components/Divider';
import Dropdown from '@/components/Dropdown';
import CTAButton from '@/components/atoms/CTAButton';
import { PostInfo, PostUploading } from '@/types/post';
import { Option } from '@/types/option';
import { useRouter } from 'next/navigation';
import UnivRadioGroup from '@/app/my/setPostDetail/_component/UnivRadioGroup';
import ImagePreviewItem from '@/app/my/_component/ImagePreviewItem';
import {
  ButtonBox,
  SelectPhotoSpot,
  Textarea,
  Title,
  UploadArea,
} from '@/app/my/setPostDetail/style';

export default function Main({ photographerId }: { photographerId: number }) {
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [textareaContent, setTextareaContent] = useState<string>('');
  const [spotData, setSpotData] = useState<Option[]>([]);
  const router = useRouter();
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
    if (spotIds.length !== images.length) {
      const initialSpotIds = Array(images.length).fill(-1);
      setSpotIds(initialSpotIds);
    }
  });

  // 선택된 대학 상태
  const [selectedUniv, setSelectedUniv] = useState<UnivOption | null>(null);

  // 이미지 : File[] -> base64로 변환
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const generateImageUrls = async () => {
      try {
        const urls = await Promise.all(
          images.map(
            (file) =>
              new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                  if (reader.result) {
                    resolve(reader.result as string);
                  } else {
                    reject(new Error('Failed to read file'));
                  }
                };
                reader.onerror = (error) => reject(error);
                reader.readAsDataURL(file);
              }),
          ),
        );
        setImageUrls(urls);
      } catch (error) {
        console.error('Error generating image URLs:', error);
      }
    };

    if (images.length > 0) {
      generateImageUrls();
    }
  }, [images]);

  // Univ 정보를 가져오는 useQuery
  const { isLoading, isError, data, error } = useQuery<PhotoSpot[]>({
    queryKey: ['univSpotList', selectedUniv],
    queryFn: () =>
      selectedUniv ? getUnivSpotList(selectedUniv.value) : Promise.resolve([]),
    enabled: !!selectedUniv, // selectedUniv가 null일 때는 쿼리를 비활성화
  });

  useEffect(() => {
    if (data && selectedUniv) {
      const fetchData: Option[] = data.map((e) => {
        const { spotId, spotName } = e;
        return { value: spotId, label: spotName };
      });
      setSpotData(fetchData);
    }
  }, [data, selectedUniv]);

  // Mutations
  const createPostMutation = useMutation({
    mutationFn: ({ newContent }: { newContent: PostUploading }) =>
      postNewContent(newContent),
    onSuccess: () => {
      router.push(`/photographerProfile/${photographerId}`);
    },
    onError: (err) => {
      console.error('Error creating post:', err);
    },
  });

  useEffect(() => {
    // 이미지 리스트 크기와 동일한 빈 배열 생성
    if (spotIds.includes(-1) || !selectedUniv) {
      return;
    }
    setIsComplete(true);
  }, [spotIds, selectedUniv]);

  // 대학 선택 핸들러
  const handleSelectionChange = (univData: UnivOption) => {
    setSelectedUniv(univData);
  };

  // 이미지 통 삭제
  const handleRemoveItem = (index: number) => {
    removeImage(index);
    removeSpotId(index);
  };

  // 스팟 선택 핸들러
  const handleDropdown = (index: number, spotId: number) => {
    selectSpotId(index, spotId); // 선택한 스팟 ID 추가
  };

  // 새로운 포스트 업로드
  const handleFormSubmit = (event: React.FormEvent) => {
    event?.preventDefault();

    if (selectedUniv && !spotIds.includes(-1)) {
      const postInfoData: PostInfo = {
        univId: selectedUniv.univId,
        content: textareaContent,
        spotIds,
      };

      const newContent: PostUploading = {
        postInfo: postInfoData,
        photos: images,
      };

      createPostMutation.mutate({
        newContent,
      });
    }
  };

  return (
    <div>
      <TNB.Back text="게시글 작성" />
      <Spacer />
      <Title variant="title2_sb">촬영 장소 선택</Title>
      <UnivRadioGroup options={UNIV_LIST} onChange={handleSelectionChange} />
      {/* 로딩 상태 */}
      {isLoading && <span>Loading...</span>}
      {/* 에러 처리 */}
      {isError && <span>Error: {error?.message}</span>}
      <Spacer />
      <Divider />
      <Spacer />
      <Title variant="title2_sb">포토스팟 지정</Title>

      <UploadArea>
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
        {imageUrls.length > 0 ? (
          imageUrls.map((src, index) => (
            <SelectPhotoSpot key={src}>
              <ImagePreviewItem
                key={src}
                src={src}
                alt={`Upload File[${index}]`}
                onDelete={() => handleRemoveItem(index)}
              />
              <Dropdown.Dropdown
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

      <Textarea
        // eslint-disable-next-line
        // @ts-ignore
        onChange={(e) => setTextareaContent(e.target.value)}
        placeholder="사진을 소개해주세요!"
      />

      <Spacer size="80px" />
      <ButtonBox>
        <CTAButton.Primary
          type="submit"
          text="완료하기"
          disabled={!isComplete}
          onClick={handleFormSubmit}
        />
      </ButtonBox>

      <Spacer size="60px" />
    </div>
  );
}
