import Link from 'next/link';
import styled from 'styled-components';
import LocationIcon from '@/assets/LocationIcon';
import PeopleIcon from '@/assets/PeopleIcon';
import PhotographerIcon from '@/assets/PhotographerIcon';
import { Reservation } from '@/app/reserve/list/type';
import Chip from '@/components/atoms/Chip';
import Text from '@/components/atoms/Text';
import SmallButton from '../atoms/SmallButton';

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Profile = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`;

const TextArea = styled.div`
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
  const formattedHours = +hours > 12 ? +hours - 12 : +hours;

  // Return the formatted string
  return `${+month}.${+dateNum}(${days[dateObj.getDay()]}) ${period} ${formattedHours}:${minutes}`;
}

export default function ReserveInfo({
  data,
  chipType = 'tertiary',
}: {
  data: Reservation;
  chipType?: 'tertiary' | 'brand' | 'link';
}) {
  return (
    <CardContainer>
      <Profile src="/images/yonsei.jpg" />
      <TextArea>
        <Text variant="body1_md">{formatTime(data.date, data.startTime)}</Text>

        <Content>
          <InfoArea>
            <InfoLine>
              <PhotographerIcon />
              <InfoText variant="body1_md">
                {data.photographerName} 작가
              </InfoText>
            </InfoLine>
            <InfoLine>
              <LocationIcon />
              <InfoText variant="body1_md">{data.univName}</InfoText>
            </InfoLine>
          </InfoArea>

          {chipType === 'link' ? (
            <Link href={data.chatUrl || '/'}>
              <SmallButton.Primary text="채팅방" />
            </Link>
          ) : (
            <Chip
              icon={PeopleIcon}
              text={`${data.bookingNum}인`}
              type={chipType}
            />
          )}
        </Content>
      </TextArea>
    </CardContainer>
  );
}
