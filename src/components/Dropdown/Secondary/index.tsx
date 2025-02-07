import { useEffect, useRef, useState } from 'react';

import DownChevronIcon from '@/assets/DownChevronIcon';
import { Option } from '../type';
import {
  Backdrop,
  Container,
  FilterText,
  OptionItem,
  OptionWrapper,
} from './styles';

export default function Secondary({
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
