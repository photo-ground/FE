import Link from 'next/link';
import styled from 'styled-components';
import Text from '../atoms/Text';
import BREAK_POINT from '@/styles/constants';

export const Container = styled.nav`
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: ${BREAK_POINT}px;
  padding: 1rem 1.25rem;
  background: #0e0e0ecc;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};
  backdrop-filter: blur(25px);
`;

export const Tab = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  text-decoration: none;
`;

export const TabText = styled(Text)<{ $isSelected: boolean }>`
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary[100] : theme.colors.gray[300]};
`;
