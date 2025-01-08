'use client';

import { useState } from 'react';

import EmailIcon from '@/assets/EmailIcon';
import { Input, InputContainer } from '@/styles/input';
import sendEmail from './sendEmail';
import confirmEmail from './confirmEmail';
import { SignUpData } from '../../type';
import {
  Button,
  ButtonText,
  ConfirmButton,
  Container,
  InputWrapper,
  PasskeyInputContainer,
} from './styles';

export default function EmailInput({
  value,
  onChange,
  onConfirm,
}: {
  value: SignUpData['email'];
  onChange: (newValue: SignUpData['email']) => void;
  onConfirm: () => void;
}) {
  const [isSent, setIsSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const sendMail = () => {
    sendEmail({ email: value });
    setIsSent(true);
  };

  const onClickConfirm = async () => {
    const response = await confirmEmail({ email: value, verificationCode });
    if (response) {
      onConfirm();
    }
  };

  const disableSendEmail = !(value && !isSent);

  return (
    <Container>
      <InputWrapper>
        <InputContainer>
          <EmailIcon size="1.5rem" />
          <Input
            placeholder="이메일"
            name="email"
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
            }}
            readOnly
            onFocus={(e) => e.target.removeAttribute('readOnly')}
          />
        </InputContainer>
        <Button
          type="button"
          disabled={isSent}
          onClick={sendMail}
          $disabled={disableSendEmail}
        >
          <ButtonText variant="body2_rg" $disabled={disableSendEmail}>
            인증번호 전송
          </ButtonText>
        </Button>
      </InputWrapper>

      {isSent && (
        <InputWrapper>
          <PasskeyInputContainer>
            <Input
              placeholder="인증번호"
              name="verificationCode"
              value={verificationCode}
              onChange={(event) => {
                setVerificationCode(event.target.value);
              }}
            />
            <ConfirmButton type="button" onClick={onClickConfirm}>
              확인
            </ConfirmButton>
          </PasskeyInputContainer>
          <Button type="button" onClick={sendMail}>
            <ButtonText variant="body2_rg">재전송</ButtonText>
          </Button>
        </InputWrapper>
      )}
    </Container>
  );
}
