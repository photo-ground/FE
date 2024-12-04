import Text from '@/components/atoms/Text';
import { BorderedHeader } from './styles';

export default function SubTitle({ text }: { text: string }) {
  return (
    <BorderedHeader>
      <Text variant="title1_sb" as="h1">
        {text}
      </Text>
    </BorderedHeader>
  );
}
