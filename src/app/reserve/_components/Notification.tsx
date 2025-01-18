import styled from 'styled-components';
import NotificationIcon from '@/assets/NotificationIcon';
import Text from '@/components/atoms/Text';
import ArrowRightIcon from '@/assets/ArrowRightIcon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  margin-bottom: 3rem;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background: linear-gradient(
    96.52deg,
    rgba(140, 140, 140, 0.2) -5.13%,
    rgba(191, 191, 191, 0.2) 56.92%,
    rgba(89, 89, 89, 0.2) 118.97%
  );
  padding: 1rem 1.25rem;

  border-radius: 0.5rem;
`;

const CardTitle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const CardTitleTextWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background: ${({ theme }) => theme.colors.primary[100]};
  border-radius: 100%;
`;

export default function Notification() {
  return (
    <Container>
      <TitleArea>
        <NotificationIcon />
        <Text variant="title3">새로운 알림</Text>
      </TitleArea>

      <Card>
        <CardTitle>
          <CardTitleTextWrapper>
            <Text variant="body1_md">이채린님과 예약이 확정되었습니다</Text>
            <Dot />
          </CardTitleTextWrapper>
          <ArrowRightIcon />
        </CardTitle>
        <Text variant="body3">지금 확인하러 가기</Text>
      </Card>
    </Container>
  );
}
