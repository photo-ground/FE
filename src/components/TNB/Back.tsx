import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import LeftChevronIcon from '@/assets/LeftChevronIcon';
import { BorderedHeader } from './styles';

const IconWrapper = styled.button`
  position: absolute;
  left: 1.25rem;

  background: transparent;
  border: none;
  outline: none;

  cursor: pointer;
`;

export default function Back({ text }: { text: string }) {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <BorderedHeader>
      <IconWrapper onClick={goBack}>
        <LeftChevronIcon />
      </IconWrapper>
      <Text variant="header3" as="h1">
        {text}
      </Text>
    </BorderedHeader>
  );
}
