import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import { COLOR } from '@/constants';
import RightChevronIcon from '@/assets/RightChevronIcon';
import PhotoIcon from '@/assets/modal/PhotoIcon';
import Text from '@/components/atoms/Text';
import ReserveInfo from '@/components/ReserveInfo';
import LargeButton from '@/components/atoms/LargeButton';
import ConfirmModal from '@/components/modals/ConfirmModal';
import InfoIcon from '@/assets/InfoIcon';

import Tag from './Tag';
import { Reservation } from '../type';
import completeSnap from '../_libs/completeSnap';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 1.25rem;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[900]};
  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  border-radius: 0.5rem;

  margin-bottom: 1rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DivideLine = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  margin: 1rem 0;
`;

const MessageArea = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  margin-bottom: 1rem;
`;

const Message = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function ConfirmCard({ data }: { data: Reservation }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <TitleArea>
            <Tag text="예약 확정" type="success" />
            <Link href={`/reserve/${data.reservationId}`}>
              <RightChevronIcon size="20" />
            </Link>
          </TitleArea>
        </Header>

        <DivideLine />

        <ReserveInfo data={data} chipType="link" />
      </Container>

      <MessageArea>
        <InfoIcon color={COLOR.GRAY[200]} />
        <Message variant="body2_rg">
          최종 촬영이 완료되었다면, 하단 버튼을 눌러주세요.
        </Message>
      </MessageArea>

      <LargeButton.Tertiary text="최종 스냅 완료" onClick={onOpen} />

      {isOpen && (
        <ConfirmModal
          icon={<PhotoIcon />}
          onCancel={onClose}
          onConfirm={() =>
            completeSnap(data.reservationId).then((response) => {
              if (response) {
                router.push('/reserve/prev');
              }
            })
          }
          title="사진 보정본까지 모두 받았나요?"
          content="소중한 추억을 만들었길 바라요"
          confirmText="네"
          cancelText="아니요"
        />
      )}
    </Wrapper>
  );
}
