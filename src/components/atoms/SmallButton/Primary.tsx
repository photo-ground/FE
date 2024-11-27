import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Button from './styles';

const PrimaryButton = styled(Button)<{ disabled: boolean }>`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray[600] : theme.colors.primary[100]};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'cursor')};
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

Primary.defaultProps = {
  disabled: false,
  onClick: () => {},
};
