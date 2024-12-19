import styled from 'styled-components';

const TriangleContainer = styled.div`
  position: absolute;
  width: 18px;
  height: 16px;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(180deg); /* 180도 회전 */
  z-index: -1;
`;

const TriangleBase = styled.div<{ color: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
`;

const UpperTriangle = styled(TriangleBase)`
  border-top-right-radius: 6px;
  transform: rotate(-60deg) skewX(-30deg) scaleY(0.866);
`;

const LowerTriangle = styled(TriangleBase)`
  border-top-right-radius: 6px;
  transform: rotate(-180deg) skewX(-30deg) scaleY(0.866) translateY(-50%);
`;

const BottomRightTriangle = styled(TriangleBase)`
  border-top-left-radius: 6px;
  transform: rotate(180deg) skewX(30deg) scaleY(0.866) translateY(-50%);
`;

type TriangleProps = {
  color: string | ((props: { theme: any }) => string); // ???
};

export default function Triangle({ color }: TriangleProps) {
  return (
    <TriangleContainer>
      <UpperTriangle color={color} />
      <LowerTriangle color={color} />
      <BottomRightTriangle color={color} />
    </TriangleContainer>
  );
}
