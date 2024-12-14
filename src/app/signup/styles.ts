import styled from 'styled-components';

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
  padding: 0 1.25rem;
`;

export const DivideLine = styled.hr`
  border-color: ${({ theme }) => theme.colors.gray[800]};
`;
