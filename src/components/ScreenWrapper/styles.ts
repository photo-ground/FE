import styled from 'styled-components';

export const FullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100dvh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 26rem;
  height: 100dvh;

  box-shadow: 0 1rem 2rem -1rem gray;
`;

export const Content = styled.div`
  flex: 1;
`;
