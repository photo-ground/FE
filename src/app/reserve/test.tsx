import Text from '@/components/atoms/Text';
import TNB from '@/components/TNB';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100dvh;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const TextArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30%;

  text-align: center;
`;

const BottomText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function TemporaryScreen() {
  return (
    <Container>
      <Background src="/images/background3.webp" alt="background" />
      <TNB.Back text="예약관리" />

      <TextArea>
        <Text variant="title1_sb">화면 준비 중</Text>

        <BottomText variant="body3">
          조금만 더 기다려주세요
          <br />
          빠른 시일 내에 더 나은 서비스로 돌아올게요
        </BottomText>
      </TextArea>
    </Container>
  );
}
