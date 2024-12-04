import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Link from 'next/link';
import { SchoolButtonProps } from './interface';

const Container = styled.div`
  position: relative;
  height: 96px;
  margin: 0.75rem auto;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;
const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 96px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const GradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.9) 100%
  );
`;

const Title = styled(Text)`
  position: absolute;
  top: 0.75rem;
  left: 1.5rem;
`;

export default function SchoolButtonItem({
  title,
  src,
  link,
}: SchoolButtonProps) {
  return (
    <Link href={link} passHref>
      <Container>
        <Background src={src} alt={title} />
        <GradientOverlay />
        <Title variant="header3">{title}</Title>
      </Container>
    </Link>
  );
}
