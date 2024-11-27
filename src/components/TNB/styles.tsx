import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;
`;

export const BorderedHeader = styled(Header)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[600]};
`;
