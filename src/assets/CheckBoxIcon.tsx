import { COLORS } from '@/styles/theme';

export default function CheckBoxIcon({
  color = COLORS.WHITE,
}: {
  color?: string;
}) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6668 3.79199L5.25016 10.2087L2.3335 7.29199"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
