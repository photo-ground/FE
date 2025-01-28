import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import DeleteImageIcon from '@/assets/DeleteImageIcon';

const ImagePreviewContainer = styled.div`
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

interface ImagePreviewItemProps {
  src: string;
  alt: string;
  onDelete: () => void;
}

export default function ImagePreviewItem({
  src,
  alt,
  onDelete,
}: ImagePreviewItemProps) {
  return (
    <ImagePreviewContainer>
      <IconContainer onClick={onDelete}>
        <DeleteImageIcon />
      </IconContainer>
      <PreviewImage src={src} alt={alt} layout="fill" />
    </ImagePreviewContainer>
  );
}
