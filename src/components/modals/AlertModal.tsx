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

export default function AlertModal({
  icon = <WarningIcon />,
  title,
  content,
  confirmText = '확인',
  onConfirm,
  onCancel = () => {},
}: {
  title: string;
  content: string;
  confirmText?: string;
  icon: ReactNode;
  onConfirm: () => void;
  onCancel?: () => void;
}) {
  return (
    <>
      <Backdrop onClick={onCancel} />
      <ModalContainer>
        {icon}
        <ModalTitle variant="body1_md">{title}</ModalTitle>
        <ModalText variant="caption1_rg">{content}</ModalText>

        <ButtonArea>
          <LargeButton.Secondary text={confirmText} onClick={onConfirm} />
        </ButtonArea>
      </ModalContainer>
    </>
  );
}
