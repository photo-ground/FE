import styled from 'styled-components';
import TaskIcon from '@/assets/TaskIcon';
import RightChevronIcon from '@/assets/RightChevronIcon';
import Text from '@/components/atoms/Text';
import SmallButton from '@/components/atoms/SmallButton';
import PhotographerIcon from '@/assets/PhotographerIcon';
import LocationIcon from '@/assets/LocationIcon';
import TimeIcon from '@/assets/TimeIcon';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 3rem;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const TitleTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DateText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

const DivideLine = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 2rem;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const InfoLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const InfoText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[100]};
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export default function Upcoming() {
  return (
    <Container>
      <TitleArea>
        <TitleTextWrapper>
          <TaskIcon />
          <Text variant="title3">다가오는 일정</Text>
        </TitleTextWrapper>

        <DateText variant="caption1_rg">12.28 (토)</DateText>
      </TitleArea>

      <DivideLine />

      <Content>
        <InfoArea>
          <InfoLine>
            <PhotographerIcon />
            <InfoText variant="body1_rg">이채린 작가</InfoText>
          </InfoLine>
          <InfoLine>
            <LocationIcon />
            <InfoText variant="body1_rg">홍익대학교</InfoText>
          </InfoLine>
          <InfoLine>
            <TimeIcon />
            <InfoText variant="body1_rg">오후 12:00 - 1:00</InfoText>
          </InfoLine>
        </InfoArea>
        <ButtonArea>
          <RightChevronIcon size="20px" />
          <SmallButton.Tertiary text="채팅방" />
        </ButtonArea>
      </Content>
    </Container>
  );
}
