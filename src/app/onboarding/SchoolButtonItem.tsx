import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Link from 'next/link';
import Image from 'next/image';
import { SchoolButtonProps } from './interface';

const Container = styled.a`
  position: relative;
  display: block;
  height: 96px;
  margin: 0.75rem auto;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  border-radius: 0.5rem;
  overflow: hidden;
  text-decoration: none;
`;

const Background = styled(Image)`
  position: absolute;
  width: 100%;
  height: 96px;
  object-fit: cover;
  z-index: -1;
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
  color: white;
`;

export default function SchoolButtonItem({
  title,
  src,
  link,
}: SchoolButtonProps) {
  return (
    <Link href={link} passHref>
      <Container aria-label={`${title}로 이동`}>
        <Background src={src} alt={title} fill />
        <GradientOverlay />
        <Title variant="header3">{title}</Title>
      </Container>
    </Link>
  );
}
