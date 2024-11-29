import styled from 'styled-components';
import EmailIcon from '@/assets/EmailIcon';
import PasswordIcon from '@/assets/PasswordIcon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;
`;

const Input = styled.input`
  flex: 1;

  background: transparent;
  border: none;
  outline: none;

  font-size: ${({ theme }) => theme.typography.body2_rg.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2_rg.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2_rg.lineHeight};
  color: ${({ theme }) => theme.colors.white};
`;

export default function InputList() {
  return (
    <Container>
      <InputContainer>
        <EmailIcon size="1.25rem" />
        <Input placeholder="이메일" />
      </InputContainer>
      <InputContainer>
        <PasswordIcon size="1.25rem" />
        <Input type="password" placeholder="비밀번호" />
      </InputContainer>
    </Container>
  );
}
