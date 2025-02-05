import styled from 'styled-components';
import BREAK_POINT from '@/styles/constants';
import Text from '../atoms/Text';

export const Container = styled.nav`
  position: fixed;
  bottom: 0;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: space-around;

  width: 100%;
  max-width: ${BREAK_POINT}px;
  padding: 1rem 1.25rem;
  background: #0e0e0ecc;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};

  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);

  z-index: 20;
`;

export const Tab = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  background: transparent;
  border: none;
  outline: none;

  cursor: pointer;
`;

export const TabText = styled(Text)<{ $isSelected: boolean }>`
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary[100] : theme.colors.gray[300]};
`;
