'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';
import Text from '../Text';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;

  padding: 0.375rem 1rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border: none;
  outline: none;
  border-radius: 1.5rem;
`;

const SecondaryContainer = styled(Container)`
  background: ${({ theme }) => theme.colors.gray[100]};
`;

const TertiaryContainer = styled(Container)`
  background: ${({ theme }) => theme.colors.background.primary};
`;

const PrimaryText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

const SecondaryText = styled(Text)`
  color: ${({ theme }) => theme.colors.background};
`;

const TertiaryText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
`;

const BrandText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary[500]};
`;

export default function Chip({
  type = 'primary',
  icon,
  text,
}: {
  type?: 'primary' | 'secondary' | 'tertiary' | 'brand';
  icon: ({ color }: { color: string }) => ReactNode;
  text: string;
}) {
  if (type === 'primary') {
    return (
      <Container>
        {icon({ color: '#A6A6A6' })}
        <PrimaryText variant="body2_rg">{text}</PrimaryText>
      </Container>
    );
  }

  if (type === 'secondary') {
    return (
      <SecondaryContainer>
        {icon({ color: '#0E0E0E' })}
        <SecondaryText variant="body2_rg">{text}</SecondaryText>
      </SecondaryContainer>
    );
  }

  if (type === 'tertiary') {
    return (
      <TertiaryContainer>
        {icon({ color: '#F5F5F5' })}
        <TertiaryText variant="body2_rg">{text}</TertiaryText>
      </TertiaryContainer>
    );
  }

  return (
    <Container>
      {icon({ color: '#FF4F15' })}
      <BrandText variant="body2_rg">{text}</BrandText>
    </Container>
  );
}
