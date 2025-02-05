import { Z_INDEX } from '@/constants';
import styled from 'styled-components';

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  z-index: ${Z_INDEX.BACKGROUND_IMAGE};
`;

export default function Background({ type = 1 }: { type?: number }) {
  return (
    <BackgroundImage src={`/images/background${type}.webp`} alt="background" />
  );
}
