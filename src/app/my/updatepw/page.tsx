'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import { AccountSection } from '@/app/signup/styles';
import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import Spacer from '@/components/Spacer';
import TNB from '@/components/TNB';
import CheckIcon from '@/assets/modal/CheckIcon';
import AlertModal from '@/components/modals/AlertModal';
import { useMutation } from '@tanstack/react-query';
import { PasswordInput, PasswordForm } from '@/app/my/_component';

import { updateUserPassword } from '../_libs/getUserInfo';
/* eslint-disable jsx-a11y/label-has-associated-control */
const ButtonWrapper = styled.div`
  padding: 0 1.25rem;
  position: fixed;
  width: 100%;
  bottom: 2rem;
  max-width: 520px;
`;

const Container = styled.div`
  min-height: 100vh;
`;

export default function UpdatePassword() {
  const [password, setPassword] = useState({
    password: '',
  });
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const updateUserMutation = useMutation({
    mutationKey: ['updateUserInfo'],
    mutationFn: updateUserPassword,
    onSuccess: () => {
      // console.log(data);
      setModalOpen(true);
    },
  });
  const updateInfo = async () => {
    updateUserMutation.mutate(password);
  };

  const handlePasswordMatch = (ok: boolean) => {
    setButtonDisabled(!ok);
  };

  const handlePassword = (value: string) => {
    setPassword({ password: value });
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

          <PasswordForm
            onChange={(value) => handlePassword(value)}
            onCheckConfirmPassword={handlePasswordMatch}
            value={password.password}
          />
        </AccountSection>

        <Spacer size="32px" />

        <ButtonWrapper>
          <CTAButton.Primary
            disabled={buttonDisabled}
            text="확인"
            onClick={updateInfo}
          />
        </ButtonWrapper>
      </Container>

      <Spacer size="32px" />

      {modalOpen && (
        <AlertModal
          icon={<CheckIcon />}
          title="내 정보 수정 완료!"
          content="변경해주신 회원정보를 반영했어요"
          confirmText="확인"
          onConfirm={() => {
            setModalOpen(false);
            router.replace('/my/editinfo');
          }}
        />
      )}
    </>
  );
}
