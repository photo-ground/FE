'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import TNB from '@/components/TNB';
import AlertModal from '@/components/modals/AlertModal';
import CheckIcon from '@/assets/modal/CheckIcon';

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

function checkDataValid(data: SignUpData) {
  return (
    !!data.email &&
    !!data.password &&
    !!data.name &&
    !!data.phone &&
    !!data.myUniv &&
    !!data.gender &&
    data.isEmailConfirmed &&
    data.isPasswordValid &&
    data.isPasswordConfirmed
  );
}

export default function SignUpPage() {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    email: '',
    password: '',
    name: '',
    phone: '',
    isEmailConfirmed: false,
    isPasswordValid: false,
    isPasswordConfirmed: false,
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const router = useRouter();

  const onChangeEmail = (newValue: SignUpData['email']) => {
    setSignUpData({ ...signUpData, email: newValue, isEmailConfirmed: false });
  };

  const onConfirmEmail = () => {
    setSignUpData({ ...signUpData, isEmailConfirmed: true });
  };

  const onChangePassword = (newValue: SignUpData['password']) => {
    setSignUpData((prevData) => ({ ...prevData, password: newValue }));
  };

  const onCheckPassword = (ok: boolean) => {
    setSignUpData((prevData) => ({ ...prevData, isPasswordValid: ok }));
  };

  const onCheckConfirmPassword = (ok: boolean) => {
    setSignUpData({ ...signUpData, isPasswordConfirmed: ok });
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
      setIsCompleted(true);
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
            onCheckPassword={onCheckPassword}
            onCheckConfirmPassword={onCheckConfirmPassword}
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
          <CTAButton
            text="가입하기"
            onClick={onSignUp}
            disabled={!checkDataValid(signUpData)}
          />
        </ButtonWrapper>
      </div>

      {isCompleted && (
        <AlertModal
          icon={<CheckIcon />}
          title="회원가입 완료!"
          content="다양한 스냅 촬영 콘텐츠를 둘러보세요"
          onConfirm={() => {
            router.replace('/signin');
          }}
        />
      )}
    </div>
  );
}
