import { useState } from 'react';

import DownChevronIcon from '@/assets/DownChevronIcon';
import {
  Backdrop,
  Container,
  FilterText,
  OptionItem,
  OptionWrapper,
} from './styles';

export interface Option<T = string> {
  value: T;
  label: string;
}

export default function Primary<T>({
  value,
  onChange,
  optionList,
  placeholder,
}: {
  value: T | null;
  onChange: (newValue: T) => void;
  optionList: Option<T>[];
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

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
                key={String(option.value)}
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
