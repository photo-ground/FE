import CheckIcon from '@/assets/CheckIcon';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';
import { ReserveDetail } from '../type';
import { ReserveStatus } from '../../list/type';

const LINE_WIDTH = '1.5px';
const LINE_MARGIN = '1rem';
const LINE_HEIGHT = '3.5rem';
const LINE_TEXT_GAP = '1rem';
const DOT_SIZE = '0.5rem';
const LARGE_DOT_SIZE = '2rem';

const STEP_LIST: { label: string; value: ReserveStatus[] }[] = [
  { label: '예약 신청', value: ['예약취소'] },
  { label: '결제 대기', value: ['예약대기', '결제오류'] },
  { label: '예약 확정', value: ['결제대기', '결제확인'] },
  { label: '촬영 진행', value: ['예약확정'] },
  { label: '보정본 전달 및 스냅 종료', value: ['촬영완료'] },
];

const Wrapper = styled.div`
  display: flex;
  gap: ${LINE_TEXT_GAP};
`;

const LineColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem ${LINE_MARGIN};
`;

const Line = styled.div<{ $inProgress: boolean }>`
  height: ${LINE_HEIGHT};
  border-left: ${LINE_WIDTH} solid
    ${({ theme, $inProgress }) =>
      $inProgress ? theme.colors.primary[500] : theme.colors.gray[500]};
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Item = styled.div`
  position: relative;
`;

const Dot = styled.div<{ $inProgress?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: calc(
    -${LINE_TEXT_GAP} - ${LINE_MARGIN} - ${DOT_SIZE} / 2 - ${LINE_WIDTH} / 2
  );

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
  top: 50%;
  transform: translate(0, -50%);
  left: calc(
    -${LINE_TEXT_GAP} - ${LINE_MARGIN} - ${LARGE_DOT_SIZE} / 2 - ${LINE_WIDTH} /
      2
  );

  width: ${LARGE_DOT_SIZE};
  height: ${LARGE_DOT_SIZE};
  background: ${({ theme }) => theme.colors.primary[500]};
  border-radius: 100%;
`;

const PrevDot = styled(Dot)`
  background: ${({ theme }) => theme.colors.primary[500]};
`;

const StateText = styled(Text)<{ $inProgress?: boolean }>`
  color: ${({ theme, $inProgress }) =>
    $inProgress ? theme.colors.white : theme.colors.gray[500]};
`;

export default function ProgressBar({
  state,
}: {
  state: ReserveDetail['status'];
}) {
  const currentStep = STEP_LIST.findIndex((step) => step.value.includes(state));

  return (
    <Wrapper>
      <LineColumn>
        {STEP_LIST.slice(0, -1).map((step, index) => (
          <Line key={step.label} $inProgress={index < currentStep} />
        ))}
      </LineColumn>

      <TextColumn>
        {STEP_LIST.map((step, index) => (
          <Item key={step.label}>
            <StateText variant="body1_md" $inProgress={index <= currentStep}>
              {step.label}
            </StateText>

            {index < currentStep - 1 && <PrevDot />}
            {index === currentStep - 1 && (
              <FinishedDot>
                <CheckIcon />
              </FinishedDot>
            )}
            {index === currentStep && <Dot $inProgress />}
            {index > currentStep && <Dot />}
          </Item>
        ))}
      </TextColumn>
    </Wrapper>
  );
}
