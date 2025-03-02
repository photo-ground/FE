import { COLOR } from '@/constants';

export default function RightChevronLargeIcon({
  size = '28px',
  color = COLOR.WHITE,
}: {
  size?: string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1463 4.16579C10.9252 4.38684 10.9252 4.74524 11.1463 4.96629L20.18 14L11.1463 23.0337C10.9252 23.2548 10.9252 23.6132 11.1463 23.8342C11.3673 24.0553 11.7257 24.0553 11.9468 23.8342L21.1139 14.6671C21.4823 14.2987 21.4823 13.7013 21.1139 13.3329L11.9468 4.16579C11.7257 3.94474 11.3673 3.94474 11.1463 4.16579Z"
        fill={color}
      />
    </svg>
  );
}
