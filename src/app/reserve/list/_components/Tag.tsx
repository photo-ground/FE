import Text from '@/components/atoms/Text';
import { COLOR } from '@/constants';
import styled from 'styled-components';

type TagType = 'general' | 'error' | 'success';

function getBorderColor(type: TagType) {
  switch (type) {
    case 'error':
      return COLOR.NEGATIVE[500];
    case 'success':
      return COLOR.POSITIVE[500];
    default:
      return COLOR.GRAY[200];
  }
}

function getBackgroundColor(type: TagType) {
  switch (type) {
    case 'error':
      return COLOR.NEGATIVE[800];
    case 'success':
      return COLOR.POSITIVE[800];
    default:
      return COLOR.GRAY[800];
  }
}

const Container = styled.div<{ $border: string; $background: string }>`
  padding: 0.375rem 1rem;
  width: fit-content;
  background: ${({ $background }) => $background};
  border: 1px solid ${({ $border }) => $border};
  border-radius: 1rem;
`;

const ColoredText = styled(Text)<{ $text: string }>`
  color: ${({ $text }) => $text};
`;

export default function Tag({
  text,
  type = 'general',
}: {
  text: string;
  type?: TagType;
}) {
  return (
    <Container
      $border={getBorderColor(type)}
      $background={getBackgroundColor(type)}
    >
      <ColoredText variant="body3" $text={getBorderColor(type)}>
        {text}
      </ColoredText>
    </Container>
  );
}
