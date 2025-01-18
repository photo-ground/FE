'use client';

import { useEffect, useState } from 'react';

import EmailIcon from '@/assets/EmailIcon';
import Text from '@/components/atoms/Text';
import { Input, InputContainer } from '@/styles/input';
import sendEmail from './sendEmail';
import confirmEmail from './confirmEmail';
import { SignUpData } from '../../type';
import {
  Button,
  ButtonText,
  ConfirmButton,
  Container,
  ErrorMessage,
  InputAreaWrapper,
  InputWrapper,
  PasskeyInputContainer,
  SuccessText,
} from './styles';
import checkEmail from './checkEmail';

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

const VERIFICATION_TIME = 10 * 60; // 10분

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
  const [emailErrorCode, setEmailErrorCode] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState(VERIFICATION_TIME);
  const [verificationErrorCode, setVerificationErrorCode] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (!startTime) {
      return undefined;
    }

    const timer = setInterval(() => {
      const now = new Date();
      const diffInSeconds = Math.floor(
        (now.getTime() - startTime.getTime()) / 1000,
      );
      setTimeLeft(Math.max(VERIFICATION_TIME - diffInSeconds, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  const sendMail = async () => {
    if (!checkEmail(value)) {
      setEmailErrorCode('INVALID_EMAIL');
      return;
    }

    setIsSent(true);
    setEmailErrorCode(null);

    const response = await sendEmail({ email: value });
    if (response.ok) {
      setStartTime(new Date());
      return;
    }

    if (response.code === 'EMAIL_ALREADY_EXISTS') {
      setEmailErrorCode(response.code);
      setIsSent(false);
      return;
    }

    setEmailErrorCode('SERVER_ERROR');
    setIsSent(false);
  };

  const onClickConfirm = async () => {
    const response = await confirmEmail({ email: value, verificationCode });

    if (response.ok) {
      onConfirm();
      setVerificationErrorCode('');
      setIsConfirmed(true);
      setStartTime(null);
    } else {
      setVerificationErrorCode('ERROR');
    }
  };

  const disableSendEmail = !(value && !isSent);

  return (
    <Container>
      <InputAreaWrapper>
        <InputWrapper>
          <InputContainer $isError={!!emailErrorCode}>
            <EmailIcon size="1.5rem" />
            <Input
              placeholder="이메일"
              name="email"
              value={value}
              onChange={(event) => {
                onChange(event.target.value);
                setIsSent(false);
              }}
            />
          </InputContainer>
          <Button
            type="button"
            disabled={isSent}
            onClick={sendMail}
            $disabled={disableSendEmail}
          >
            <ButtonText variant="body2_rg" $disabled={disableSendEmail}>
              {isSent ? formatTime(timeLeft) : '인증번호 전송'}
            </ButtonText>
          </Button>
        </InputWrapper>
        {emailErrorCode === 'INVALID_EMAIL' && (
          <ErrorMessage variant="caption1_rg">
            부적절한 이메일 형식입니다
          </ErrorMessage>
        )}
        {emailErrorCode === 'EMAIL_ALREADY_EXISTS' && (
          <ErrorMessage variant="caption1_rg">
            동일한 이메일 계정이 존재합니다
          </ErrorMessage>
        )}
        {emailErrorCode === 'SERVER_ERROR' && (
          <ErrorMessage variant="caption1_rg">
            서버 에러가 발생했습니다
          </ErrorMessage>
        )}
      </InputAreaWrapper>

      {isSent && (
        <InputAreaWrapper>
          <InputWrapper>
            <PasskeyInputContainer $isError={!!verificationErrorCode}>
              <Input
                placeholder="인증번호"
                name="verificationCode"
                value={verificationCode}
                onChange={(event) => {
                  setVerificationCode(event.target.value);
                }}
              />
              <ConfirmButton
                type="button"
                onClick={onClickConfirm}
                $isError={!!verificationErrorCode}
              >
                <Text variant="body2_rg">확인</Text>
              </ConfirmButton>
            </PasskeyInputContainer>
            {isConfirmed ? (
              <Button type="button" $disabled>
                <SuccessText variant="body2_rg">인증성공</SuccessText>
              </Button>
            ) : (
              <Button type="button" onClick={sendMail}>
                <ButtonText variant="body2_rg">재전송</ButtonText>
              </Button>
            )}
          </InputWrapper>

          {verificationErrorCode === 'ERROR' && (
            <ErrorMessage variant="caption1_rg">
              인증번호가 일치하지 않습니다
            </ErrorMessage>
          )}
        </InputAreaWrapper>
      )}
    </Container>
  );
}
