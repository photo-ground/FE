import styled from 'styled-components';

type Variant =
  | 'header1'
  | 'header2'
  | 'header3'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'body1_md'
  | 'body1_rg'
  | 'body2_md'
  | 'body2_rg'
  | 'body3'
  | 'caption1_md'
  | 'caption1_rg'
  | 'caption2'
  | 'caption3';

const Text = styled.p<{ variant: Variant }>`
  font-size: ${({ theme, variant }) => theme.typography[variant].fontSize};
  font-weight: ${({ theme, variant }) => theme.typography[variant].fontWeight};
  line-height: ${({ theme, variant }) => theme.typography[variant].lineHeight};
  color: ${({ theme }) => theme.colors.white};
`;

export default Text;
