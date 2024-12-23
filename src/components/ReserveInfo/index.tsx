import styled from 'styled-components';
import LocationIcon from '@/assets/LocationIcon';
import PeopleIcon from '@/assets/PeopleIcon';
import PhotographerIcon from '@/assets/PhotographerIcon';
import Chip from '@/components/atoms/Chip';
import Text from '@/components/atoms/Text';

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

export default function ReserveInfo({
  chipType = 'tertiary',
}: {
  chipType?: 'tertiary' | 'brand';
}) {
  return (
    <CardContainer>
      <Profile src="/images/yonsei.jpg" />
      <TextArea>
        <Text variant="body1_md">11.03(일) 오후 3:00</Text>

        <Content>
          <InfoArea>
            <InfoLine>
              <PhotographerIcon />
              <InfoText variant="body1_md">이채린 작가</InfoText>
            </InfoLine>
            <InfoLine>
              <LocationIcon />
              <InfoText variant="body1_md">홍익대학교</InfoText>
            </InfoLine>
          </InfoArea>

          <Chip icon={PeopleIcon} text="2인" type={chipType} />
        </Content>
      </TextArea>
    </CardContainer>
  );
}
