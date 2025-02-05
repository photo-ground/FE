import React from 'react';
import styled from 'styled-components';

const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
`;

export default function Banner() {
  return (
    <ResponsiveImage
      src="/images/bannerSmall.webp"
      srcSet="/images/bannerSmall.webp 402w, 
              /images/bannerLarge.webp 520w"
      alt="Banner"
    />
  );
}
