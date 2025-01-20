import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Link from 'next/link';
import Image from 'next/image';
import { SchoolButtonProps } from './interface';

const Container = styled.div`
  position: relative;
  display: block;
  height: 96px;
  margin: 0.75rem auto;

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
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const Title = styled.div`
  position: absolute;
  top: 10px;
  right: 16px;
  color: white;
  p {
    text-align: right;
  }
`;

export default function SchoolButtonItem({
  title,
  subTitle,
  src,
  link,
}: SchoolButtonProps) {
  return (
    <Link href={link}>
      <Container aria-label={`${title}로 이동`}>
        <Background src={src} alt={title} fill />
        <GradientOverlay />
        <Title>
          <Text variant="header3">{title}</Text>
          <Text variant="body3" color="#bfbfbf">
            {subTitle}
          </Text>
        </Title>
      </Container>
    </Link>
  );
}
