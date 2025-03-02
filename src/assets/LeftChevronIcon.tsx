import { COLOR } from '@/constants';

export default function LeftChevronIcon({
  color = COLOR.WHITE,
}: {
  color?: string;
}) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9891 4.16579C16.2101 4.38684 16.2101 4.74524 15.9891 4.96629L6.95535 14L15.9891 23.0337C16.2101 23.2548 16.2101 23.6132 15.9891 23.8342C15.768 24.0553 15.4096 24.0553 15.1886 23.8342L6.02143 14.6671C5.65301 14.2987 5.65301 13.7013 6.02143 13.3329L15.1886 4.16579C15.4096 3.94474 15.768 3.94474 15.9891 4.16579Z"
        fill={color}
      />
    </svg>
  );
}
