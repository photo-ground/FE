'use client';

import InfoIcon from '@/assets/InfoIcon';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';
import { PhotographerReserve } from '../_libs/getPhotographerData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  padding: 1.25rem;
  background: ${({ theme }) => theme.colors.gray[800]};
`;

const BottomArea = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const InfoText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function Info({
  nickname,
}: {
  nickname: PhotographerReserve['nickname'];
}) {
  return (
    <Container>
      <Text variant="body1_md">{nickname} 작가님의 예약 페이지</Text>
      <BottomArea>
        <InfoIcon />
        <InfoText variant="body3">
          작가측에서 승인 후 알림 메일이 발송됩니다.
        </InfoText>
      </BottomArea>
    </Container>
  );
}
