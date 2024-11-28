import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100dvh;
  padding: 40vh ${({ theme }) => theme.spacing.padding.horizontal}
    ${({ theme }) => theme.spacing.fixedButtonBottom}
    ${({ theme }) => theme.spacing.padding.horizontal};
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;
