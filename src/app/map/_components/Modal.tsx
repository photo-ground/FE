'use client';

import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

import { IconButton } from '@mui/material';
import CloseIcon from '@/assets/CloseIcon';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Text from '@/components/atoms/Text';
import SmallButton from '@/components/atoms/SmallButton';
import { useRouter } from 'next/navigation';

import { SliderData } from './Slider';

import useSpotStore from '../_store';

const ImageContainer = styled.div`
  position: relative;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1000;
  padding: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const CloseHeader = styled.div`
  margin-right: auto;
`;
const ContentWrapper = styled.div`
  // flex: 1; /* 남은 공간을 채움 */
  // margin: 0 auto;
  display: flex;
  align-items: center; /* 세로 기준으로 가운데 정렬 */
  justify-content: center; /* 가로 기준으로 가운데 정렬 */
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
  margin: 0;
`;

interface ModalProps {
  sliderData: SliderData[];
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}
// onClicked: ()=> void();

// photoSpot배열에서 currIndex를 먼저 찾아 보여주고 그 기준으로 좌우왔다갔다
export default function Modal({ sliderData, setModalState }: ModalProps) {
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
      <Overlay onClick={() => window.history.back()} />
      <ModalContainer>
        <CloseHeader>
          <IconButton onClick={() => handleModalClose()}>
            <CloseIcon />
          </IconButton>
        </CloseHeader>
        <ContentWrapper>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            initialSlide={currPostIdIndex as number}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {sliderData.map((item) => (
              <SwiperSlideBox>
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
