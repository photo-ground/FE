import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 3rem; // [todo] remove this
`;

export const Tab = styled(Link)<{ $isSelected: boolean }>`
  color: ${(props) => (props.$isSelected ? 'blue' : 'black')};
`;
