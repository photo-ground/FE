import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100dvh;

  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem;
  margin-top: 0;
`;

export const IconTextLink = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const SearchWrapper = styled.div`
  margin: 0 1.25rem;
`;
