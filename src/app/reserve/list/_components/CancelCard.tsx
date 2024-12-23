import styled from 'styled-components';
import Tag from './Tag';
import RightChevronIcon from '@/assets/RightChevronIcon';
import Text from '@/components/atoms/Text';
import ReserveInfo from '@/components/ReserveInfo';
import InfoIcon from '@/assets/InfoIcon';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 1.25rem;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[900]};
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MessageArea = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const Message = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const DivideLine = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  margin: 1rem 0;
`;

export default function CancelCard() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <TitleArea>
            <Tag text="예약 취소" type="error" />
            <RightChevronIcon size="20" />
          </TitleArea>

          <MessageArea>
            <InfoIcon />
            <Message variant="caption1_rg">
              작가님의 사정으로 예약이 취소되었습니다.
            </Message>
          </MessageArea>
        </Header>

        <DivideLine />

        <ReserveInfo chipType="tertiary" />
      </Container>
    </Wrapper>
  );
}
