import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Button from './styles';

const PrimaryButton = styled(Button)<{ disabled: boolean }>`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray[600] : theme.colors.primary[100]};
  border: 1px solid transparent;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
`;

const DisabledText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function Primary({
  text,
  disabled = false,
  onClick = () => {},
}: {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <PrimaryButton disabled={disabled} onClick={onClick}>
      {disabled ? (
        <DisabledText variant="body1_rg">{text}</DisabledText>
      ) : (
        <Text variant="title3">{text}</Text>
      )}
    </PrimaryButton>
  );
}
