/* eslint-disable dot-notation */
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { UnivOption } from '@/types/university';
import DownChevronIcon from '@/assets/DownChevronIcon';
import Text from '@/components/atoms/Text';
import UpChevronIcon from '@/assets/UpChevronIcon';

export const Container = styled.div<{ $isOpen: boolean }>`
  display: flex;
  min-width: 145px;
  justify-content: space-between;
  gap: 0.125rem;
  padding: 0.5rem 0;
`;
const FilterTitle = styled(Text)`
  width: 100%;
  font-size: ${({ theme }) => theme.typography.caption1_rg};
  color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 1.125rem;
  text-align: end;
`;

const FilterText = styled(Text)`
  width: 100%;
  font-size: ${({ theme }) => theme.typography.caption1_rg};
  color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 1.125rem;
  text-align: center;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 1.125rem;

  z-index: 20; // 임의로 설정
`;

const OptionWrapper = styled.div`
  padding: 4px 0;
  position: absolute;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;
  right: 20px;

  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 0.5rem;

  z-index: 21; // 임의로 설정
`;
const OptionItem = styled.button`
  width: 100%;
  padding: 0 0.5rem;
  border-radius: 1.125rem;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border: none;
  outline: none;
  text-align: end;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default function Filter({
  value,
  onChange,
  optionList,
  placeholder,
}: {
  value: string | null;
  // eslint-disable-next-line
  onChange: (newValue: UnivOption) => void;
  optionList: readonly UnivOption[];
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement | null>(null);
  const optionRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
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
      <Container ref={selectorRef} onClick={toggleOpen} $isOpen={isOpen}>
        <FilterTitle variant="body2_rg">
          {currentLabel || placeholder}
        </FilterTitle>
        {isOpen ? <UpChevronIcon /> : <DownChevronIcon />}
      </Container>

      {isOpen && (
        <>
          <Backdrop onClick={toggleOpen} />
          <OptionWrapper ref={optionRef}>
            {optionList.map((option) => (
              <OptionItem
                key={option.value}
                onClick={() => {
                  onChange(option);
                  toggleOpen();
                }}
              >
                <FilterText variant="caption1_rg">{option.label}</FilterText>
              </OptionItem>
            ))}
          </OptionWrapper>
        </>
      )}
    </div>
  );
}
