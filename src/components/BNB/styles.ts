import Link from 'next/link';
import styled from 'styled-components';
import Text from '../atoms/Text';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 1.25rem;
  background: #0e0e0ecc;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};
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
