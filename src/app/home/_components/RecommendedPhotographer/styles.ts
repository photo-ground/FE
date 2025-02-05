import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import Text from '@/components/atoms/Text';
import { COLORS } from '@/styles/theme';

const pulsing = keyframes`
  0% {
    background: ${COLORS.GRAY[500]};
  }
  50% {
    background: ${COLORS.GRAY[700]};
  }
  100% {
    background: ${COLORS.GRAY[500]};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 1rem;

  padding: 0 1.25rem;

  overflow-x: auto;
`;

export const PhotographerItem = styled(Link)`
  text-decoration: none;
  max-width: 80px; // next-image와 크기를 맞추기 위해 px을 사용합니다
`;

export const ProfileImage = styled(Image)`
  border-radius: 100%;
`;

export const ProfileImageSkeleton = styled.div`
  width: 80px; // next-image와 크기를 맞추기 위해 px을 사용합니다
  height: 80px;
  border-radius: 100%;

  background: ${({ theme }) => theme.colors.gray[500]};
  animation: ${pulsing} 2s infinite ease-in-out;
`;

export const CardTitle = styled(Text)`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[200]};
  text-align: center;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CardTitleSkeleton = styled.div`
  height: ${({ theme }) => theme.typography.body2_rg.lineHeight};
  margin-top: 0.75rem;
  border-radius: 0.125rem;

  background: ${({ theme }) => theme.colors.gray[500]};
  animation: ${pulsing} 2s infinite ease-in-out;
`;
