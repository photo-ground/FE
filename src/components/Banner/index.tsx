import React from 'react';
import styled from 'styled-components';

export interface BannerProps {
  /** How large should the Banner be? */
  size?: 'small' | 'medium' | 'large';
  /** What Banner image to use */
  src?: string;
  /** Optional click handler */
  onClick?: () => void;
  children?: React.ReactNode;
}

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: 120px;
`;

const BannerImage = styled.img`
  object-fit: cover;
  height: 120px;
`;

// 이미지나 ReactNode타입의 children 중에 하나가 무조건 들어가야 한다.
export default function Banner({ size, src, onClick, children }: BannerProps) {
  return (
    <BannerWrapper onClick={onClick} className={`Banner ${size}`}>
      {src ? <BannerImage src={src} /> : children}
    </BannerWrapper>
  );
}
