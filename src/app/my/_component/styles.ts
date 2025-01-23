import styled from 'styled-components';

export const InputAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
const Section = styled.section`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`;

export const AccountSection = styled(Section)`
  padding-top: 2.5rem;
  padding-bottom: 3rem;
`;

export const UserSection = styled(Section)`
  padding-top: 3rem;
  padding-bottom: 4rem;
`;

export const ButtonWrapper = styled.div`
  padding: 0 1.25rem 1rem 1.25rem;
`;

export const DivideLine = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;
