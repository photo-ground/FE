import styled from 'styled-components';
import Text from '@/components/atoms/Text';

type Variant = 'primary' | 'secondary';

const TagContainer = styled.div<{ variant: Variant }>`
  width: fit-content;
  padding: 0.375rem 1rem;
  background: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.gray[100] : theme.colors.gray[900]};
  border-radius: 1.5rem;
`;

const PrimaryText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const SecondaryText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function Tag({
  text,
  variant,
}: {
  text: string;
  variant: Variant;
}) {
  return (
    <TagContainer variant={variant}>
      {variant === 'primary' ? (
        <PrimaryText variant="body3">{text}</PrimaryText>
      ) : (
        <SecondaryText variant="body3">{text}</SecondaryText>
      )}
    </TagContainer>
  );
}
