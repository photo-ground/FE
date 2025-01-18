import Text from '@/components/atoms/Text';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.75rem 1.25rem;
`;

export const DayList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.125rem 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[700]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
`;

export const DayText = styled(Text)`
  width: 2.75rem;
  color: ${({ theme }) => theme.colors.gray[200]};
  text-align: center;
`;

export const WeekList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 1rem;
  margin-bottom: 0.625rem;
`;

export const WeekRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateCell = styled.button<{
  $isSelected: boolean;
  disabled: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.75rem;
  height: 2.75rem;
  margin: 2px;
  background: transparent;

  border: ${({ theme, $isSelected }) =>
    $isSelected ? `1px solid ${theme.colors.orange[500]}` : 'none'};
  border-radius: 100%;

  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
`;
