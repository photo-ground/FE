'use client';

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
import {
  AccountSection,
  ButtonWrapper,
  DivideLine,
  UserSection,
} from './styles';

export default function SignUpPage() {
  return (
    <div>
      <TNB.Back text="일반 회원가입" />

      <form>
        <AccountSection>
          <Text variant="title3">계정 정보</Text>
          <EmailInput />
          <PasswordInput />
        </AccountSection>

        <DivideLine />

        <UserSection>
          <Text variant="title3">회원 정보</Text>
          <NameInput />
          <PhoneInput />
          <UnivInput />
          <GenderInput />
        </UserSection>

        <ButtonWrapper>
          <CTAButton text="가입하기" disabled />
        </ButtonWrapper>
      </form>
    </div>
  );
}
