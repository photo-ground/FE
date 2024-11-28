'use client';

import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import { ButtonArea, Container } from './styles';
import goOnboarding from './_actions/goOnboarding';
import goSignIn from './_actions/goSignIn';

export default function SplashPage() {
  return (
    <Container>
      <Text variant="header1">Photo Ground</Text>

      <ButtonArea>
        {/* cookie 설정으로 인해 Link 대신 이벤트 핸들러를 사용합니다 */}
        <CTAButton text="둘러보기" variant="secondary" onClick={goOnboarding} />
        <CTAButton text="로그인" onClick={goSignIn} />
      </ButtonArea>
    </Container>
  );
}
