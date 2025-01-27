import styled, { css } from 'styled-components';
import Text from '../atoms/Text';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const FilterWrapper = styled.div<{ $isOpen: boolean; $variant: string }>`
  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 0.5rem 1rem;

  cursor: pointer;

  ${({ $variant, $isOpen, theme }) => {
    switch ($variant) {
      case 'filter':
        return css`
          border-radius: 16px 16px 0 0;
          background: transparent;
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

export const FilterText = styled(Text)<{ $variant: string }>`
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

export const Backdrop = styled.div`
  position: fixed;

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;

  background: transparent;

  z-index: 20;
`;

export const OptionWrapper = styled.div<{ $variant: string }>`
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

export const OptionItem = styled.button<{ $variant: string }>`
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
