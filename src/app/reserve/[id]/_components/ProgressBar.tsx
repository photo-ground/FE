import CheckIcon from '@/assets/CheckIcon';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';

const LINE_TEXT_GAP = '1rem';
const DOT_SIZE = '0.5rem';
const LARGE_DOT_SIZE = '2rem';

const STEP_LIST = [
  '예약 신청',
  '결제 대기',
  '예약 확정',
  '촬영 진행',
  '보정본 전달 및 스냅 종료',
];

const Wrapper = styled.div`
  display: flex;
  gap: ${LINE_TEXT_GAP};
`;

const LineColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Line = styled.div<{ $inProgress: boolean }>`
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

  width: ${DOT_SIZE};
  height: ${DOT_SIZE};
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

  width: ${LARGE_DOT_SIZE};
  height: ${LARGE_DOT_SIZE};
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

export default function ProgressBar() {
  const currentStep = STEP_LIST.findIndex((step) => step === '결제 대기');

  return (
    <Wrapper>
      <LineColumn>
        {STEP_LIST.slice(0, -1).map((step, index) => (
          <Line key={step} $inProgress={index <= currentStep} />
        ))}
      </LineColumn>

      <TextColumn>
        {STEP_LIST.map((step, index) => (
          <Item key={step}>
            <StateText variant="body1_md" $inProgress>
              {step}
            </StateText>

            {index < currentStep && <PrevDot />}
            {index === currentStep && (
              <FinishedDot>
                <CheckIcon />
              </FinishedDot>
            )}
            {index === currentStep + 1 && <Dot $inProgress />}
            {index > currentStep + 1 && <Dot />}
          </Item>
        ))}
      </TextColumn>
    </Wrapper>
  );
}
