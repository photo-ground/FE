'use client';

import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import TNB from '@/components/TNB';
import {
  AccountSection,
  ButtonWrapper,
  DivideLine,
  UserSection,
} from './styles';
import EmailInput from './EmailInput';

export default function SignUpPage() {
  return (
    <div>
      <TNB.Back text="일반 회원가입" />

      <form>
        <AccountSection>
          <Text variant="title3">계정 정보</Text>
          <EmailInput />
        </AccountSection>

        <DivideLine />

        <UserSection>
          <Text variant="title3">회원 정보</Text>
        </UserSection>

        <ButtonWrapper>
          <CTAButton text="가입하기" disabled />
        </ButtonWrapper>
      </form>
    </div>
  );
}
