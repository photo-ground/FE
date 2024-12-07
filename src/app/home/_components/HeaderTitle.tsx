import Text from '@/components/atoms/Text';
import styled from 'styled-components';

type HeaderTitleProps = {
  title: string;
};

export default function HeaderTitle({ title }: HeaderTitleProps) {
  return (
    <TextStyle>
      <Text variant="title1_sb">{title}</Text>
    </TextStyle>
  );
}

const TextStyle = styled.div`
  margin: 1.25rem;
  margin-top: 0;
`;
