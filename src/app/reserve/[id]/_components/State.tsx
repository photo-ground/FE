import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import ProgressBar from './ProgressBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Box = styled.div`
  display: flex;
  gap: 1rem;

  padding: 2rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;
`;

export default function State() {
  return (
    <Container>
      <Text variant="title2_sb">진행 상황</Text>
      <Box>
        <ProgressBar />
      </Box>
    </Container>
  );
}
