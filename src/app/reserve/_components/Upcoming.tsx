import styled from 'styled-components';
import TaskIcon from '@/assets/TaskIcon';
import RightChevronIcon from '@/assets/RightChevronIcon';
import Text from '@/components/atoms/Text';
import SmallButton from '@/components/atoms/SmallButton';
import PhotographerIcon from '@/assets/PhotographerIcon';
import LocationIcon from '@/assets/LocationIcon';
import TimeIcon from '@/assets/TimeIcon';
import Link from 'next/link';

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

function formatDate(date: string) {
  const dateObj = new Date(date);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return `${dateObj.getMonth() + 1}.${dateObj.getDate()} (${days[dateObj.getDay()]})`;
}

function formatTime(startTime: string) {
  const [hours, minutes] = startTime.split(':');
  const period = +hours > 12 ? '오후' : '오전';
  const formattedHours = +hours > 12 ? +hours - 12 : +hours;
  const formattedEndHours = +hours + 1 > 12 ? +hours + 1 - 12 : +hours + 1;

  return `${period} ${formattedHours}:${minutes} - ${formattedEndHours}:${minutes}`;
}

export default function Upcoming({ data }) {
  return (
    <Container>
      <TitleArea>
        <TitleTextWrapper>
          <TaskIcon />
          <Text variant="title3">다가오는 일정</Text>
        </TitleTextWrapper>

        <DateText variant="caption1_rg">{formatDate(data.date)}</DateText>
      </TitleArea>

      <DivideLine />

      <Content>
        <InfoArea>
          <InfoLine>
            <PhotographerIcon />
            <InfoText variant="body1_rg">{data.photographerName} 작가</InfoText>
          </InfoLine>
          <InfoLine>
            <LocationIcon />
            <InfoText variant="body1_rg">{data.university}</InfoText>
          </InfoLine>
          <InfoLine>
            <TimeIcon />
            <InfoText variant="body1_rg">{formatTime(data.startTime)}</InfoText>
          </InfoLine>
        </InfoArea>
        <ButtonArea>
          <Link href={`/reserve/${data.reservationId}`}>
            <RightChevronIcon size="20px" />
          </Link>
          <Link href={data.chatUrl || '/'}>
            <SmallButton.Tertiary text="채팅방" />
          </Link>
        </ButtonArea>
      </Content>
    </Container>
  );
}
