import PhotographerIcon from '@/assets/PhotographerIcon';
import LocationIcon from '@/assets/LocationIcon';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';
import PeopleIcon from '@/assets/PeopleIcon';

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

const Button = styled.button`
  display: flex;
  padding: 0.375rem 1rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border: none;
  outline: none;
  border-radius: 1.5rem;
`;

const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary[100]};
`;

export default function Info() {
  return (
    <Container>
      <Profile src="/images/yonsei.jpg" />
      <Card>
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

          <Button>
            <PeopleIcon />
            <ButtonText variant="body2_rg">2인</ButtonText>
          </Button>
        </Content>
      </Card>
    </Container>
  );
}
