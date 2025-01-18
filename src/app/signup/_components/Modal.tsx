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

export default function Modal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <Backdrop />
      <ModalContainer>
        <CheckIcon />
        <ModalTitle variant="body1_md">회원가입 완료!</ModalTitle>
        <ModalText variant="caption1_rg">
          다양한 스냅 촬영 콘텐츠를 둘러보세요
        </ModalText>
        <LargeButton text="확인" variant="secondary" onClick={onClose} />
      </ModalContainer>
    </>
  );
}
