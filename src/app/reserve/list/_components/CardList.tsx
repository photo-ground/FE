import RightChevronIcon from '@/assets/RightChevronIcon';
import Text from '@/components/atoms/Text';
import Link from 'next/link';
import styled from 'styled-components';
import ReserveCard from './ReserveCard';

const Container = styled.div`
  padding: 1.5rem 1.25rem;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CaptionText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const ChatLink = styled(Link)`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  text-decoration: none;
`;

export default function CardList() {
  return (
    <Container>
      <ReserveCard />

      <InfoArea>
        <div>
          <CaptionText variant="caption1_rg">
            빠른 시일 내에 결제 과정을 자동화할 예정입니다.
          </CaptionText>
          <CaptionText variant="caption1_rg">
            기다려주셔서 감사합니다.
          </CaptionText>
        </div>

        <ChatLink href="/">
          <CaptionText variant="caption1_rg">오픈채팅으로 문의하기</CaptionText>
          <RightChevronIcon size="24" color="#737373" />
        </ChatLink>
      </InfoArea>
    </Container>
  );
}
