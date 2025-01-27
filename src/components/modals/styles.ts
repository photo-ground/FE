import styled from 'styled-components';

import Text from '@/components/atoms/Text';

const BACKDROP_Z_INDEX = 100;
const MODAL_Z_INDEX = BACKDROP_Z_INDEX + 1;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;

  background: black;
  opacity: 60%;

  width: 100dvw;
  height: 100dvh;

  z-index: ${BACKDROP_Z_INDEX};
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.gray[800]};
  width: 20.375rem;
  padding: 1.5rem;
  border-radius: 1.25rem;

  z-index: ${MODAL_Z_INDEX};
`;

export const ModalTitle = styled(Text)`
  margin-top: 1rem;
  margin-bottom: 0.25rem;
`;

export const ModalText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
  margin-bottom: 1.5rem;
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: 0.625rem;
  width: 100%;
`;
