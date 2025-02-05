import { COLOR } from '@/constants';
import InfoIcon from '@/assets/InfoIcon';
import WarningIcon from '@/assets/WarningIcon';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const Container = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.negative[800]};
  border: 1px solid ${({ theme }) => theme.colors.negative[500]};
  border-radius: 0.5rem;

  text-align: center;
`;

const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.negative[500]};
  margin-top: 0.25rem;
`;

const Message = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[100]};
  margin-top: 1rem;
`;

const AlertArea = styled.div`
  display: flex;
  align-items: center;

  margin-top: 0.5rem;
`;

const AlertMessage = styled(Text)`
  margin-left: 0.25rem;
  color: ${({ theme }) => theme.colors.negative[500]};
`;

export default function Error() {
  return (
    <Wrapper>
      <Container>
        <WarningIcon />
        <Title variant="title3">입금 오류 발생</Title>
        <Message variant="caption1_rg">
          입금 금액이 일치하지 않습니다
          <br />
          입금자명과 금액이 일치하는지 확인 후 재입금해주세요
        </Message>
      </Container>

      <AlertArea>
        <InfoIcon color={COLOR.NEGATIVE[500]} />
        <AlertMessage variant="caption1_rg">
          잘못 입금된 금액은 영업일 7일 이내에 환불됩니다
        </AlertMessage>
      </AlertArea>
    </Wrapper>
  );
}
