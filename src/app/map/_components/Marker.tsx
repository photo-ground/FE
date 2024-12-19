import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Triangle from './Triangle';

const Container = styled.div`
  width: 5rem;
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 0.5rem;
  text-align: center;
  position: relative;
`;

const MarkerImage = styled.img`
  width: 4.5rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 0.25rem;
`;

const GrayText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

type MarkerProps = {
  src: string;
  title: string;
};

export default function Marker({ src, title }: MarkerProps) {
  return (
    <Container>
      <MarkerImage src={src} alt={title} />
      <GrayText variant="body1_md">{title}</GrayText>
      <Triangle color={({ theme }) => theme.colors.gray[100]} />
    </Container>
  );
}
