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
const Button = styled.button`
  background: transparent;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 0.5rem;
  outline: none;
  flex-shrink: 0;
  cursor: pointer;
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
export default function PasswordUpdate({ value }: { value: string }) {
  const route = useRouter();
  const handleUpdatePasswd = () => {
    route.push('/my/updatepw');
  };
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
          autoComplete="new-password"
        />
      </InputContainer>
      <Button onClick={() => handleUpdatePasswd()}>비밀번호 변경</Button>
    </PasswordContainer>
  );
}
