import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Button from './styles';

const BrandButton = styled(Button)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};
  cursor: pointer;
  height: 100%;
`;

const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary[500]};
`;

export default function Brand({
  text,
  onClick = () => {},
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <BrandButton onClick={onClick}>
      <ButtonText variant="body1_md">{text}</ButtonText>
    </BrandButton>
  );
}
