import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import { InputContainer } from '@/styles/input';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const InputAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 7.125rem;
  gap: 0.75rem;
  width: 100%;
`;

export const ErrorMessage = styled(Text)`
  color: ${({ theme }) => theme.colors.negative[500]};
  margin-left: 1rem;
`;

export const PasskeyInputContainer = styled(InputContainer)`
  padding: 0;
  padding-left: 0.5rem;
`;

export const ConfirmButton = styled.button<{ $isError?: boolean }>`
  height: 100%;
  padding: calc(0.5rem + 1px) 1rem;
  background: transparent;
  white-space: nowrap;

  border: none;

  border-left: 1px solid
    ${({ theme, $isError }) =>
      $isError ? theme.colors.negative[500] : theme.colors.gray[700]};
  outline: none;

  cursor: pointer;
`;

export const Button = styled.button<{ $disabled?: boolean }>`
  background: transparent;
  padding: 0.5rem 0;
  white-space: nowrap;

  border: 1px solid
    ${({ theme, $disabled }) => theme.colors.gray[$disabled ? 600 : 200]};
  border-radius: 0.5rem;
  outline: none;

  cursor: ${({ $disabled }) => ($disabled ? 'auto' : 'pointer')};
`;

export const ButtonText = styled(Text)<{ $disabled?: boolean }>`
  color: ${({ theme, $disabled }) => theme.colors.gray[$disabled ? 600 : 200]};
`;

export const SuccessText = styled(Text)<{ $disabled?: boolean }>`
  color: ${({ theme }) => theme.colors.positive[500]};
`;
