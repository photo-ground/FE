'use client';

import CTAButton from '@/components/atoms/CTAButton';
import Logo from '@/assets/Logo';
import goOnboarding from './_actions/goOnboarding';
import goSignIn from './_actions/goSignIn';
import { ButtonArea, Container } from './styles';

export default function SplashPage() {
  return (
    <Container>
      <Logo />
      <ButtonArea>
        {/* cookie 설정으로 인해 Link 대신 이벤트 핸들러를 사용합니다 */}
        <CTAButton.Tertiary text="둘러보기" onClick={goOnboarding} />
        <CTAButton.Primary text="로그인" onClick={goSignIn} />
      </ButtonArea>
    </Container>
  );
}
