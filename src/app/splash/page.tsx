'use client';

import CTAButton from '@/components/atoms/CTAButton';
import goOnboarding from './_actions/goOnboarding';
import goSignIn from './_actions/goSignIn';
import { ButtonArea, Container } from './styles';
import Logo from '@/assets/Logo';

export default function SplashPage() {
  return (
    <Container>
      <Logo />
      <ButtonArea>
        {/* cookie 설정으로 인해 Link 대신 이벤트 핸들러를 사용합니다 */}
        <CTAButton text="둘러보기" variant="tertiary" onClick={goOnboarding} />
        <CTAButton text="로그인" onClick={goSignIn} />
      </ButtonArea>
    </Container>
  );
}
