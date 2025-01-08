'use client';

import {
  EmailInput,
  NameInput,
  PasswordInput,
  PhoneInput,
} from '@/app/signup/_components';
import {
  AccountSection,
  ButtonWrapper,
  DivideLine,
  UserSection,
} from '@/app/signup/styles';
import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import Spacer from '@/components/Spacer';
import TNB from '@/components/TNB';
/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #121212;
  min-height: 100vh;
  padding: 1rem;
  color: white;
`;

export default function EditProfile() {
  // const router = useRouter();
  // const { query } = router;
  const userInfo = {
    email: '12@naver.com',
    password: '12',
    phone: '01012345678',
    myUniv: '연세',
    gender: 'FEMALE',
    name: '김사진',
  };

  const updateInfo = async () => {
    // const response = await signup({ data: signUpData });
    // if (response) {
    //   router.push('signin');
    // }
  };
  return (
    <>
      <Container>
        <TNB.Back text="내 정보 수정" />
        <AccountSection>
          <Text variant="title3">계정 정보</Text>
          <EmailInput
            value={userInfo.email}
            onChange={updateInfo}
            onConfirm={updateInfo}
          />
          <PasswordInput value={userInfo.password} onChange={updateInfo} />
        </AccountSection>
        <DivideLine />

        <UserSection>
          <Text variant="title3">회원 정보</Text>

          <NameInput value={userInfo.name} onChange={updateInfo} />
          <PhoneInput value={userInfo.phone} onChange={updateInfo} />
          {/* <UnivInput value={userInfo.myUniv} onChange={updateInfo} />
        <GenderInput value={userInfo.gender} onChange={updateInfo} /> */}
        </UserSection>

        <ButtonWrapper>
          <CTAButton text="수정완료" onClick={updateInfo} />
        </ButtonWrapper>
      </Container>
      <Spacer size="32px" />
    </>
  );
}
