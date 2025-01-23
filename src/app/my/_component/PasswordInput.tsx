import PasswordIcon from '@/assets/PasswordIcon';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: fit-content;
  font-size: ${({ theme }) => theme.typography.body2_rg.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2_rg.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2_rg.lineHeight};
  color: ${({ theme }) => theme.colors.gray[400]};
  width: 50px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border: 1px solid transparent;
  border-radius: 0.5rem;
`;

const PasswordContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;
export default function PasswordInput({ value }: { value: string }) {
  return (
    <PasswordContainer>
      <InputContainer>
        <PasswordIcon size="1.5rem" />
        <Input
          disabled
          placeholder="비밀번호"
          name="password"
          type="password"
          value={value}
          autoComplete="old-password"
        />
      </InputContainer>
    </PasswordContainer>
  );
}
