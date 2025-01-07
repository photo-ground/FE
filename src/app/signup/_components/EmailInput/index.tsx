'use client';

import { useState } from 'react';
import styled from 'styled-components';

import EmailIcon from '@/assets/EmailIcon';
import Text from '@/components/atoms/Text';
import { Input, InputContainer } from '@/styles/input';
import sendEmail from './sendEmail';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 7.125rem;
  gap: 0.75rem;
  width: 100%;
`;

const PasskeyInputContainer = styled(InputContainer)`
  padding: 0;
  padding-left: 0.5rem;
`;

const ConfirmButton = styled.button`
  height: 100%;
  padding: 0 1rem;
  background: transparent;
  white-space: nowrap;

  border: none;
  border-left: 1px solid ${({ theme }) => theme.colors.gray[600]};
  outline: none;
`;

const Button = styled.button<{ $disabled?: boolean }>`
  background: transparent;
  padding: 0.5rem 0;
  white-space: nowrap;

  border: 1px solid
    ${({ theme, $disabled }) => theme.colors.gray[$disabled ? 600 : 200]};
  border-radius: 0.5rem;
  outline: none;
`;

const ButtonText = styled(Text)<{ $disabled?: boolean }>`
  color: ${({ theme, $disabled }) => theme.colors.gray[$disabled ? 600 : 200]};
`;

export default function EmailInput() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const sendMail = async () => {
    sendEmail({ email });
    setIsSent(true);
  };

  return (
    <Container>
      <InputWrapper>
        <InputContainer>
          <EmailIcon size="1.5rem" />
          <Input
            placeholder="이메일"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </InputContainer>
        <Button
          type="button"
          disabled={isSent}
          onClick={sendMail}
          $disabled={isSent}
        >
          <ButtonText variant="body2_rg" $disabled={isSent}>
            인증번호 전송
          </ButtonText>
        </Button>
      </InputWrapper>

      {isSent && (
        <InputWrapper>
          <PasskeyInputContainer>
            <Input placeholder="인증번호" name="email-key" />

            <ConfirmButton type="button">확인</ConfirmButton>
          </PasskeyInputContainer>
          <Button type="button" onClick={sendMail}>
            <ButtonText variant="body2_rg">재전송</ButtonText>
          </Button>
        </InputWrapper>
      )}
    </Container>
  );
}
