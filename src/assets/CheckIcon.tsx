import { COLOR } from '@/constants';

export default function CheckIcon({ color = COLOR.WHITE }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle cx="16" cy="16" r="16" fill="#FF4000" />
      <circle cx="16" cy="16" r="8" fill="#212121" />
    </svg>
  );
}
