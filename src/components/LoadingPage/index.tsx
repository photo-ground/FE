import styled from 'styled-components';
import Lottie from 'react-lottie';
import LoadingLottie from './LoadingLottie.json';
import BREAK_POINT from '@/styles/constants';

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100dvw;
  max-width: ${BREAK_POINT}px;
  height: 100dvh;
`;

export default function LoadingPage() {
  return (
    <Container>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: LoadingLottie,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={100}
        width={100}
      />
    </Container>
  );
}
