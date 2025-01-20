import styled from 'styled-components';
import PhotographerIcon from '@/assets/PhotographerIcon';
import LocationIcon from '@/assets/LocationIcon';
import PeopleIcon from '@/assets/PeopleIcon';
import Text from '@/components/atoms/Text';
import Chip from '@/components/atoms/Chip';
import { ReserveDetail } from '../type';

const Container = styled.div`
  display: flex;
  gap: 2rem;

  margin-bottom: 1.5rem;
`;

const Profile = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.625rem;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const InfoLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const InfoText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

function formatTime(date: string, time: string) {
  const [year, month, dateNum] = date.split('-');
  const [hours, minutes] = time.split(':');
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const dateObj = new Date(+year, +month - 1, +dateNum, +hours, +minutes);
  const period = +hours > 12 ? '오후' : '오전';
  const formattedHours = +hours > 12 ? +hours - 12 : hours;

  // Return the formatted string
  return `${+month}.${+dateNum}(${days[dateObj.getDay()]}) ${period} ${formattedHours}:${minutes}`;
}

export default function Info({ data }: { data: ReserveDetail }) {
  const { date, startTime, photographerName, univName, reserveNum } = data;

  return (
    <Container>
      <Profile src="/images/yonsei.jpg" />
      <Card>
        <Text variant="body1_md">{formatTime(date, startTime)}</Text>

        <Content>
          <InfoArea>
            <InfoLine>
              <PhotographerIcon />
              <InfoText variant="body1_md">{photographerName} 작가</InfoText>
            </InfoLine>
            <InfoLine>
              <LocationIcon />
              <InfoText variant="body1_md">{univName}</InfoText>
            </InfoLine>
          </InfoArea>

          <Chip type="brand" icon={PeopleIcon} text={`${reserveNum}인`} />
        </Content>
      </Card>
    </Container>
  );
}
