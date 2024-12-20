import Text from '@/components/atoms/Text';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  background: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

export default function Message() {
  return (
    <Container>
      <Text variant="title3">요청 사항</Text>
      <Text variant="body3">
        보정 진짜 진짜 열심히 해주세요. 제가 거북목이 있어서 이 점 신경써주시면
        감사하겠습니다.
      </Text>
    </Container>
  );
}
