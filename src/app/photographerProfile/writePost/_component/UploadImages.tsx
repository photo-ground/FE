import AddImageIcon from '@/assets/AddImageIcon';
import DeleteImageIcon from '@/assets/DeleteImageIcon';
import Text from '@/components/atoms/Text';
import useImageStore from '@/store/useImageStore';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

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

const ImagePreviewItem = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  width: 100%;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  cursor: pointer;
  z-index: 9;
`;

const PreviewImage = styled(Image)`
  object-fit: cover;
  border-radius: 2px;
`;
export default function UploadImages() {
  const { images, addImage, removeImage } = useImageStore();

  const addImageFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    if (images.length + selectedFiles.length > 9) {
      alert('이미지는 최대 9장까지 업로드할 수 있습니다.');
      return;
    }

    // 각 파일에 대해 FileReader 생성
    const fileReaders = Array.from(selectedFiles).map(
      (file) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            if (reader.result) resolve(reader.result as string);
          };
          reader.onerror = () => reject(new Error('파일 읽기 실패'));
          reader.readAsDataURL(file);
        }),
    );

    console.log(fileReaders);
    try {
      // 모든 파일을 읽은 후 상태 업데이트
      const results = await Promise.all(fileReaders);
      results.forEach((result) => addImage(result)); // Zustand 상태에 추가
    } catch (error) {
      console.error('이미지 파일 읽기 중 오류 발생:', error);
    }
  };

  // // X버튼 클릭 시 이미지 삭제
  // const removeImageFile = (idx: number) => {
  //   setImageFiles(imageFiles.filter((e, i) => i !== idx));
  // };
  return (
    <form>
      <Title>
        <Text variant="title2_sb">선택한 이미지</Text>
        <Text variant="caption1_rg" color="#a6a6a6">
          최대 9장
        </Text>
      </Title>
      <UploadArea>
        {images.map((e, i) => (
          <ImagePreviewItem key={e}>
            <IconContainer onClick={() => removeImage(i)}>
              <DeleteImageIcon />
            </IconContainer>
            <PreviewImage src={e} alt={`Upload File[${i}]`} layout="fill" />
          </ImagePreviewItem>
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
