import WarningIcon from '@/assets/modal/WarningIcon';
import LargeButton from '@/components/atoms/LargeButton';
import Text from '@/components/atoms/Text';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  background: black;
  opacity: 60%;

  width: 100dvw;
  height: 100dvh;

  z-index: 100;
`;

const ModalContainer = styled.div`
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

  z-index: 101;
`;

const ModalTitle = styled(Text)`
  margin-top: 1rem;
  margin-bottom: 0.25rem;
`;

const ModalText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
  margin-bottom: 1.5rem;
`;

const ButtonArea = styled.div`
  display: flex;
  gap: 0.625rem;
  width: 100%;
`;

export default function Modal({
  icon = <WarningIcon />,
  onCancel,
  onConfirm,
  title,
  content,
  cancelText = '취소',
  confirmText = '확인',
}: {
  icon: ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
  content: string;
  cancelText?: string;
  confirmText?: string;
}) {
  return (
    <>
      <Backdrop />
      <ModalContainer>
        {icon}
        <ModalTitle variant="body1_md">{title}</ModalTitle>
        <ModalText variant="caption1_rg">{content}</ModalText>

        <ButtonArea>
          <LargeButton
            text={cancelText}
            variant="secondary"
            onClick={onCancel}
          />
          <LargeButton
            text={confirmText}
            variant="secondary"
            onClick={onConfirm}
          />
        </ButtonArea>
      </ModalContainer>
    </>
  );
}
