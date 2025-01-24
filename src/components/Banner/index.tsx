import React from 'react';
import styled from 'styled-components';

export interface BannerProps {
  /** How large should the Banner be? */
  size?: 'small' | 'medium' | 'large';
  /** Optional click handler */
  onClick?: () => void;
  /** Children content or fallback for the banner */
  children?: React.ReactNode;
}

const BannerWrapper = styled.div`
  @media (max-width: 402px) {
    background-image: url('/images/banner~402.jpg');
    min-height: 120px;
  }
  @media (min-width: 403px) {
    background-image: url('/images/banner403~520.jpg');
    min-height: 140px;
  }
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
`;

const BannerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 1rem;
`;

export default function Banner({ size, onClick, children }: BannerProps) {
  return (
    <BannerWrapper onClick={onClick} className={`Banner ${size}`}>
      {/* <BannerImage src="/images/banner403~520.jpg" /> */}
      {children && <BannerContent>{children}</BannerContent>}
    </BannerWrapper>
  );
}
