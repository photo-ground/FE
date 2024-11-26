import Text from '@/components/atoms/Text';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: fit-content;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.75rem 1.25rem;
`;

export const DayList = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.25rem 0;
`;

export const DayText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export const WeekList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const WeekRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

export const DateCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;
  margin: 2px;
`;
