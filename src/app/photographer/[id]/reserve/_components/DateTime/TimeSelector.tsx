import styled, { DefaultTheme } from 'styled-components';
import Text from '@/components/atoms/Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  padding: 1.25rem 1rem;
  background: ${({ theme }) => theme.colors.gray[900]};

  border-radius: 0.5rem;
`;

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

const TimeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.625rem;
`;

const getBorderColor = ({
  theme,
  disabled,
  $isSelected,
}: {
  theme: DefaultTheme;
  disabled: boolean;
  $isSelected: boolean;
}) => {
  if (disabled) return theme.colors.gray[600];
  if ($isSelected) return theme.colors.primary[500];
  return theme.colors.white;
};

const BlockContainer = styled.button<{
  disabled: boolean;
  $isSelected: boolean;
}>`
  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary[500] : 'transparent'};
  padding: 0.625rem 0;

  border: 1px solid
    ${({ theme, disabled, $isSelected }) =>
      getBorderColor({ theme, disabled, $isSelected })};
  border-radius: 0.5rem;

  cursor: pointer;
`;

const BlockText = styled(Text)<{ $disabled: boolean }>`
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.gray[300] : theme.colors.white};
`;

const 오전 = [
  { label: '9:00', value: 9 },
  { label: '10:00', value: 10 },
  { label: '11:00', value: 11 },
];
const 오후 = [
  { label: '12:00', value: 12 },
  { label: '1:00', value: 13 },
  { label: '2:00', value: 14 },
  { label: '3:00', value: 15 },
  { label: '4:00', value: 16 },
  { label: '5:00', value: 17 },
  { label: '6:00', value: 18 },
  { label: '7:00', value: 19 },
  { label: '8:00', value: 20 },
  { label: '9:00', value: 21 },
];

function TimeBlock({
  time,
  value,
  onChange,
  disabled,
}: {
  time: { label: string; value: number };
  value: number | null;
  onChange: (newValue: number) => void;
  disabled: boolean;
}) {
  const isSelected = time.value === value;

  return (
    <BlockContainer
      onClick={() => onChange(time.value)}
      $isSelected={isSelected}
      disabled={disabled}
    >
      <BlockText variant="body3" $disabled={disabled}>
        {time.label}
      </BlockText>
    </BlockContainer>
  );
}

export default function TimeSelector({
  value,
  onChange,
  // eslint-disable-next-line
  timeSlot,
}: {
  value: number | null;
  onChange: (newValue: number) => void;
  timeSlot: number[];
}) {
  return (
    <Container>
      <BlockWrapper>
        <Text variant="body3">오전</Text>
        <TimeList>
          {오전.map((time) => (
            <TimeBlock
              key={time.value}
              time={time}
              value={value}
              onChange={onChange}
              disabled={!timeSlot.includes(time.value)}
            />
          ))}
        </TimeList>
      </BlockWrapper>

      <BlockWrapper>
        <Text variant="body3">오후</Text>
        <TimeList>
          {오후.map((time) => (
            <TimeBlock
              key={time.value}
              time={time}
              value={value}
              onChange={onChange}
              disabled={!timeSlot.includes(time.value)}
            />
          ))}
        </TimeList>
      </BlockWrapper>
    </Container>
  );
}
