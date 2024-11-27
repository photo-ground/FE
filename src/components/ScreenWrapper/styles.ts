import styled from 'styled-components';

export const FullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100dvh;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 768px;
  height: 100dvh;
`;

export const Content = styled.div`
  flex: 1;
`;
