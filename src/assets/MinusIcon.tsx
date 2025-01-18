import { COLORS } from '@/styles/theme';

export default function MinusIcon({
  color = COLORS.WHITE,
}: {
  color?: string;
}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.2334 7.5H12.7681C12.9007 7.5 13.0279 7.55268 13.1216 7.64645C13.2154 7.74022 13.2681 7.86739 13.2681 8C13.2681 8.13261 13.2154 8.25978 13.1216 8.35355C13.0279 8.44732 12.9007 8.5 12.7681 8.5H3.2334C3.10079 8.5 2.97361 8.44732 2.87984 8.35355C2.78608 8.25978 2.7334 8.13261 2.7334 8C2.7334 7.86739 2.78608 7.74022 2.87984 7.64645C2.97361 7.55268 3.10079 7.5 3.2334 7.5Z"
        fill={color}
      />
    </svg>
  );
}
