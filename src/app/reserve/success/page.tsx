'use client';

import Link from 'next/link';
import styled from 'styled-components';

import Text from '@/components/atoms/Text';
import CTAButton from '@/components/atoms/CTAButton';
import CompleteIcon from './CompleteIcon';
import ProgressBar from '../[id]/_components/ProgressBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100dvh;
  padding: 1.5rem 1.25rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(Text)`
  margin-top: 0.5rem;
`;

const SubTitle = styled(Text)`
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.colors.gray[200]};
`;

const ProgressWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5.125rem;
  padding: 2rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;
`;

const ButtonWrapper = styled(Link)`
  width: 100%;
`;

export default function ApplyCompletePage() {
  return (
    <Wrapper>
      <Header>
        <CompleteIcon />
        <Title variant="header2">예약 신청 완료!</Title>
        <SubTitle variant="body1_rg">
          예예 관리 탭에서 진행 상황을 확인할 수 있어요
        </SubTitle>
      </Header>

      <ProgressWrapper>
        <ProgressBar state="예약대기" />
      </ProgressWrapper>

      <ButtonWrapper href="/reserve/list">
        <CTAButton text="확인" />
      </ButtonWrapper>
    </Wrapper>
  );
}
