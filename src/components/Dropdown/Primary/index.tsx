import { useState } from 'react';

import DownChevronIcon from '@/assets/DownChevronIcon';
import { Option } from '../type';
import {
  Backdrop,
  Container,
  FilterText,
  OptionItem,
  OptionWrapper,
} from './styles';

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
