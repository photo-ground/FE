import CheckIcon from '@/assets/modal/CheckIcon';
import LargeButton from '@/components/atoms/LargeButton';
import Text from '@/components/atoms/Text';
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

interface ModalProps {
  onClose: () => void;
  modalTitle?: string;
  modalText?: string;
  buttonValue?: string;
}

export default function Modal({
  onClose,
  modalTitle = '내 정보 수정 완료!',
  modalText = '변경해주신 회원정보를 반영했어요',
  buttonValue = '확인',
}: ModalProps) {
  return (
    <>
      <Backdrop />
      <ModalContainer>
        <CheckIcon />
        <ModalTitle variant="body1_md">{modalTitle}</ModalTitle>
        <ModalText variant="caption1_rg">{modalText}</ModalText>
        <LargeButton text={buttonValue} variant="secondary" onClick={onClose} />
      </ModalContainer>
    </>
  );
}
