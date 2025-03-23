'use client';

import styled from 'styled-components';

import Text from '@/components/atoms/Text';
import { convertToViewportHeight } from '@/styles/convertSize';
import { ScreenWithBottomButton } from '@/app/splash/styles';
import { AccountSection } from '@/app/signup/styles';
import { Spacer } from '@/components';
import PasswordForm from '@/components/Input/PasswordForm';
import PasswordInput from '@/components/Input/PasswordInput';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Container = styled(ScreenWithBottomButton)`
  gap: ${convertToViewportHeight(160)};
`;

const SloganArea = styled.header`
  padding: 0 1.25rem;
`;

const SloganText = styled(Text)`
  font-family: Inter;
`;

export default function SignInPage() {
  const [password, setPassword] = useState({
    password: '',
  });
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const handlePasswordMatch = (ok: boolean) => {
    setButtonDisabled(!ok);
  };

  const handlePassword = (value: string) => {
    setPassword({ password: value });
  };
  return (
    <Container>
      <SloganArea>
        <SloganText variant="title1_rg">서비스 시작을 위해</SloganText>
        <SloganText variant="title1_rg">비밀번호를 변경해주세요.</SloganText>
      </SloganArea>

      <AccountSection>
        <Text variant="title3">기존 비밀번호</Text>
        <Spacer size="1rem" />

        <PasswordInput value="123asd12!" />
        <Spacer size="3rem" />
        <Text variant="title3">새 비밀번호</Text>

        <PasswordForm
          onChange={(value) => handlePassword(value)}
          onCheckConfirmPassword={handlePasswordMatch}
          value={password.password}
        />
      </AccountSection>
    </Container>
  );
}
