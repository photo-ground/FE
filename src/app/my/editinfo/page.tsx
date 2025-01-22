'use client';

import React from 'react';
import styled from 'styled-components';
import { AccountSection, DivideLine } from '@/app/signup/styles';
import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import Spacer from '@/components/Spacer';
import TNB from '@/components/TNB';
import {
  EmailInput,
  GenderInput,
  NameInput,
  PasswordUpdate,
  PhoneInput,
  UnivInput,
} from '@/app/my/_component';
import RightChevronIcon from '@/assets/RightChevronIcon';
/* eslint-disable jsx-a11y/label-has-associated-control */
const ButtonWrapper = styled.div`
  padding: 0 1.25rem;
`;
export const UserSection = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
const Container = styled.div`
  background-color: #121212;
  min-height: 100vh;
  padding: 1rem;
  color: white;
`;
const LeaveButton = styled.div`
  color: ${({ theme }) => theme.colors.gray[300]};
  display: flex;
  // justify-content: center;
  // text-align: center;
  // all: unset;
  padding: 12px 1.25rem;
`;
export default function EditProfile() {
  // const router = useRouter();
  // const { query } = router;
  const userInfo = {
    id: 1,
    name: '문서영',
    email: 'fhflwhwl5@naver.com',
    phone: '010-1234-5678',
    gender: 'FEMALE',
    univ: '이화여자대학교',
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
          <EmailInput value={userInfo.email} onChange={updateInfo} />
          <PasswordUpdate value="888888!a" />
        </AccountSection>
        <DivideLine />

        <UserSection>
          <Text variant="title3">회원 정보</Text>

          <NameInput value={userInfo.name} onChange={updateInfo} />
          <PhoneInput value={userInfo.phone} onChange={updateInfo} />
          <UnivInput value={userInfo.univ} onChange={updateInfo} />
          <GenderInput value={userInfo.gender} onChange={updateInfo} />
        </UserSection>
        <DivideLine />
        <LeaveButton>
          <Text variant="body2_rg" color="#8C8C8C">
            탈퇴하기
          </Text>
          <RightChevronIcon size="24px" color="#8C8C8C" />
        </LeaveButton>
        <Spacer size="32px" />

        <ButtonWrapper>
          <CTAButton text="수정완료" onClick={updateInfo} />
        </ButtonWrapper>
      </Container>

      <Spacer size="32px" />
    </>
  );
}
