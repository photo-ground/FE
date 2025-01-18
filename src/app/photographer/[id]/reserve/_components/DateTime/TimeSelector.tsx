import styled from 'styled-components';

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

const BlockContainer = styled.button<{ $isSelected: boolean }>`
  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary[100] : 'transparent'};
  padding: 0.625rem 0;

  border: 1px solid
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.primary[100] : theme.colors.white};
  border-radius: 0.5rem;

  cursor: pointer;
`;

const 오전 = [
  { label: '9:00', value: '9:00' },
  { label: '10:00', value: '10:00' },
  { label: '11:00', value: '11:00' },
];
const 오후 = [
  { label: '12:00', value: '12:00' },
  { label: '1:00', value: '13:00' },
  { label: '2:00', value: '14:00' },
  { label: '3:00', value: '15:00' },
  { label: '4:00', value: '16:00' },
  { label: '5:00', value: '17:00' },
  { label: '6:00', value: '18:00' },
  { label: '7:00', value: '19:00' },
  { label: '8:00', value: '20:00' },
  { label: '9:00', value: '21:00' },
];

function TimeBlock({
  time,
  value,
  onChange,
}: {
  time: { label: string; value: string };
  value: string | null;
  onChange: (newValue: string) => void;
}) {
  const isSelected = time.value === value;

  return (
    <BlockContainer
      onClick={() => onChange(time.value)}
      $isSelected={isSelected}
    >
      <Text variant="body3">{time.label}</Text>
    </BlockContainer>
  );
}

export default function TimeSelector({
  value,
  onChange,
  // eslint-disable-next-line
  timeSlot,
}: {
  value: string | null;
  onChange: (newValue: string) => void;
  timeSlot: number[];
}) {
  // console.log(timeSlot);

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
            />
          ))}
        </TimeList>
      </BlockWrapper>

      <BlockWrapper>
        <Text variant="body3">오후</Text>
        <TimeList>
          {오후.map((time) => (
            <BlockContainer
              key={time.value}
              onClick={() => onChange(time.value)}
              $isSelected={time.value === value}
            >
              <Text variant="body3">{time.label}</Text>
            </BlockContainer>
          ))}
        </TimeList>
      </BlockWrapper>
    </Container>
  );
}
