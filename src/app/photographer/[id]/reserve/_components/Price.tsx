'use client';

import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import formatPrice from '@/lib/formatPrice';
import { PhotographerReserve } from '../getPhotographerData';

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

export default function Price({
  price,
  addPrice,
  reserveNum,
}: {
  price: PhotographerReserve['price'];
  addPrice: PhotographerReserve['addPrice'];
  reserveNum: number;
}) {
  return (
    <Container>
      <Line>
        <Text variant="title2_sb">금액</Text>
        <PriceText variant="title2_sb">
          {formatPrice(price + addPrice * (reserveNum - 1))} 원
        </PriceText>
      </Line>

      <Message variant="caption1_rg">
        결제는 작가 승인 이후에 진행됩니다.
      </Message>
    </Container>
  );
}
