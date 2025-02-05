import { COLORS } from '@/styles/theme';

export default function CheckBoxOnIcon({
  color1 = COLORS.PRIMARY[500],
  color2 = COLORS.WHITE,
}: {
  color1?: string;
  color2?: string;
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <rect width="20" height="20" fill={color1} rx="4" />
      <path
        stroke={color2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.667 6.792 8.25 13.208l-2.917-2.916"
      />
    </svg>
  );
}
