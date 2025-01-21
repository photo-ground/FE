// 본문 각 줄의 내용이 중복될 수 있으므로 index를 쓰는 것이 적합합니다.
/* eslint-disable react/no-array-index-key */

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
      <div>
        {message.split('\n').map((line, index) =>
          line ? (
            <Text variant="body3" key={index}>
              {line}
            </Text>
          ) : (
            <Text variant="body3" key={index}>
              &nbsp;
            </Text>
          ),
        )}
      </div>
    </Container>
  );
}
