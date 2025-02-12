import { useRef, useState } from 'react';
import styled from 'styled-components';

import { UNIV_SELECTION_LIST } from '@/types/university';
import { Z_INDEX } from '@/constants';
import DownChevronIcon from '@/assets/DownChevronIcon';
import Text from '@/components/atoms/Text';

export interface Option {
  value: string;
  label: string;
}

const Container = styled.div<{ $isOpen: boolean; $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.125rem;

  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.gray[200] : theme.colors.gray[400]};
  border-radius: ${({ $isOpen }) => ($isOpen ? '0.5rem 0.5rem 0 0' : '0.5rem')};
`;

const FilterText = styled(Text)<{ $isSelected?: boolean }>`
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.white : theme.colors.gray[200]};
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  width: 100%;
  height: 100%;

  z-index: ${Z_INDEX.DROPDOWN_BACKDROP};
`;

const OptionWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-top: none;
  border-radius: 0 0 0.5rem 0.5rem;

  z-index: ${Z_INDEX.DROPDOWN};
`;

const OptionItem = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;

  background: transparent;
  border: none;
  outline: none;

  text-align: start;

  cursor: pointer;
`;

export default function UnivInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (newValue: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement | null>(null);
  const optionRef = useRef<HTMLDivElement | null>(null);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  const currentLabel = UNIV_SELECTION_LIST.find(
    (option) => option.value === value,
  )?.label;

  return (
    <div style={{ position: 'relative' }}>
      <Container
        ref={selectorRef}
        onClick={onOpen}
        $isOpen={isOpen}
        $isSelected={!!currentLabel}
      >
        <FilterText variant="body1_rg" $isSelected={!!currentLabel}>
          {currentLabel || '학교 선택'}
        </FilterText>
        <DownChevronIcon />
      </Container>

      {isOpen && (
        <>
          <Backdrop onClick={onClose} />
          <OptionWrapper ref={optionRef}>
            {UNIV_SELECTION_LIST.map((option) => (
              <OptionItem
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  onClose();
                }}
              >
                <FilterText variant="body1_rg">{option.label}</FilterText>
              </OptionItem>
            ))}
          </OptionWrapper>
        </>
      )}
    </div>
  );
}
