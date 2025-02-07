import { useEffect, useRef, useState } from 'react';

import DownChevronIcon from '@/assets/DownChevronIcon';
import {
  Backdrop,
  Container,
  FilterText,
  OptionItem,
  OptionWrapper,
} from './styles';

interface Option<T = string> {
  value: T;
  label: string;
}

export default function Secondary<T>({
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
  const selectorRef = useRef<HTMLDivElement | null>(null);
  const optionRef = useRef<HTMLDivElement | null>(null);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen || !selectorRef.current || !optionRef.current) {
      return () => {};
    }

    selectorRef!.current!.style.width = '10rem';

    return () => {
      selectorRef!.current!.style.width = 'fit-content';
    };
  }, [isOpen]);

  const currentLabel = optionList.find(
    (option) => option.value === value,
  )?.label;

  return (
    <div>
      <Container ref={selectorRef} onClick={onOpen} $isOpen={isOpen}>
        <FilterText variant="body2_rg">
          {currentLabel || placeholder}
        </FilterText>
        <DownChevronIcon />
      </Container>

      {isOpen && (
        <>
          <Backdrop onClick={onClose} />
          <OptionWrapper ref={optionRef}>
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
