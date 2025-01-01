import React from 'react';
import styled from 'styled-components';

export interface BannerProps {
  /** How large should the Banner be? */
  size?: 'small' | 'medium' | 'large';
  /** What Banner image to use */
  src: string;
  /** Optional click handler */
  onClick?: () => void;
}

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const BannerImage = styled.img`
  object-fit: cover;
  height: 140px;
`;

export default function Banner({ size, src, onClick }: BannerProps) {
  return (
    <BannerWrapper onClick={onClick} className={`Banner ${size}`}>
      <BannerImage src={src} />
    </BannerWrapper>
  );
}
