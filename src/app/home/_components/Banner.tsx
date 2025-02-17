import React from 'react';
import styled from 'styled-components';

const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
`;

export default function Banner() {
  return (
    <picture>
      <source srcSet="/images/bannerLarge.webp" media="(min-width: 403px)" />
      <source srcSet="/images/bannerSmall.webp" media="(max-width: 402px)" />
      <ResponsiveImage src="/images/bannerSmall.webp" alt="Banner" />
    </picture>
  );
}
