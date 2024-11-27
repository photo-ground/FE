import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Button from './styles';

const PrimaryButton = styled(Button)<{ disabled: boolean }>`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray[600] : theme.colors.primary[100]};
`;

const DisabledText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function Primary({
  text,
  disabled = false,
}: {
  text: string;
  disabled?: boolean;
}) {
  return (
    <PrimaryButton disabled={disabled}>
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
};
