import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;
`;

export const Input = styled.input`
  flex: 1;

  background: transparent;
  border: none;
  outline: none;

  font-size: ${({ theme }) => theme.typography.body2_rg.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2_rg.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2_rg.lineHeight};
  color: ${({ theme }) => theme.colors.white};
`;
