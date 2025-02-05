import { COLORS } from '@/styles/theme';

export default function CheckBoxOffIcon({
  color = COLORS.WHITE,
}: {
  color?: string;
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <rect
        width="19.2"
        height="19.2"
        x=".4"
        y=".4"
        stroke={color}
        strokeWidth=".8"
        rx="3.6"
      />
    </svg>
  );
}
