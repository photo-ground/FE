import styled from 'styled-components';
import { Z_INDEX } from '@/constants';
import Text from '@/components/atoms/Text';

export const Container = styled.div<{
  $isOpen: boolean;
  $isSelected?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.125rem;

  width: inherit;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.gray[200] : theme.colors.gray[400]};
  border-radius: ${({ $isOpen }) => ($isOpen ? '0.5rem 0.5rem 0 0' : '0.5rem')};
`;

export const FilterText = styled(Text)<{ $isSelected?: boolean }>`
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.white : theme.colors.gray[200]};
`;

export const OptionText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  width: 100%;
  height: 100%;

  z-index: ${Z_INDEX.DROPDOWN_BACKDROP};
`;

export const OptionWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-top: none;
  border-radius: 0 0 0.5rem 0.5rem;

  z-index: ${Z_INDEX.DROPDOWN};
`;

export const OptionItem = styled.button`
  width: inherit;
  padding: 0.5rem 1rem;

  background: transparent;
  border: none;
  outline: none;

  text-align: start;

  cursor: pointer;
`;
