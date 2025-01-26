import AddImageIcon from '@/assets/AddImageIcon';
import Text from '@/components/atoms/Text';
import useImageStore from '@/store/useImageStore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImagePreviewItem from '../../../_components/ImagePreviewItem';

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  margin-bottom: 0;
`;

const UploadArea = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: inherit;
  gap: 8px;
`;

const AddImage = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  aspect-ratio: 1/1;
  padding: 0;
  border: 0;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  border-radius: 2px;
`;

export default function UploadImages() {
  const { images, addImage, removeImage } = useImageStore();
  // 이미지 : File[] -> base64로 변환
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const addImageFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const newFiles = Array.from(selectedFiles);

    if (images.length + newFiles.length > 9) {
      alert('이미지는 최대 9장까지 업로드할 수 있습니다.');
      return;
    }

    newFiles.forEach((file) => addImage(file)); // File 객체를 상태에 추가
  };

  useEffect(() => {
    // File[]을 base64 URL로 변환
    const generateImageUrls = async () => {
      const urls = await Promise.all(
        images.map((file) => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.result) {
                resolve(reader.result as string);
              }
            };
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
          });
        }),
      );
      setImageUrls(urls);
    };

    if (images.length > 0) {
      generateImageUrls();
    }
  }, [images]);

  return (
    <form>
      <Title>
        <Text variant="title2_sb">선택한 이미지</Text>
        <Text variant="caption1_rg" color="#a6a6a6">
          최대 9장
        </Text>
      </Title>
      <UploadArea>
        {imageUrls.map((src, index) => (
          <ImagePreviewItem
            key={src}
            src={src}
            alt={`Upload File[${index}]`}
            onDelete={() => removeImage(index)}
          />
        ))}
        {images.length < 9 && (
          <AddImage htmlFor="input-file">
            <input
              style={{ display: 'none' }}
              type="file"
              accept=".png, .jpeg, .jpg"
              id="input-file"
              multiple
              onChange={addImageFile}
            />
            <AddImageIcon />
          </AddImage>
        )}
      </UploadArea>
    </form>
  );
}
