import Text from '@/components/atoms/Text';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.75rem 0;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const DayList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
`;

export const DayText = styled(Text)`
  width: 2.5rem;
  color: ${({ theme }) => theme.colors.gray[200]};
  text-align: center;
`;

export const WeekList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const WeekRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateCell = styled.div<{
  $isAvailable?: boolean;
  $isActive?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;
  margin: 2px;

  border: 1px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.colors.orange[500] : 'transparent'};
  border-radius: 100%;

  cursor: ${({ $isAvailable }) => ($isAvailable ? 'pointer' : 'auto')};
`;

export const DateText = styled(Text)<{ $isAvailable?: boolean }>`
  color: ${({ theme, $isAvailable }) =>
    $isAvailable ? theme.colors.white : theme.colors.gray[600]};
`;
