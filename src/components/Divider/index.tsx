import styled from 'styled-components';

type DividerProps = {
  size?: string; // 선택적 size 속성
  color?: string;
};

const Divider = styled.div<DividerProps>`
  height: ${(props) => props.size || '1px'};
  background: ${(props) => props.color || '#333333'};
  width: 100%;
`;

export default Divider;
