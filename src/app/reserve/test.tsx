import styled from 'styled-components';

import Text from '@/components/atoms/Text';
import Background from '@/components/Background';
import TNB from '@/components/TNB';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100dvh;
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
      <Background type={3} />
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
