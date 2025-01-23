'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { AccountSection, DivideLine } from '@/app/signup/styles';
import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import Spacer from '@/components/Spacer';
import TNB from '@/components/TNB';
import { PasswordInput, PasswordForm } from '@/app/my/_component';
import Modal from '../_component/Modal';
/* eslint-disable jsx-a11y/label-has-associated-control */
const ButtonWrapper = styled.div`
  padding: 0 1.25rem;
  position: fixed;
  width: 100%;
  bottom: 2rem;
`;
export const UserSection = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
const Container = styled.div`
  min-height: 100vh;
`;

export default function UpdatePassword() {
  const [password, setPassword] = useState('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const router = useRouter();

  const updateInfo = async () => {
    // const response = await signup({ data: signUpData });
    // if (response) {
    //   router.push('signin');
    // }
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };
  return (
    <>
      <Container>
        <TNB.Back text="비밀번호 변경" />
        <AccountSection>
          <Text variant="title3">기존 비밀번호</Text>
          <Spacer size="16px" />

          <PasswordInput value="123asd12!" />
          <Spacer size="48px" />
          <Text variant="title3">새 비밀번호</Text>
          {/* <Spacer size="16px" /> */}

          <PasswordForm
            onChange={(value) => handlePassword(value)}
            value={password}
          />
        </AccountSection>

        <Spacer size="32px" />

        <ButtonWrapper>
          <CTAButton disabled={isCompleted} text="확인" onClick={updateInfo} />
        </ButtonWrapper>
      </Container>

      <Spacer size="32px" />

      {isCompleted && (
        <Modal
          onClose={() => {
            router.replace('/my/editinfo');
          }}
        />
      )}
    </>
  );
}
