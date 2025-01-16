'use client';

import Text from '@/components/atoms/Text';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 1.25rem;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceText = styled(Text)`
  color: ${({ theme }) => theme.colors.orange[500]};
`;

const Message = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function Price() {
  return (
    <Container>
      <Line>
        <Text variant="title2_sb">금액</Text>
        <PriceText variant="title2_sb">70,000 원</PriceText>
      </Line>

      <Message variant="caption1_rg">
        결제는 작가 승인 이후에 진행됩니다.
      </Message>
    </Container>
  );
}
