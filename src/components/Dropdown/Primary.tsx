import { useState } from 'react';
import styled from 'styled-components';

import { Z_INDEX } from '@/constants';
import DownChevronIcon from '@/assets/DownChevronIcon';
import Text from '@/components/atoms/Text';

export interface Option {
  value: string;
  label: string;
}

const Container = styled.div<{ $isOpen: boolean; $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.125rem;

  width: ${({ $isOpen }) => ($isOpen ? 'calc(10rem + 2px)' : 'fit-content')};
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

  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-top: none;
  border-radius: 0 0 0.5rem 0.5rem;

  z-index: ${Z_INDEX.DROPDOWN};
`;

const OptionItem = styled.button`
  width: 10rem;
  padding: 0.5rem 1rem;

  background: transparent;
  border: none;
  outline: none;

  text-align: start;

  cursor: pointer;
`;

export default function Primary({
  value,
  onChange,
  optionList,
  placeholder,
}: {
  value: string | null;
  onChange: (newValue: string) => void;
  optionList: Option[];
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  const currentLabel = optionList.find(
    (option) => option.value === value,
  )?.label;

  return (
    <div>
      <Container onClick={onOpen} $isOpen={isOpen} $isSelected={!!currentLabel}>
        <FilterText variant="body2_rg" $isSelected={!!currentLabel}>
          {currentLabel || placeholder}
        </FilterText>
        <DownChevronIcon />
      </Container>

      {isOpen && (
        <>
          <Backdrop onClick={onClose} />
          <OptionWrapper>
            {optionList.map((option) => (
              <OptionItem
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  onClose();
                }}
              >
                <FilterText variant="body2_rg">{option.label}</FilterText>
              </OptionItem>
            ))}
          </OptionWrapper>
        </>
      )}
    </div>
  );
}
