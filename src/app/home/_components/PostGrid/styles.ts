import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Text from '@/components/atoms/Text';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 0.625rem;

  margin: 0 1.25rem;
`;

export const CardWrapper = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
`;

export const PostImage = styled(Image)`
  object-fit: cover;
  border-radius: 0.125rem;
`;

export const PhotographerName = styled(Text)`
  margin-top: 0.5rem;
`;

export const SpotName = styled(Text)`
  margin-top: 0.125rem;
  color: ${({ theme }) => theme.colors.gray[200]};
`;
