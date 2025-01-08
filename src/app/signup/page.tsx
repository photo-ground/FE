'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
import signup from './signup';

export default function SignUpPage() {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    email: '',
    password: '',
    name: '',
    phone: '',
    isEmailConfirmed: false,
  });
  const router = useRouter();

  const onChangeEmail = (newValue: SignUpData['email']) => {
    setSignUpData({ ...signUpData, email: newValue, isEmailConfirmed: false });
  };

  const onConfirmEmail = () => {
    setSignUpData({ ...signUpData, isEmailConfirmed: true });
  };

  const onChangePassword = (newValue: SignUpData['password']) => {
    setSignUpData({ ...signUpData, password: newValue });
  };

  const onChangeName = (newValue: SignUpData['name']) => {
    setSignUpData({ ...signUpData, name: newValue });
  };

  const onChangePhone = (newValue: SignUpData['phone']) => {
    setSignUpData({ ...signUpData, phone: newValue });
  };

  const onChangeUniv = (newValue: SignUpData['myUniv']) => {
    setSignUpData({ ...signUpData, myUniv: newValue });
  };

  const onChangeGender = (newValue: SignUpData['gender']) => {
    setSignUpData({ ...signUpData, gender: newValue });
  };

  const onSignUp = async () => {
    const response = await signup({ data: signUpData });
    if (response) {
      router.push('signin');
    }
  };

  return (
    <div>
      <TNB.Back text="일반 회원가입" />

      <div>
        <AccountSection>
          <Text variant="title3">계정 정보</Text>
          <EmailInput
            value={signUpData.email}
            onChange={onChangeEmail}
            onConfirm={onConfirmEmail}
          />
          <PasswordInput
            value={signUpData.password}
            onChange={onChangePassword}
          />
        </AccountSection>

        <DivideLine />

        <UserSection>
          <Text variant="title3">회원 정보</Text>

          <NameInput value={signUpData.name} onChange={onChangeName} />
          <PhoneInput value={signUpData.phone} onChange={onChangePhone} />
          <UnivInput value={signUpData.myUniv} onChange={onChangeUniv} />
          <GenderInput value={signUpData.gender} onChange={onChangeGender} />
        </UserSection>

        <ButtonWrapper>
          <CTAButton text="가입하기" onClick={onSignUp} />
        </ButtonWrapper>
      </div>
    </div>
  );
}
