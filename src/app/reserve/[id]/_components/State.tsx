import CheckIcon from '@/assets/CheckIcon';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Box = styled.div`
  display: flex;
  gap: 1rem;

  padding: 2rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;
`;

const LineColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Line = styled.div<{ $inProgress?: boolean }>`
  height: 3.5rem;
  border-left: 1px solid
    ${({ theme, $inProgress }) =>
      $inProgress ? theme.colors.primary[100] : theme.colors.gray[500]};
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
`;

const Item = styled.div`
  position: relative;
`;

const Dot = styled.div<{ $inProgress?: boolean }>`
  position: absolute;
  top: 8px;
  left: calc(-2rem - 0.25rem - 0.5px);

  width: 0.5rem;
  height: 0.5rem;
  background: ${({ theme, $inProgress }) =>
    $inProgress ? theme.colors.gray[200] : theme.colors.gray[500]};
  border-radius: 100%;
`;

const FinishedDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -4px;
  left: calc(-2rem - 1rem - 0.5px);

  width: 2rem;
  height: 2rem;
  background: ${({ theme }) => theme.colors.primary[100]};
  border-radius: 100%;
`;

const PrevDot = styled(Dot)`
  position: absolute;
  top: 8px;
  left: calc(-2rem - 0.25rem - 0.5px);

  width: 0.5rem;
  height: 0.5rem;
  background: ${({ theme }) => theme.colors.primary[100]};
  border-radius: 100%;
`;

const StateText = styled(Text)<{ $inProgress?: boolean }>`
  color: ${({ theme, $inProgress }) =>
    $inProgress ? theme.colors.white : theme.colors.gray[500]};
`;

function DotItem({
  inProgress,
  isFinished,
}: {
  inProgress?: boolean;
  isFinished?: boolean;
}) {
  if (isFinished) {
    if (inProgress) {
      return <PrevDot />;
    }

    return (
      <FinishedDot>
        <CheckIcon />
      </FinishedDot>
    );
  }

  return <Dot $inProgress={inProgress} />;
}

export default function State() {
  return (
    <Container>
      <Text variant="title2_sb">진행 상황</Text>
      <Box>
        <LineColumn>
          <Line $inProgress />
          <Line $inProgress />
          <Line />
          <Line />
        </LineColumn>

        <TextColumn>
          <Item>
            <StateText variant="body1_md" $inProgress>
              예약 신청
            </StateText>
            <DotItem isFinished inProgress />
          </Item>
          <Item>
            <StateText variant="body1_md" $inProgress>
              결제 대기
            </StateText>
            <DotItem isFinished />
          </Item>
          <Item>
            <StateText variant="body1_md" $inProgress>
              예약 확정
            </StateText>
            <DotItem inProgress />
          </Item>
          <Item>
            <StateText variant="body1_md">촬영 진행</StateText>
            <DotItem />
          </Item>
          <Item>
            <StateText variant="body1_md">보정본 전달 및 스냅 종료</StateText>
            <DotItem />
          </Item>
        </TextColumn>
      </Box>
    </Container>
  );
}
