import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import formatPrice from '@/lib/formatPrice';
import { PhotographerDetail } from '@/app/photographer/[id]/_libs/getPhotographerData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  padding: 1.5rem 1.25rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Message = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[400]};
  text-align: right;
`;

export default function Price({
  price,
}: {
  price: PhotographerDetail['price'];
}) {
  return (
    <Container>
      <Header>
        <Text variant="title2_sb">촬영 상세</Text>
        <Text variant="title2_sb">{formatPrice(price)}₩</Text>
      </Header>

      <Message variant="caption1_rg">* 1:1 50분 야외촬영 기준</Message>
    </Container>
  );
}
