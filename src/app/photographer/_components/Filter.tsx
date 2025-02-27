import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Z_INDEX } from '@/constants';
import DownChevronIcon from '@/assets/DownChevronIcon';
import Text from '@/components/atoms/Text';

const Container = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.125rem;

  padding: 0.375rem 1rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: ${({ $isOpen }) =>
    $isOpen ? '1.125rem 1.125rem 0 0' : '1.125rem'};
`;

const FilterText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
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

  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0 0 1.125rem 1.125rem;

  z-index: ${Z_INDEX.DROPDOWN};
`;
const OptionItem = styled.button`
  width: 100%;
  padding: 0.375rem 1rem;
  padding-right: calc(1rem + 1.25rem + 0.125rem + 0.1rem);
  // padding right + icon size + gap + 0.1rem

  background: transparent;
  border: none;
  outline: none;

  text-align: start;

  cursor: pointer;
`;

export default function Filter<T>({
  value,
  onChange,
  optionList,
  placeholder,
}: {
  value: T | null;
  onChange: (newValue: T | null) => void;
  optionList: readonly {
    value: T;
    label: string;
  }[];
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

    selectorRef.current.style.width = `${optionRef.current.scrollWidth}px`;

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
