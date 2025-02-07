import styled from 'styled-components';
import { Z_INDEX } from '@/constants';
import Text from '@/components/atoms/Text';

export const Container = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.125rem;
  flex-shrink: 0;

  padding: 0.375rem 1rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: ${({ $isOpen }) =>
    $isOpen ? '1.125rem 1.125rem 0 0' : '1.125rem'};
`;

export const FilterText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
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
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0 0 1.125rem 1.125rem;

  z-index: ${Z_INDEX.DROPDOWN};
`;

export const OptionItem = styled.button`
  width: 10rem;
  padding: 0.375rem 1rem;
  padding-right: calc(1rem + 1.25rem + 0.125rem + 0.1rem);
  // padding right + icon size + gap + 0.1rem

  background: transparent;
  border: none;
  outline: none;

  text-align: start;

  cursor: pointer;
`;
