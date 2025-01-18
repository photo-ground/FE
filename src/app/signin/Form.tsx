import { FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import { convertToViewportHeight } from '@/styles/convertSize';
import InputList from './InputList';
import signin from './signin';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  margin-top: ${convertToViewportHeight(48)};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 1.25rem;
`;

const StyledLink = styled(Link)`
  width: fit-content;
  text-decoration-color: ${({ theme }) => theme.colors.gray[300]};
`;
const SignUpText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[300]};
  margin-top: ${convertToViewportHeight(24)};
`;

export default function SignInForm() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    try {
      await signin(formData);
      router.push('/home');
    } catch {
      alert('로그인 정보를 다시 확인해주세요');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <InputList />

        <StyledLink href="/signup">
          <SignUpText variant="caption1_rg">회원가입</SignUpText>
        </StyledLink>
      </Wrapper>

      <CTAButton text="로그인" type="submit" />
    </Form>
  );
}
