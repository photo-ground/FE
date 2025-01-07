'use client';

import { useState } from 'react';
import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import TNB from '@/components/TNB';
import {
  EmailInput,
  GenderInput,
  NameInput,
  PasswordInput,
  PhoneInput,
  UnivInput,
} from './_components';
import { SignUpData } from './type';
import {
  AccountSection,
  ButtonWrapper,
  DivideLine,
  UserSection,
} from './styles';

export default function SignUpPage() {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    email: '',
    isEmailConfirmed: false,
  });

  const onChangeEmail = (newValue: SignUpData['email']) => {
    setSignUpData({ ...signUpData, email: newValue, isEmailConfirmed: false });
  };

  const onConfirmEmail = () => {
    setSignUpData({ ...signUpData, isEmailConfirmed: true });
  };

  // const onChangePassword = (newValue: string) => {
  //   setSignUpData({ ...signUpData, password: newValue });
  // };

  // const onChangeName = (newValue: string) => {
  //   setSignUpData({ ...signUpData, name: newValue });
  // };

  // const onChangePhone = (newValue: string) => {
  //   setSignUpData({ ...signUpData, phone: newValue });
  // };

  // const onChangeUniv = (newValue: string) => {
  //   setSignUpData({ ...signUpData, myUniv: newValue });
  // };

  // const onChangeGender = (newValue: string) => {
  //   setSignUpData({ ...signUpData, gender: newValue });
  // };

  return (
    <div>
      <TNB.Back text="일반 회원가입" />

      <form>
        <AccountSection>
          <Text variant="title3">계정 정보</Text>
          <EmailInput
            value={signUpData.email}
            onChange={onChangeEmail}
            onConfirm={onConfirmEmail}
          />
          <PasswordInput />
          {/* <PasswordInput
            value={signUpData.password}
            onChange={onChangePassword}
          /> */}
        </AccountSection>

        <DivideLine />

        <UserSection>
          <Text variant="title3">회원 정보</Text>
          <NameInput />
          <PhoneInput />
          <UnivInput />
          <GenderInput />
          {/* <NameInput value={signUpData.name} onChange={onChangeName} />
          <PhoneInput value={signUpData.phone} onChange={onChangePhone} />
          <UnivInput value={signUpData.myUniv} onChange={onChangeUniv} />
          <GenderInput value={signUpData.gender} onChange={onChangeGender} /> */}
        </UserSection>

        <ButtonWrapper>
          <CTAButton text="가입하기" disabled />
        </ButtonWrapper>
      </form>
    </div>
  );
}
