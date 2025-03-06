import React from 'react';
import styled from 'styled-components';

const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
`;

export default function Banner() {
  return (
    <picture>
      <source
        srcSet="/images/bannerLarge.webp"
        media="(min-width: 25.1875rem)"
      />
      <source
        srcSet="/images/bannerSmall.webp"
        media="(max-width: 25.125rem)"
      />
      <ResponsiveImage src="/images/bannerSmall.webp" alt="Banner" />
    </picture>
  );
}
