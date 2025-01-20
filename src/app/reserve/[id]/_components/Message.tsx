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

export default function Message({ message }: { message: string }) {
  return (
    <Container>
      <Text variant="title3">요청 사항</Text>
      <Text variant="body3">
        {message
          .split('\n')
          .map((line) =>
            line ? (
              <span key={line}>{line}</span>
            ) : (
              <span key={line}>&nbsp;</span>
            ),
          )}
      </Text>
    </Container>
  );
}
