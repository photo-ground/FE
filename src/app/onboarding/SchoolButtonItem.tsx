import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Link from 'next/link';
import { SchoolButtonProps } from './interface';

const Container = styled.div`
  position: relative;
  height: 96px;
  margin: 0.75rem auto;
  border-radius: 0.5rem;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
  }
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
  text-align: right;

  p {
    margin: 0;
  }
`;

export default function SchoolButtonItem({
  title,
  subTitle,
  src,
  link,
  onClick,
}: SchoolButtonProps & { onClick?: () => void }) {
  return (
    <Link href={link} passHref>
      <Container onClick={onClick}>
        <Background src={src} alt={`${title} 이미지`} />
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
