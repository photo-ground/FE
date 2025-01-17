import { useState } from 'react';
import styled, { css } from 'styled-components';
import DownChevronIcon from '@/assets/DownChevronIcon';
import Text from '@/components/atoms/Text';

export interface Option {
  value: number;
  label: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const FilterWrapper = styled.div<{ $isOpen: boolean; $variant: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  cursor: pointer;

  ${({ $variant, $isOpen, theme }) => {
    switch ($variant) {
      case 'filter':
        return css`
          border-radius: 16px;
          background: ${theme.colors.gray[900]};
          ${$isOpen &&
          css`
            border-bottom: 1px solid ${theme.colors.gray[600]};
          `}
        `;
      case 'mini':
        return css`
          background: ${theme.colors.gray[100]};
          border: none;
          border-radius: ${$isOpen ? '0.3rem 0.3rem 0 0' : '0.3rem'};
        `;
      default:
        return css`
          background: ${theme.colors.background.primary};
          border: 1px solid ${theme.colors.gray[300]};
          border-radius: ${$isOpen ? '0.5rem 0.5rem 0 0' : '0.5rem'};
        `;
    }
  }}
`;

const FilterText = styled(Text)<{ $variant: string }>`
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'mini':
        return css`
          color: ${theme.colors.gray[800]};
          font-size: 0.875rem;
        `;
      default:
        return css`
          color: ${theme.colors.gray[200]};
        `;
    }
  }}
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 20;
`;

const OptionWrapper = styled.div<{ $variant: string }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 21;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'filter':
        return css`
          background: ${theme.colors.gray[900]};
          border-top: none;
          border-radius: 0 0 8px 8px;
        `;
      case 'mini':
        return css`
          background: ${theme.colors.gray[300]};
          border-top: none;
          border-radius: 8px;
        `;
      default:
        return css`
          background: ${theme.colors.background.primary};
          border: 1px solid ${theme.colors.gray[200]};
          border-top: none;
          border-radius: 0 0 0.5rem 0.5rem;
        `;
    }
  }}
`;

const OptionItem = styled.button<{ $variant: string }>`
  width: 100%;
  padding: 6px 16px;
  background: transparent;
  border: none;
  text-align: start;
  cursor: pointer;

  &:hover {
    ${({ $variant, theme }) => {
      switch ($variant) {
        case 'mini':
          return css`
            background-color: ${theme.colors.gray[200]};
          `;
        default:
          return css`
            background-color: ${theme.colors.gray[600]};
          `;
      }
    }}
  }
`;

interface DropdownProps {
  variant?: 'default' | 'filter' | 'mini';
  options: Option[];
  placeholder?: string;
  onSelect: (value: number) => void; // 객체의 id를 저장하는 것으로 하자
}

export default function Dropdown({
  variant = 'default',
  options,
  placeholder = 'Select an option',
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  // const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSelect = (value: number, label: string) => {
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
