import Text from '@/components/atoms/Text';
import { BorderedHeader } from './styles';

export default function Back({ text }: { text: string }) {
  return (
    <BorderedHeader>
      <Text variant="header3" as="h1">
        {text}
      </Text>
    </BorderedHeader>
  );
}
