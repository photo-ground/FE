import { useState } from 'react';
import DownChevronIcon from '@/assets/DownChevronIcon';
import { Option } from '@/types/option';
import {
  Backdrop,
  Container,
  FilterText,
  FilterWrapper,
  OptionItem,
  OptionWrapper,
} from './style';

interface DropdownProps {
  variant?: 'default' | 'filter' | 'mini';

  options: Option[];

  placeholder?: string;

  onSelect: (value: number | string) => void; // 객체의 id를 저장하는 것으로 하자
}

export default function Dropdown({
  variant = 'default',

  options,

  placeholder = 'Select an option',

  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleSelect = (value: number | string, label: string) => {
    setSelectedLabel(label);

    onSelect(value);

    handleClose();
  };

  const currentLabel = options.find(
    (option) => option.label === selectedLabel,
  )?.label;

  return (
    <Container>
      <FilterWrapper onClick={handleOpen} $isOpen={isOpen} $variant={variant}>
        <FilterText variant="body1_rg" $variant={variant}>
          {currentLabel || placeholder}
        </FilterText>
        <DownChevronIcon />
      </FilterWrapper>
      {isOpen && (
        <>
          <Backdrop onClick={handleClose} />
          <OptionWrapper $variant={variant}>
            {options.map((option) => (
              <OptionItem
                key={option.value}
                onClick={() => handleSelect(option.value, option.label)}
                $variant={variant}
              >
                <FilterText variant="body1_rg" $variant={variant}>
                  {option.label}
                </FilterText>
              </OptionItem>
            ))}
          </OptionWrapper>
        </>
      )}
    </Container>
  );
}
