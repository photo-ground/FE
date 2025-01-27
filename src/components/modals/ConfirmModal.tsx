import { ReactNode } from 'react';

import WarningIcon from '@/assets/modal/WarningIcon';
import LargeButton from '@/components/atoms/LargeButton';
import {
  Backdrop,
  ButtonArea,
  ModalContainer,
  ModalText,
  ModalTitle,
} from './styles';

export default function ConfirmModal({
  icon = <WarningIcon />,
  title,
  content,
  cancelText = '취소',
  confirmText = '확인',
  onCancel,
  onConfirm,
}: {
  title: string;
  content: string;
  cancelText?: string;
  confirmText?: string;
  icon: ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
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
