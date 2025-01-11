import styled, { DefaultTheme } from 'styled-components';
import Text from '@/components/atoms/Text';

type Variant = 'primary' | 'secondary';
type Size = 'fit-content' | 'dynamic';

const getBackgroundColor = ({
  theme,
  variant,
  active,
}: {
  theme: DefaultTheme;
  variant: Variant;
  active: boolean;
}) => {
  if (active) {
    return theme.colors.gray[600];
  }
  if (variant === 'primary') {
    return theme.colors.primary[100];
  }
  return theme.colors.gray[900];
};

// non-boolean문제 때문에 props늘려씀
const Button = styled.button<{
  variant: Variant;
  $active: boolean;
  size: Size;
}>`
  width: ${(props) => (props.size === 'fit-content' ? 'fit-content' : '100%')};
  padding: 10px 1.25rem;
  background: ${(props) =>
    getBackgroundColor({
      theme: props.theme,
      variant: props.variant,
      active: props.$active,
    })};
  outline: none;
  border: none;
  border-radius: 1.5rem;
  flex: 0 0 auto;
  cursor: pointer;
`;

const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function Chip({
  text,
  variant = 'primary',
  active = false,
  size = 'fit-content', // 기본 크기: 글자에 맞춤
  onClick = () => {},
}: {
  text: string;
  variant?: Variant;
  active?: boolean;
  size?: Size; // 크기 옵션 추가
  onClick?: () => void;
}) {
  return (
    <Button $active={active} variant={variant} size={size} onClick={onClick}>
      {active ? (
        <ButtonText variant="body1_md">{text}</ButtonText>
      ) : (
        <Text variant="body1_md">{text}</Text>
      )}
    </Button>
  );
}
