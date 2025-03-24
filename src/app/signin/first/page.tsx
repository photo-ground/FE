'use client';

import styled from 'styled-components';
import axios from 'axios';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import Text from '@/components/atoms/Text';
import { convertToViewportHeight } from '@/styles/convertSize';
import { ScreenWithBottomButton } from '@/app/splash/styles';
import { Spacer } from '@/components';
import PasswordForm from '@/components/Input/PasswordForm';
import PasswordInput from '@/components/Input/PasswordInput';
import CTAButton from '@/components/atoms/CTAButton';
import ConfirmModal from '@/components/modals/ConfirmModal';
import { useMutation } from '@tanstack/react-query';
import CheckIcon from '@/assets/modal/CheckIcon';
import LoadingPage from '@/components/LoadingPage';
import updatePhotographerPassword from './updatePhotographerPassword';
// import signin, { SigninResponse } from '../signin';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  // margin-top: ${convertToViewportHeight(48)};
`;
const Container = styled(ScreenWithBottomButton)`
  gap: ${convertToViewportHeight(160)};
`;

const SloganArea = styled.header`
  padding: 0 1.25rem;
`;

const SloganText = styled(Text)`
  font-family: Inter;
`;

const PasswordFormWrapper = styled.div`
  width: 100%;
  padding: 0 1.5rem;
`;

export default function SignInPage() {
  const [password, setPassword] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   // Show loading state
  if (isLoading) {
    return <LoadingPage />;
  }
  // }, [isLoading]);

  // 비밀번호 변경 요청 함수
  const updateUserMutation = useMutation({
    mutationKey: ['updateUserInfo'],
    mutationFn: updatePhotographerPassword,
    onSuccess: () => {
      setModalOpen(true);
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        // 에러 메시지가 존재하는 경우
        alert(error.response.data.message || '알 수 없는 에러가 발생했습니다.');
      } else {
        // 에러 메시지가 없는 경우
        alert('네트워크 에러가 발생했습니다. 다시 시도해주세요.');
      }
    },
  });

  // 비밀번호 변경 함수 호출
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateUserMutation.mutate(password);
  };

  const handlePasswordMatch = (ok: boolean) => {
    setButtonDisabled(!ok);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };
  return (
    <Container>
      <SloganArea>
        <SloganText variant="title1_rg">서비스 시작을 위해</SloganText>
        <SloganText variant="title1_rg">비밀번호를 변경해주세요.</SloganText>
      </SloganArea>
      <Form onSubmit={handleSubmit}>
        <PasswordFormWrapper>
          <Text variant="title3">기존 비밀번호</Text>
          <Spacer size="1rem" />

          <PasswordInput value="123asd12!" />
          <Spacer size="3rem" />
          <Text variant="title3">새 비밀번호</Text>

          <PasswordForm
            onChange={(value) => handlePassword(value)}
            onCheckConfirmPassword={handlePasswordMatch}
            value={password}
          />
        </PasswordFormWrapper>
        <CTAButton.Primary
          type="submit"
          disabled={buttonDisabled}
          text="확인"
        />
      </Form>
      {modalOpen && (
        <ConfirmModal
          icon={<CheckIcon />}
          title="비밀번호 변경 완료!"
          content="홈으로 이동합니다"
          confirmText="확인"
          onCancel={() => {
            setModalOpen(false);
          }}
          onConfirm={() => {
            setIsLoading(true);
            router.replace('/home');
            setModalOpen(false);
            setIsLoading(false);
          }}
        />
      )}
    </Container>
  );
}
