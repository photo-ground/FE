import styled from 'styled-components';
import { convertToViewportHeight } from '@/styles/convertSize';

export const ScreenWithBottomButton = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: ${convertToViewportHeight(24)} 1.25rem ${convertToViewportHeight(80)}
    1.25rem;

  overflow: auto;
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
