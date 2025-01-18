import styled from 'styled-components';

type SpacerProps = {
  size?: string; // 선택적 size 속성
};

const Spacer = styled.div<SpacerProps>`
  height: ${(props) => props.size || '1rem'}; // 기본 여백 크기는 1rem
  width: 100%;
`;

export default Spacer;
