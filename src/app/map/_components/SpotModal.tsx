'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CloseIcon from '@/assets/CloseIcon';
import RightChevronIcon from '@/assets/RightChevronIcon';
import LeftChevronIcon from '@/assets/LeftChevronIcon';
import Text from '@/components/atoms/Text';
import SmallButton from '@/components/atoms/SmallButton';

import { SliderData } from './Slider';
import useSpotStore from '../_store';

const ImageContainer = styled.div`
  width: 100%;
  max-width: 286px;
  aspect-ratio: 3 / 4;
  text-align: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 86px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: contain;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50;
  width: 100%;
  height: 100%;
  max-width: 540px;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1000;
  padding: 1rem;
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const CloseHeader = styled.div`
  margin-right: auto;
`;

const Info = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  text-align: center;
`;

const SwiperSlideBox = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  margin: 0;
  button {
    width: fit-content;
    margin: 0 auto;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  height: 90%;
  align-items: center; /* 세로 기준으로 가운데 정렬 */
  justify-content: center; /* 가로 기준으로 가운데 정렬 */
`;

interface ModalProps {
  sliderData: SliderData[];
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}
// onClicked: ()=> void();

// photoSpot배열에서 currIndex를 먼저 찾아 보여주고 그 기준으로 좌우왔다갔다
export default function SpotModal({ sliderData, setModalState }: ModalProps) {
  const router = useRouter();
  const clearCurrPostIdIndex = useSpotStore(
    (state) => state.clearCurrPostIdIndex,
  );

  const currPostIdIndex = useSpotStore((state) => state.currPostIdIndex);

  const handleModalClose = () => {
    setModalState(false);
    clearCurrPostIdIndex();
  };

  const handleSmallButton = (postId: number) => {
    router.push(`/post/${postId}`);
  };

  return ReactDOM.createPortal(
    <>
      {/* <Backdrop /> */}
      <Overlay onClick={() => window.history.back()} />
      <ModalContainer>
        <CloseHeader>
          <IconButton onClick={() => handleModalClose()}>
            <CloseIcon />
          </IconButton>
        </CloseHeader>
        <ContentWrapper>
          {/* 커스텀 내비게이션 버튼 */}
          <div className="custom-prev">
            <IconButton>
              <LeftChevronIcon /> {/* 원하는 아이콘 컴포넌트 */}
            </IconButton>
          </div>

          <Swiper
            // install Swiper modules
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            initialSlide={currPostIdIndex as number}
            scrollbar={{ draggable: true }}
          >
            {sliderData.map((item) => (
              <SwiperSlideBox key={item.imageUrl}>
                <ImageContainer>
                  <Image src={item.imageUrl} alt={item.imageUrl} />
                </ImageContainer>
                <Info>
                  <Text variant="header2">{item.photographerName}</Text>
                  <Text variant="body3" color="#a6a6a6">
                    {item.univ} | {item.spotName}
                  </Text>
                </Info>
                <SmallButton.Tertiary
                  onClick={() => handleSmallButton(item.postId)}
                  text="게시물 보기"
                />
              </SwiperSlideBox>
            ))}
          </Swiper>
          <div className="custom-next">
            <IconButton>
              <RightChevronIcon /> {/* 원하는 아이콘 컴포넌트 */}
            </IconButton>
          </div>
          {/* <Slider
            sliderData={sliderData}
            currPostIdIndex={currPostIdIndex ?? 0} // Default to 0 if null
            /> */}
        </ContentWrapper>
      </ModalContainer>
    </>,
    document.getElementById('modal-root')!,
  );
}
