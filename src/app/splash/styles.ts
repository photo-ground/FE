import {
  convertToViewportHeight,
  convertToViewportWidth,
} from '@/styles/convertSize';
import styled from 'styled-components';

export const ScreenWithBottomButton = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: ${convertToViewportHeight(24)} ${convertToViewportWidth(24)}
    ${convertToViewportHeight(80)} ${convertToViewportWidth(24)};

  overflow: auto;

  @media (min-width: 769px) {
    padding: ${convertToViewportHeight(24)} 1.25rem
      ${convertToViewportHeight(80)} 1.25rem;
  }
`;

export const Container = styled(ScreenWithBottomButton)`
  align-items: center;
  justify-content: space-between;

  padding-top: 40vh;
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;
